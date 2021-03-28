import Card from 'assets/img/card.svg';
import EmailImage from 'assets/img/email.svg';
import KeyImage from 'assets/img/key.svg';
import UserImage from 'assets/img/user.svg';
import Checkbox from 'components/Checkbox';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import Label from 'components/Label';
import RadioOption from 'components/RadioOption';
import React from 'react';
import PaypalSVG from './PaypalSVG';
import VisaSVG from './VisaSVG';
interface State {
    gender: 'male' | 'female';
    paymentCard: 'creditCard' | 'paypal';
}
const Text1From = () => {
    const [state, setState] = React.useState<State>({
        gender: 'male',
        paymentCard: 'creditCard',
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = event.target;
        setState({ ...state, [name]: value });
    };

    const gernderOptionList = [
        {
            name: 'Male',
            value: 'male',
        },
        {
            name: 'Female',
            value: 'female',
        },
    ];

    const cardOptionList = [
        {
            name: 'Credit Card',
            value: 'creditCard',
            SVGimg: <VisaSVG />,
        },
        {
            name: 'Paypal',
            value: 'paypal',
            SVGimg: <PaypalSVG />,
        },
    ];

    return (
        <form>
            <Label text='Account' className='mb-3.5' />
            <FormInput name='name' required type='text' labelImage={UserImage} placeholder='Full Name' className='mb-3.5' />
            <FormInput name='email' required type='email' labelImage={EmailImage} placeholder='Email Address' className='mb-3.5' />
            <FormInput name='password' required type='password' labelImage={KeyImage} placeholder='Password' className='mb-3.5' />
            <div className='flex md:space-x-4 space-x-0 flex-wrap md:flex-nowrap'>
                <div className='md:w-6/12  w-full mb-3.5 md:mb-0'>
                    <Label text='Date of Birth' className='mb-3.5' />
                    <div className='flex space-x-4'>
                        <FormInput name='day' required type='number' max={'2'} placeholder='DD' maxLength={2} />
                        <FormInput name='month' required type='number' placeholder='MM' maxLength={2} />
                        <FormInput name='year' required type='number' placeholder='YYYY' maxLength={4} />
                    </div>
                </div>
                <div className='md:w-6/12  w-full flex-wrap md:flex-nowrap'>
                    <Label text='Gender' className='mb-3.5' />
                    <RadioOption inputName='gender' inputvalue={state.gender} optionLists={gernderOptionList} onChange={onChange} />
                </div>
            </div>
            <Label text='Payment Details' className='mb-3.5 mt-3.5' />
            <RadioOption
                inputName='paymentCard'
                inputvalue={state.paymentCard}
                optionLists={cardOptionList}
                onChange={onChange}
                className='mb-3.5'
            />
            <FormInput labelImage={Card} name='cardNumber' required type='number' placeholder='Card Number' className='mb-3.5' />
            <div className='md:space-x-5 space-x-0 flex flex-wrap md:flex-nowrap'>
                <FormInput
                    labelImage={UserImage}
                    name='year'
                    required
                    type='number'
                    placeholder='Card CVC'
                    maxLength={4}
                    className='md:w-6/12  w-full mb-3.5 md:mb-0'
                />
                <div className='md:w-6/12  w-full   flex'>
                    <FormSelect placeholder='Select Date' className='w-6/12'>
                        <React.Fragment>
                            {/* I know in real word application dynamic select input doesnot work in the way, I just design the component.  */}
                            <option value='01'>01 Jan</option>
                            <option value='02'>02 Jan</option>
                            <option value='03'>03 Jan</option>
                        </React.Fragment>
                    </FormSelect>
                    <FormSelect placeholder='Select Year' className='w-6/12'>
                        <React.Fragment>
                            <option value='2015'>2015</option>
                            <option value='2016'>2016</option>
                            <option value='2017'>2017</option>
                            <option value='2018'>2018</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                        </React.Fragment>
                    </FormSelect>
                </div>
            </div>
            <Label text='Terms and Conditions' className='my-3.5' />
            <div className='flex'>
                <Checkbox />
                <div className='text-lg text-gray-400 ml-4 -mt-1'>
                    I accept the terms and condition for signing up to this service , and hereby confirm I have read the privacy policy
                </div>
            </div>
        </form>
    );
};

export default Text1From;
