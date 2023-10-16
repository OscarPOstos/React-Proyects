import '../stylesheet/NFTContainer.css';
import avatar from '../assets/images/image-avatar.png';

function NFTContainer() {
    return (
        <div className="nft-container">
            <div className='nft-image'>
                <div className='hover-image'></div>
            </div>
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className='nft-data'>
                <p className='nft-price'>0.041 ETH</p>
                <p className='nft-date'>3 days left</p>
            </div>
            <div className='user-data'>
                <img src={avatar} />
                <p>Creation of <span className='username'>Jules Wyvern</span></p>
            </div>
        </div>
    );
}

export default NFTContainer;