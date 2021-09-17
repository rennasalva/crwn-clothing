import React from "react";
import './checkout.component.styles.scss'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckout from "react-stripe-checkout";

const CheckoutPage = ({cartItems,total}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='haeder-block'>
                <span>Product</span>
            </div>
            <div className='haeder-block'>
                <span>Description</span>
            </div>
            <div className='haeder-block'>
                <span>Quantity</span>
            </div>
            <div className='haeder-block'>
                <span>Price</span>
            </div>
            <div className='haeder-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        <div className='total'>
            <span>TOTAL &euro; {total}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckout />
    </div>
);

/*
const mapStateToProps = ({cart:{cartItems}})=> {
    console.log('mapStateToProps on CheckoutPage')
    return {
        cartItems: cartItems,
        total: cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
            0)
    }
};
*/


const mapStateToProps = (state)=> {
    console.log('call mapStateToProps in CartDropdown');
    return {
        cartItems:selectCartItems(state),
        total:selectCartTotal(state)
    }
}

/*
const mapStateToProps = createStructuredSelector({
        cartItems:selectCartItems,
        total:selectCartTotal
    }
);
*/


export default connect(mapStateToProps,null)(CheckoutPage);