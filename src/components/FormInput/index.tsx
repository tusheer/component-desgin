import React from 'react';

interface FromInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    className?: string;
    value?: string | number;
    smallText?: string;
    labelImage?: string;
    error?: boolean | undefined;
}

const FormInput: React.FC<FromInputProps> = ({ labelImage, name, placeholder, className, value, smallText, error, children, ...props }) => {
    const getClassname = (error: boolean | undefined): string => {
        if (error === true) {
            return 'border-red-500 border';
        } else if (error === false) {
            return 'border-green border';
        } else {
            return 'border-greyColor border border-opacity-40';
        }
    };
    return (
        <React.Fragment>
            <div
                className={`${className} h-12   border-solid bg-gray-100  bg-opacity-200  px-4 flex items-center border-round ${getClassname(
                    error
                )}`}
            >
                {labelImage && (
                    <div className='w-9 h-8 mr-4 flex items-center  border-r border-solid border-opacity-70 border-greyColor'>
                        <img className='h-4 w-4' src={labelImage} alt={name} />
                    </div>
                )}

                <input
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    className='w-full text-base h-full focus:outline-none bg-transparent'
                    {...props}
                />
            </div>
            {smallText && <p className='block text-sm text-gray-400'>{smallText}</p>}
        </React.Fragment>
    );
};

FormInput.defaultProps = {
    type: 'text',
    className: '',
};

export default FormInput;
