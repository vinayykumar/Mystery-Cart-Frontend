import "./Home.scss";
import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import fetchData from '../../utils/api'
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const {categories,setCategories,products,setProducts} = useContext(Context);
    const navigate = useNavigate();
    useEffect(()=> {
        if(!localStorage.getItem('token')){
          navigate("/");
        }
      },[])
    useEffect(()=>{
        try{
            getCategories();
            getProducts();
        }
        catch(error){
            console.log(error);
        }
    },[])

    const getCategories = () => {
        fetchData("/api/categories?populate=*").then( res => {
            // console.log(res)
            setCategories(res);
        });
    }
    const getProducts = () => {
        fetchData("/api/products?populate=*").then( res => {
            // console.log(res)
            setProducts(res);
        });
    }

    return <div >
        <Banner></Banner>
        <div className="main-content">
            <div className="layout">
                <Category categories={categories}></Category>
                <Products headingText="Popular Products" products={products}></Products>
            </div>
        </div>  
    </div>;
};

export default Home;
