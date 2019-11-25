import React from 'react';
import './Tag.scss';

const Tag: React.FC<{}> = ({ children }) => <span className="tag">{children}</span>;

export default Tag;
