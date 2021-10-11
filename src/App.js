import React,{ useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect,useSelector,useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from "./pages/checkout/checkout.component";
import { auth, createUserProfileDocument,addCollectionAndItems } from './firebase/firebase.utils';
import { setCurrentUser,checkUserSession } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from './redux/shop/shop.selector'

const App = ()=> {

    //const currentUser = useSelector((state)=> console.log(state));
    const currentUser = useSelector(selectCurrentUser => console.log( ' selectCurrentUser',selectCurrentUser));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkUserSession());
    },[dispatch]);


    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin'  render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } />
        </Switch>
      </div>
    );

}

/*
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
 */



export default App;