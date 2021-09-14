import React from "react";
import './cart-icon.styles.scss'
import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from'./../../redux/cart/cart.actions';

const CartIcon = ()=>(
    <div className='cart-icon'>
        <ShopIcon className ='shopping-icon' />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = (dispatch) => dispatch(toggleCartHidden());

export default connect(null,mapDispatchToProps)(CartIcon);