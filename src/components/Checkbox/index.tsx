import React from 'react';
import './checkbox.css';
interface CheckboxProps {
    name?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange }) => {
    return (
        <div className='relative checkbox'>
            <input
                className='absolute h-5 w-5 cursor-pointer left-0 opacity-0 z-40'
                onChange={onChange}
                type='checkbox'
                name={name}
                checked={checked}
            />
            <span className=' h-5 w-5 border-round border-green border-2 relative checkmarkspan'></span>
        </div>
    );
};

export default Checkbox;
