import React from "react";
import SignIn from "../../components/sign-in/signin.component";
import './sign-in-and-sign-up.styles.scss';
import SignUp from "../../components/sign-up/signup.component";

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;