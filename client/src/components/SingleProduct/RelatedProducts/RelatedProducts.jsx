import Products from '../../Products/Products'
import useFetch from '../../../hooks/useFetch';
import Product from '../../Products/Product/Product';

const RelatedProducts = ({productId, categoryId}) => {
    const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    // console.log("related data : ",data)
    return <div className="related-products">
        <Products headingText="Related Products" products={data}></Products>
        {/* {console.log("Relesdasdasda")} */}
    </div>
};

export default RelatedProducts;
