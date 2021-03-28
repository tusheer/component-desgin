import { checkValidEmail, checkValidPass } from './validationUtils';

interface SigninPerameter {
    password: string;
    email: string;
}
interface ErrorObj {
    password: boolean | undefined;
    email: boolean | undefined;
}

interface ValidtionReturn {
    isValid: boolean;
    errors: ErrorObj;
}

const signinValidation = ({ password, email }: SigninPerameter): ValidtionReturn => {
    const errors: ErrorObj = {
        password: undefined,
        email: undefined,
    };

    if (email.length && !checkValidEmail(email)) {
        errors.email = true;
    } else if (email.length) {
        errors.email = false;
    }
    if (password.length && !checkValidPass(password)) {
        errors.password = true;
    } else if (password.length) {
        errors.password = false;
    }

    return {
        isValid: !!Object.getOwnPropertyNames(errors).length ? false : true,
        errors: errors,
    };
};

export default signinValidation;
