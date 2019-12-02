import React from 'react';
import './PanelUser.scss';
import SvgSprite from '../../UI/SvgSprite/SvgSprite';
import Paragrapg from '../../UI/Typography/Paragraph/Paragraph';
import PropTypes, { InferProps } from 'prop-types';

const PanelUserProps = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};
type PanelUserPropsType = InferProps<typeof PanelUserProps>;

const PanelUser: React.FC<PanelUserPropsType> = ({ firstName, lastName }) => {
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
