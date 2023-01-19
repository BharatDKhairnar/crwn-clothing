import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './signup.styles.scss';

const SignUp = () => {
    
    const [userCredentials, setUserCredentials] = useState({displayName:"",email: "",password: "",
                                                            confirmPassword: ""})
    
    const { displayName, email, password, confirmPassword } = userCredentials; // Here destructor object
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if( password !== confirmPassword ) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, displayName);

            setUserCredentials({ displayName:"", email: "", password: "", confirmPassword: "" })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name] : value })
    }
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                name="displayName" 
                type="text" 
                onChange={handleChange} 
                label="displayName"
                value={displayName} required />

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

                <FormInput 
                name="confirmPassword" 
                type="password" 
                onChange={handleChange} 
                label="password"
                value={confirmPassword} required />

                <div className='buttons'>
                    <CustomButton type="submit">
                        Sign Up
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp;