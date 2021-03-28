import React from 'react';
import LoadingSpiner from './LoadingSpiner';
import './SubmitButton.css';
interface ButtonProps {
    loading?: boolean;
    disable?: boolean;
    text?: string;
}

const SubmitButton: React.FC<ButtonProps> = ({ loading, disable, text }) => {
    return (
        <button
            className={`bg-green flex items-center  focus:outline-none text-gray-50 transition-all rounded-3xl h-10 px-10 mt-5  ${
                disable ? 'bg-opacity-100' : 'bg-opacity-40'
            }`}
        >
            {loading && <LoadingSpiner />}
            {text}
        </button>
    );
};

SubmitButton.defaultProps = {
    loading: false,
    disable: false,
    text: 'Submit',
};

export default SubmitButton;
