import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import {connect} from "react-redux";
import {emailSigninStart, googleSigninStart} from './../../redux/user/user.actions'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        const {emailSigninStart} = this.props;
        emailSigninStart(email,password);
        // try{
        //     await auth.signInWithEmailAndPassword(email,password);
        // }
        // catch(error){
        //     console.error(error);
        // }
        //
        // this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const {googleSigninStart} = this.props;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type="button" onClick={googleSigninStart} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps =dispatch=>({
    googleSigninStart   : ()=> dispatch(googleSigninStart()),
    emailSigninStart    : (email,password) => dispatch(emailSigninStart({email,password}))
});
export default connect(null,mapDispatchToProps)(SignIn);