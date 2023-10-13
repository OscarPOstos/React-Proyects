import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import "../stylesheet/ProductContainer.css";

function ProductContainer() {
    return (
        <div className="product-container">
            <ProductImage />
            <ProductInfo />
        </div>
    );
}

export default ProductContainer;