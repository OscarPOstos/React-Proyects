import image from '../assets/images/illustration-hero.svg';
import icon from '../assets/images/icon-music.svg';
import "../stylesheet/OrderSummaryContainer.css";

function OrderSummaryContainer() {
    return (
        <div className="order-summary-container">
            <img src={image} className='intro-image'/>
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className='subscription'>
                <img src={icon} className='icon-music'/>
                <p><span>Annual Plan</span>$59.99/year</p>
                <a>change</a>
            </div>
            <button>Proceed to Payment</button>
            <a className='cancel'>Cancel Order</a>
        </div>
    );
}

export default OrderSummaryContainer;