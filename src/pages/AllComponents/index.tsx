import UserSVG from 'assets/img/user.svg';
import Checkbox from 'components/Checkbox';
import FormInput from 'components/FormInput';
import FormSelect from 'components/FormSelect';
import Label from 'components/Label';
import RadioOption from 'components/RadioOption';
import React from 'react';
import UserrSVG from './UserSVG';
function AllComponents() {
    const [sex, setSex] = React.useState('male');
    const [check, setCheck] = React.useState(true);
    const SexRadioSetting = [
        {
            name: 'Male',
            value: 'male',
            SVGimg: <UserrSVG />,
        },
        {
            name: 'Female',
            value: 'female',
            SVGimg: <UserrSVG />,
        },
    ];

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(!check);
    };
    return (
        <div className='w-full md:w-6/12 mx-auto px-8 pb-6 '>
            <h1 className='font-bold  text-4xl  mt-10 mb-20'>Component List</h1>
            <h3 className='my-8 text-2xl '>Form Input</h3>
            <FormInput
                labelImage={UserSVG}
                placeholder='White your name'
                name='Password'
                type='text'
                onChange={(event) => console.log(event)}
                value={''}
            />
            <h3 className='my-8 text-2xl '>Form Redio Select Button</h3>
            <RadioOption inputvalue={sex} onChange={(event) => setSex(event.target.value)} optionLists={SexRadioSetting} inputName='sex' />
            <h3 className='my-8 text-2xl '>Form Input</h3>
            <Label text='THis is label input' />
            <h3 className='my-8 text-2xl '>Checkbox</h3>
            <Checkbox name='checbox' checked={check} onChange={onChange} />
            <h3 className='my-8 text-2xl '>Select Form</h3>
            <FormSelect value='' placeholder='Select Car'>
                <React.Fragment>
                    <option value='Car'>Car</option>
                    <option value='Motor Cycle'>Car</option>
                </React.Fragment>
            </FormSelect>
        </div>
    );
}

export default AllComponents;
