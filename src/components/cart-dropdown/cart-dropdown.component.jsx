import React from "react";
import CustomButton from './../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import './cart-dropdown.styles.scss';
import {selectCartItems} from './../../redux/cart/cart.selector'
import {toggleCartHidden} from './../../redux/cart/cart.actions';
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";


const CartDropdown = ({cartItems, history,dispatch,toggleCartHiddenOnCheckout})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />)
                )) :(
                    <span className='empty-message'>Your Cart is Empty</span>
                )
            }
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleCartHiddenOnCheckout();
            }}>GO TO CHECKOUT</CustomButton>

            {
               /* <CustomButton onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>
                */
            }
        </div>
    </div>
);

/*const mapStateToProps = ({cart:{cartItems}})=>(
    {
        cartItems
    }
)*/

/*const mapStateToProps = (state)=> {
    console.log('call mapStateToProps in CartDropdown');
    return {
        cartItems:selectCartItems(state)
    }
}
 */

const mapStateToProps = createStructuredSelector(
    {
        cartItems:selectCartItems
    }
);

const mapDispatchToProps = (dispatch)=>(
    {
        toggleCartHiddenOnCheckout : (cart) => dispatch(toggleCartHidden())
    }
)

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));