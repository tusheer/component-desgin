import React from 'react';

interface FromSelectProps {
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactChild;
}

const FormSelect: React.FC<FromSelectProps> = ({ value, placeholder, className, onChange, children }) => {
    return (
        <select
            onChange={onChange}
            value={value}
            className={`h-12 px-4 text-lg border-round  focus:outline-none  border border-opacity-40 border-solid bg-gray-100 bg-opacity-200 border-greyColor  w-full ${className}`}
        >
            <option value=''>{placeholder}</option>
            <React.Fragment>{children}</React.Fragment>
        </select>
    );
};

FormSelect.defaultProps = {
    placeholder: 'Select Option',
    className: '',
};

export default FormSelect;
