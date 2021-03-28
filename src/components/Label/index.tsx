import React from 'react';

interface LabelProps {
    text: string;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ text, className }) => {
    return <label className={`text-lg block  text-green ${className}`}>{text}</label>;
};
Label.defaultProps = {
    className: '',
};

export default Label;
