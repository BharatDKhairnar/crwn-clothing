import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './signup.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName:"",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if( password !== confirmPassword ) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, displayName);

            this.setState({ displayName:"", email: "", password: "", confirmPassword: "" })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name] : value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="displayName" 
                    type="text" 
                    onChange={this.handleChange} 
                    label="displayName"
                    value={displayName} required />

                    <FormInput 
                    name="email" 
                    type="email" 
                    onChange={this.handleChange} 
                    label="email"
                    value={email} required />

                    <FormInput 
                    name="password" 
                    type="password" 
                    onChange={this.handleChange} 
                    label="password"
                    value={password} required />

                    <FormInput 
                    name="confirmPassword" 
                    type="password" 
                    onChange={this.handleChange} 
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
}

export default SignUp;