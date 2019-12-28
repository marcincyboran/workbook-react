import React from 'react';
import './Review.scss';
import { ReviewType } from '../../helpers/types';
import Helpers from '../../helpers/shared';
import Rating from '../Rating/Rating';

type ReviewProps = {
    review: ReviewType;
};

const Review: React.FC<ReviewProps> = ({ review }) => {
    return (
        <article className="review">
            <header className="review__header">
                <span className="review__person">{review.name}</span>
                <span className="review__date">{Helpers.formatDate(review.createdAt)}</span>
            </header>
            <p className="review__content">
                <span className="review__rating">
                    <Rating likes={review.rating} color="primary" />
                </span>
                <span className="review__text">{review.text}</span>
            </p>
        </article>
    );
};

export default Review;
