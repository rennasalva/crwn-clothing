import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";
import './sign-up.component';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async (evt)=>{
        evt.preventDefault();
        const {displayName, email,password,confirmPassword} = this.state
        if(password !== confirmPassword){
            alert('password don\'t match');
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);   
            console.log(user);
            await createUserProfileDocument(user,{displayName});
            //clear form
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassorwd:''
            });
        }
        catch(error){
            console.error(error);
        }
    }

    handleChange = (event)=>{
       const {name,value} = event.target;
       this.setState({[name]:value});
    }

    render(){
        const {displayName, email,password,confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2>I do not have and account</h2>
                <span>Sign up with yuor email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value = {displayName}
                        onChange ={this.handleChange}
                        label = 'Display Name'
                        required
                    />

                    <FormInput
                        type='text'
                        name='email'
                        value = {email}
                        onChange ={this.handleChange}
                        label = 'Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value = {password}
                        onChange ={this.handleChange}
                        label = 'Password'
                        required
                    /> 

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value = {confirmPassword}
                        onChange ={this.handleChange}
                        label = 'Conferma Password'
                        required
                    /> 

                    {/* 

                    

                      */}

                    <CustomButton type='submit' >SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signup;