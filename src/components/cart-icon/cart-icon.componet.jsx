import React from "react";
import './cart-icon.styles.scss'
import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from'./../../redux/cart/cart.actions';
import {selectCartItemsCount} from './../../redux/cart/cart.selector'
import {selectCurrentUser} from './../../redux/user/user.selector'

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopIcon className ='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div>
);

/*
const mapStateToProps = ({cart:{cartItems}})=>{
    console.log('call mapStateToProps in CartIcon');
    return  {
        itemCount : cartItems.reduce((accumulatedQunatity,cartItem) => accumulatedQunatity + cartItem.quantity,0)
    }
}*/

const mapStateToProps = (state)=> {
    console.log('call mapStateToProps in CartIcon');
    return {
        itemCount: selectCartItemsCount(state)
    }
};

const mapDispatchToProps = (dispatch) =>(
    {toggleCartHidden:()=> dispatch(toggleCartHidden())}
    );

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);