import React from 'react';
import './PanelUser.scss';
import SvgSprite from '../../UI/SvgSprite/SvgSprite';
import Paragrapg from '../../UI/Typography/Paragraph/Paragraph';

const PanelUser: React.FC<{}> = () => {
    return (
        <div className="panel__user">
            <SvgSprite icon="user" />
            <Paragrapg className="panel__user-name" mod="big, bold">
                Marcin Cyboran <span>#1231</span>
            </Paragrapg>
        </div>
    );
};

export default PanelUser;
