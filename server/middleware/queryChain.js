//

module.exports = (model, populate) => async (req, res, next) => {
    const ignore = ['select', 'sort', 'limit', 'page'];
    const queryCopy = { ...req.query };

    // Filter query obj
    ignore.forEach(ignoreItem => delete queryCopy[ignoreItem]);

    // Transform data for operators
    if (queryCopy.tags && queryCopy.tags.in) queryCopy.tags.in = queryCopy.tags.in.split(',');

    // Add $ before operators
    let queryCopyStr = JSON.stringify(queryCopy);
    const regExp = /\b(gt|gte|lt|lte|in)\b/g;
    queryCopyStr = queryCopyStr.replace(regExp, match => '$' + match);

    // Query chain
    let finalQuery = model.find(JSON.parse(queryCopyStr));
    if (req.query.select) query += select(req.query.select.split(',').join(' '));
    if (req.query.sort) query += sort(req.query.sort.split(',').join(' '));
    if (populate) query += populate(populate);

    // Pagination

    // Final response
    const data = await finalQuery;

    res.queryChain = {
        success: true,
        count: data.length,
        payload: data,
    };

    next();
};
