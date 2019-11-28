import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import classes from 'react-style-classes';

const RatingProps = {
    likes: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    stars: PropTypes.number,
};
type RatingPropType = InferProps<typeof RatingProps>;

const Rating: React.FC<RatingPropType> = ({ likes, votes, stars }) => {
    const fullStars = Math.round((likes / votes) * stars!);

    let rating = Array(stars)
        .fill(1)
        .map((el, i) => {
            return (
                <SvgSprite
                    icon="star"
                    key={i}
                    className={classes('icon', 'icon--small', `icon--${i < fullStars ? 'tertiary' : 'blank'}`)}
                />
            );
        });

    return <div>{rating}</div>;
};

Rating.defaultProps = {
    stars: 5,
};

export default Rating;
