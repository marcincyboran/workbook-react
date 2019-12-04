import React, { useState } from 'react';
import './Thumbnail.scss';
import defaultPlaceholder from '../../assets/imgs/placeholder_default.png';

type ThumbnailProps = {
    file: File;
};

const Thumbnail: React.FC<ThumbnailProps> = ({ file }) => {
    const [img, setImg] = useState();

    const reader = new FileReader();
    reader.onloadend = () => {
        setImg(reader.result);
    };
    reader.readAsDataURL(file);

    return <img src={img ? img : defaultPlaceholder} alt={img ? img.name : 'Placeholder'} className="thumbnail" />;
};

export default Thumbnail;
