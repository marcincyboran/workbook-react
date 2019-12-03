import React from 'react';
import './PanelUser.scss';
import SvgSprite from '../../UI/SvgSprite/SvgSprite';
import Paragrapg from '../../UI/Typography/Paragraph/Paragraph';

type PanelUserProps = {
    firstName?: string;
    lastName?: string;
};

const PanelUser: React.FC<PanelUserProps> = ({ firstName = 'John', lastName = 'Doe' }) => {
    return (
        <div className="panel__user">
            <SvgSprite icon="user" />
            <Paragrapg className="panel__user-name" mod="big, bold">
                {`${firstName} ${lastName}`}
            </Paragrapg>
        </div>
    );
};

export default PanelUser;
