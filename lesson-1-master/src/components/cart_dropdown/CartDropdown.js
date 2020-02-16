import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart_selectors'
import { toggleCartHidden } from '../../redux/cart/cart_actions';
import CartItem from '../cart_item/CartItem'
import CustomButton from '../custom_button/CustomButton'
import './cart_dropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    ) : (<span className='empty-message'>Your cart is empty</span>)}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
