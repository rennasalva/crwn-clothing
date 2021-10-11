import React,{useState} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect,useDispatch} from "react-redux";
import './sign-up.component';
import {signUpStart} from "../../redux/user/user.actions";

const  Signup = ({ signUpStart })=>{
    const [userCredentials,setuserCredentials] = useState({
        displayName : '',
        email: '',
        password: '',
        confirmPassword:''
    });

    const dispatch = useDispatch();

    const {displayName, email,password,confirmPassword} = userCredentials;

    const handleSubmit = async (evt)=>{
        evt.preventDefault();
        const {signUpStart} = this.props;
        if(password !== confirmPassword){
            alert('password don\'t match');
            return;
        }
        dispatch(signUpStart({email,password,displayName}));

    }

    const handleChange = (event)=>{
       const {name,value} = event.target;
        setuserCredentials({...userCredentials,[name]:value});
    }

    return (
            <div className="sign-up">
                <h2>I do not have and account</h2>
                <span>Sign up with yuor email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value = {displayName}
                        onChange ={handleChange}
                        label = 'Display Name'
                        required
                    />

                    <FormInput
                        type='text'
                        name='email'
                        value = {email}
                        onChange ={handleChange}
                        label = 'Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value = {password}
                        onChange ={handleChange}
                        label = 'Password'
                        required
                    /> 

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value = {confirmPassword}
                        onChange ={handleChange}
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

/*
const mapDispatchToProps = dispatch =>(
    {
        signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
    }
)

export default connect(null,mapDispatchToProps)(Signup);
*/


export default Signup;