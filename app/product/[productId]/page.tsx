import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";

interface IParams {
    productId?: string
}

const Product = ({params} : {params:IParams}) => {
    console.log('params',params)
    
    return ( 
        <div className="p-8">
            <Container>
                <ProductDetails product = {product}/>
            </Container>
        </div>
     );
}
 
export default Product;