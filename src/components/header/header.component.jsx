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

import './header.styles.scss';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles';

/*
const Header = ({ currentUser,hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  
  </div>
);
*/

const Header = ({ currentUser,hidden }) => (
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
                <div className='option' onClick={() => auth.signOut()}>
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


/*
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => {
    return {
      currentUser: currentUser,
      hidden : hidden
    }
}
*/


const mapStateToProps = state => {
    return {
        currentUser: selectCurrentUser(state),
        hidden : selectCartHidden(state)
    }
};


/*
const mapStateToProps = createStructuredSelector (
    {
        currentUser: selectCurrentUser,
        hidden : selectCartHidden
    }
);
*/

export default connect(mapStateToProps)(Header);