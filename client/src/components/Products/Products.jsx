import "./Products.scss";
import Product from './Product/Product'

const  Products = ({innerPage,headingText,products}) => {
    // console.log("This is Products" , products);
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className={`products ${innerPage ? "innerPage" : ""}`}>
            {products && products.data.map( (item) => (
                <Product
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                />
            ) )}
        </div>
    </div>
};

export default Products;

