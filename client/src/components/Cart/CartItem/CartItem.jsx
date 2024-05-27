import "./CartItem.scss";
import {MdClose} from 'react-icons/md'
import prod from '../../../assets/products/earbuds-prod-4.webp';
import { Context } from "../../../utils/context";
import { useContext } from "react";
import toast from "react-hot-toast";

const   CartItem = () => {
    const {cartItems,handleCartProductQuantity,handleRemoveFromCart} = useContext(Context);
    return <div className="cart-products">
        {cartItems.map( (item) => (
                    <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={ process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="prod-details">
                        <div className="heading">
                                <span className="name">{item.attributes.title}</span>
                                <MdClose className="close-btn" onClick={()=>{
                                    handleRemoveFromCart(item);
                                    toast.error("Item Removed from Cart");
                                }}></MdClose>
                        </div>
                        <div className="quantity-buttons">
                                    <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                                    <span>{item.attributes.quantity}</span>
                                    <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}</span>
                            <span>x {console.log(item)}</span>
                            <span className="highlight"> ₹{item.attributes.price} </span>
                        </div>
                    </div>
                </div>
        ) )}

    </div>
};

export default CartItem;
