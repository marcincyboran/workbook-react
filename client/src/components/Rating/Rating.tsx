import React from 'react';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import classes from 'react-style-classes';

type RatingProps = {
    likes?: number;
    votes?: number;
    stars?: number;
    color?: 'primary' | 'secondary' | 'tertiary';
};

const Rating: React.FC<RatingProps> = ({ likes, votes, stars = 5, color = 'tertiary' }) => {
    const fullStars = votes ? Math.round((likes! / votes) * stars) : likes;

    let rating = Array(stars)
        .fill(1)
        .map((el, i) => {
            return (
                <SvgSprite
                    icon="star"
                    key={i}
                    className={classes('icon', 'icon--small', `icon--${i < fullStars! ? color : 'blank'}`)}
                />
            );
        });

    return <>{rating}</>;
};

export default Rating;
