import React from 'react';
import './Gallery.scss';
import { ImageType } from '../../helpers/types';

type GalleryProps = {
    imgs: ImageType[];
};

const Gallery: React.FC<GalleryProps> = ({ imgs }) => {
    return (
        <div className="gallery">
            {imgs
                ? imgs.map(img => (
                      <figure>
                          <img src="" alt={img.alt} className="gallery__item" />
                      </figure>
                  ))
                : null}
        </div>
    );
};

export default Gallery;
