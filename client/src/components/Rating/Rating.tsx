import React from 'react';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import classes from 'react-style-classes';

type RatingProps = {
    likes: number;
    votes: number;
    stars?: number;
};

const Rating: React.FC<RatingProps> = ({ likes, votes, stars = 5 }) => {
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

export default Rating;
