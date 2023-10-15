import qrCode from '../assets/images/image-qr-code.png';
import '../stylesheet/QRCodeContainer.css';

function QRCodeContainer() {
    return (
        <div className='qrcode-container'>
            <img src={qrCode} className='qrcode-image'/>
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skill to the next level</p>
        </div>
    )
}

export default QRCodeContainer;