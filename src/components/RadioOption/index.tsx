import React from 'react';
import './RadioOption.css';
interface SingleOption {
    name: string;
    value: string;
    SVGimg?: React.ReactChild;
}

interface RadioProps {
    className?: string;
    inputName: string;
    inputvalue: string | number;
    optionLists: SingleOption[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioOption: React.FC<RadioProps> = ({ inputvalue, optionLists, inputName, onChange, className }) => {
    return (
        <div className={`h-12 border-round overflow-hidden bg flex bg-gray-100 bg-opacity-200 text-lg  ${className}`}>
            <React.Fragment>
                {optionLists.map(({ name, value, SVGimg }: SingleOption, index: number) => {
                    return (
                        <div
                            className={`w-full cursor-pointer h-full flex justify-center items-center relative  border-greyColor border border-opacity-40  ${
                                value === inputvalue ? 'bg-green text-white  active' : 'bg-transparent inactive text-greyColor'
                            }`}
                            key={index}
                        >
                            <input
                                onChange={onChange}
                                className='absolute cursor-pointer h-full opacity-0 w-full'
                                type='radio'
                                name={inputName}
                                value={value}
                            />
                            {SVGimg && SVGimg}
                            {name}
                        </div>
                    );
                })}
            </React.Fragment>
        </div>
    );
};

RadioOption.defaultProps = {
    className: '',
};

export default RadioOption;
