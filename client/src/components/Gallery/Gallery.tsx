import React from 'react';
import './Gallery.scss';
import { ImageType } from '../../helpers/types';
import LazyLoad from 'react-lazyload';
import LoaderImg from '../UI/LoaderImg/LoaderImg';
import defaultPlaceholder from '../../assets/imgs/placeholder_default.png';

type GalleryProps = {
    imgs: ImageType[];
    items?: number;
};

const Gallery: React.FC<GalleryProps> = ({ imgs, items = 4 }) => {
    for (let i = 0; i < items; i++) {
        if (imgs[i]) continue;
        else imgs[i] = { src: defaultPlaceholder, alt: `Placeholder ${i}` };
    }

    return (
        <div className="gallery">
            {imgs
                ? imgs.map(img => (
                      <figure className="gallery__item" key={img.alt}>
                          <LazyLoad once={true} placeholder={<LoaderImg />}>
                              <img src={img.src} alt={img.alt} className="gallery__item-img" />
                          </LazyLoad>
                      </figure>
                  ))
                : null}
        </div>
    );
};

export default Gallery;
