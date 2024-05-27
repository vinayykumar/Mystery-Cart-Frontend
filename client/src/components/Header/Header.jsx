import { useEffect,useState,useContext } from "react";
import {useNavigate} from 'react-router-dom'
import Search from './Search/Search'
import Cart from '../Cart/Cart'
import {Context} from '../../utils/context'
import {TbSearch} from 'react-icons/tb'
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'
import { NavLink } from "react-router-dom";
import toast from 'react-hot-toast';

import "./Header.scss";
const Header = () => {
    const {isLoggedIn,setIsLoggedIn,cartItems,setCartCount} = useContext(Context);
    const [stick,setStick] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const navigate = useNavigate();

    useEffect(()=> {
        if(localStorage.getItem('token')){
          setIsLoggedIn(true);
        }
      },[]) 

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset){
            setStick(true)
        }
        else{
            setStick(false)
        }
    }
    // console.log(cartItems);
    let count = 0;
    cartItems.map((item)=> count+= item.attributes.quantity);
    setCartCount(count);

    useEffect( () => {
        window.addEventListener("scroll",handleScroll)
    },[])

    return <>
        <header className={`main-header ${stick ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li className='links' onClick={()=>navigate('/')}>HOME</li>
                <li className='links'>ABOUT</li>
                <li className='links'>CATEGORY</li>
            </ul>
            <div className="center" onClick={()=>navigate('/')}><p className="LOGO">Mystery Cart</p></div>
            <div className="right">
                    <TbSearch onClick={()=>setShowSearch(!showSearch)}></TbSearch>
                    {isLoggedIn ? 
                        <>
                        <AiOutlineHeart></AiOutlineHeart>
                        <span className="cart-icon" onClick={ () => setShowCart(!showCart)}>
                            <CgShoppingCart></CgShoppingCart>
                           {count>0 ? <span>{count}</span> : <></>} 
                        </span> 
                        <button className="sign-out" onClick={()=> {
                            localStorage.removeItem('token');
                            navigate('/')
                            setIsLoggedIn(false);
                            toast.error("Logged Out Successfully")
                            }}>Sign Out</button>
                        </> :
                        <div className="auth">
                            <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
                            <button className="signup-btn" onClick={()=>navigate("/signup")}>Sign Up</button>
                        </div>
                    }
                    
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
};

export default Header;
