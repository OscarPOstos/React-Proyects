import '../stylesheet/ProductInfo.css'
import icon from '../assets/images/icon-cart.svg'

function ProductInfo() {
    return (
        <div className="product-info">
            <p className='product-type'>Perfume</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className='description'>A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className='price'>
                <p className='real-price'>$149.99</p>
                <p className='original-price'>$169.99</p>
            </div>
            <button>
                <img src={icon}/>
                <p>Add to Cart</p>
            </button>
        </div>
    );
}

export default ProductInfo;