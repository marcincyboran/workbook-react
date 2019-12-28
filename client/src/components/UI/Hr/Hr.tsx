import React from 'react';
import './Hr.scss';
import classes from 'react-style-classes';

type HrProps = {
    align?: 'center' | 'right';
    thickness?: 'medium' | 'bold';
    color?: 'primary' | 'secondary';
    size?: 'small' | 'big';
    className?: string;
};

const Hr: React.FC<HrProps> = ({ align, size, thickness, color, className }) => {
    return (
        <hr
            className={classes(
                'hr',
                align && `hr--${align}`,
                size && `hr--${size}`,
                color && `hr--${color}`,
                thickness && `hr--${thickness}`,
                className
            )}
        />
    );
};

export default Hr;
