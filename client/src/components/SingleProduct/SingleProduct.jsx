import "./SingleProduct.scss";
import RelatedProducts from './RelatedProducts/RelatedProducts'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterest,FaCartPlus} from 'react-icons/fa'
import prod from '../../assets/products/headphone-prod-2.webp'
import useFetch from '../../hooks/useFetch' 
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import toast from "react-hot-toast";

const SingleProduct = () => {
    const {handleAddToCart,isLoggedIn} = useContext(Context);
    const [quantity,setQuantity] = useState(1);
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    // console.log(data)
    if(!data) return;
    const product = data?.data[0].attributes;
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="" />
                </div>
                <div className="right">
                    <span className="name">{product?.title}</span>
                    <span className="price">${product?.price}</span>
                    <span className="desc">
                        {product?.desc}
                    </span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={
                                ()=> quantity>1 ? setQuantity((prev)=>prev-1) : console.log("no")
                            }>-</span>
                            <span>{quantity}</span>
                            <span onClick={()=>setQuantity((prev)=>prev+1) }>+</span>
                        </div>
                        <button className="add-to-cart-button" onClick={()=>{
                            if(isLoggedIn){
                                handleAddToCart(data.data[0],quantity);
                                toast.success("Item Added to Cart Successfully");
                            }
                            else{
                                toast.error("User is Not Logged In");
                            }
                        }}>
                            <FaCartPlus size={20}></FaCartPlus>
                            Add To Card
                        </button>
                    </div>

                    <span className="divider"/>

                    <div className="info-item">
                        <span className="text-bold">
                            Category :
                            <span>{product?.categories?.data[0].attributes.title}</span>
                        </span>
                        <span className="text-bold">
                            Share :
                            <span className="social-icons">
                                <FaFacebookF size={20}></FaFacebookF>
                                <FaTwitter size={20}></FaTwitter>
                                <FaInstagram size={20}></FaInstagram>
                                <FaLinkedinIn size={20}></FaLinkedinIn>
                                <FaPinterest size={20}></FaPinterest>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts productId={id} categoryId={product?.categories?.data[0].id}></RelatedProducts>
        </div>
    </div>
};

export default SingleProduct;
