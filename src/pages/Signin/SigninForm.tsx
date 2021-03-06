import EmailImage from 'assets/img/email.svg';
import KeyImage from 'assets/img/key.svg';
import Checkbox from 'components/Checkbox';
import FormInput from 'components/FormInput';
import Label from 'components/Label';
import SubmitButton from 'components/SubmitButton';
import React from 'react';
import { useHistory } from 'react-router-dom';
import delay from 'utils/delay';
import signinValidation from 'utils/SIgninValidation';
interface State {
    email: string;
    password: string;
}

interface Error {
    email: boolean | undefined;
    password: boolean | undefined;
}
const SigninForm = () => {
    const history = useHistory();
    const [agreeWithTerms, setTerms] = React.useState<boolean>(false);
    const [state, setState] = React.useState<State>({
        email: '',
        password: '',
    });
    const [buttonLodding, setLoading] = React.useState<boolean>(false);
    const [error, setErrors] = React.useState<Error>({
        password: undefined,
        email: undefined,
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const { errors } = signinValidation({ ...state, [name]: value });
        setState({ ...state, [name]: value });
        setErrors(errors);
    };

    const onSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();

        if (agreeWithTerms && !error.password && !error.password) {
            setLoading(true);
            delay(3000).then(() => {
                history.push('/successful');
            });
        }
    };

    const { email, password } = state;
    return (
        <form onSubmit={onSubmit}>
            <Label text='Account Information' className='mb-3' />
            <FormInput
                onChange={onChange}
                value={email}
                name='email'
                required
                type='email'
                labelImage={EmailImage}
                placeholder='Email Address'
                className='mb-3.5'
                error={error.email}
            />
            <FormInput
                error={error.password}
                onChange={onChange}
                value={password}
                name='password'
                required
                type='password'
                labelImage={KeyImage}
                placeholder='Password'
                className='mb-2'
                smallText='*Password should be min 1 numeric, 1 alphabetic, 1 symbol, 1 capital and at least 8 characters'
            />
            <Label text='Terms and Conditions' className='my-3' />
            <div className='flex'>
                <Checkbox checked={agreeWithTerms} onChange={(event) => setTerms(!agreeWithTerms)} />
                <div className='text-lg text-gray-400 ml-4 -mt-1'>
                    I accept the terms and condition for signing up to this service , and hereby confirm I have read the privacy policy
                </div>
            </div>
            <SubmitButton loading={buttonLodding} disable={agreeWithTerms} />
        </form>
    );
};

export default SigninForm;
