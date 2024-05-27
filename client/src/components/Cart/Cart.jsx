import "./Cart.scss";
import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs';
import CartItem from "./CartItem/CartItem";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";

const Cart = ({setShowCart}) => {
    const [slideOut,setSlideOut] = useState(false);
    const {cartItems,cartSubTotal,cartCount} = useContext(Context);

    return <div className="cart-panel">
        <div className="opac-layer" onClick={(prev)=>setShowCart(!prev)}></div>
        <div className={`cart-content ${slideOut ? 'slide-out' : ''}`}>
            <div className="cart-header">
                <span className="heading">Cart ({cartCount})</span>
                <span className="close-btn">
                     <MdClose onClick={()=>{
                            setSlideOut(!slideOut)
                            setShowCart((prev)=>!prev);
                }
                }></MdClose>
                </span>
            </div>

            { !cartItems.length ? <div className="empty-cart">
                <BsCartX></BsCartX>
                <span>Your Cart is Feeling Lonely!</span>
                <button className="return-cta">Show Now</button>
            </div> 
            
                :
                <>
                    <CartItem></CartItem>
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text"> Subtotal : </span>
                            <span className="text total"> ₹{cartSubTotal}</span>
                        </div>
                        <div className="btn">
                            <button className="checkout-cta">Checkout</button>
                        </div>
                    </div>
                </>}
            <>
            </>
        </div>
    </div>
};

export default Cart;
