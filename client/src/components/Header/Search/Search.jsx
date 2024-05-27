import { useState } from "react";
import "./Search.scss";
import { MdClose } from 'react-icons/md'
import prod from '../../../assets/products/earbuds-prod-3.webp'
import { useNavigate } from "react-router-dom";
import useFetch from '../../../hooks/useFetch'
// import { all } from "axios";

const Search = ({ setShowSearch }) => {
    const [slideDown, setSlideDown] = useState(false);
    const [query,setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setQuery(event.target.value)
    }
    
    const {data} = useFetch(`/api/products?populate=*`);
    const Search_data = data?.data?.filter( item => item.attributes.title.toLowerCase().includes(query) 
                                                  || item.attributes.categories.data[0].attributes.title.toLowerCase().includes(query));

    return (
        <div className={`search-mode ${slideDown ? 'slide-down' : ''}`}>
            <div className="search-field">
                <input type="text" 
                        autoFocus 
                        placeholder="Search Product" 
                        value={query}
                        onChange={handleSearch} />
                <MdClose className="close-btn" onClick={()=>{
                    setSlideDown(!slideDown);
                    setTimeout(() => {
                        setShowSearch((prev)=>!prev);
                    }, 1000);
                }} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {Search_data?.map( item => (
                        <div 
                            key={item.id} 
                            className="search-result-item"
                            onClick={()=>{
                                navigate("/product/" + item.id);
                                setShowSearch(prev=>!prev);
                            }}>
                        <div className="img-container">
                            <img src={ process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <div className="heading">
                                <span className="name">{item?.attributes?.title}</span>
                                <span className="desc">{item?.attributes?.desc.substr(0,200)}...</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
