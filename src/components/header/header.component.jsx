import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from "reselect";
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.componet';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from './../../redux/cart/cart.selector'
import {selectCurrentUser} from './../../redux/user/user.selector'
import {signOutStart} from './../../redux/user/user.actions';

import './header.styles.scss';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles';


const Header = ({ currentUser,hidden,signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer >
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <div className='option' onClick={signOutStart}>
                    SIGN OUT
                </div>
            ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {!hidden && <CartDropdown />}

    </HeaderContainer>
);




const mapStateToProps = state => {
    return {
        currentUser: selectCurrentUser(state),
        hidden : selectCartHidden(state)
    }
};

const mapDispatchToProps = dispatch=>(
    {
        signOutStart: () => dispatch(signOutStart())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Header);