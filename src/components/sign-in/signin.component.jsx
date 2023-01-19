import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import './signin.styles.scss';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });

    const { email, password } = userCredentials;
    
    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            
            auth.signInWithEmailAndPassword(email,password);
            setUserCredentials({ email: "", password: "" })

        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials,[name] : value })
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                onChange={handleChange} 
                label="email"
                value={email} required />

                <FormInput 
                name="password" 
                type="password" 
                onChange={handleChange} 
                label="password"
                value={password} required />

                <div className='buttons'>
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;