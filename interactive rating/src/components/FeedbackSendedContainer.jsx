import "../stylesheet/FeedbackSendedContainer.css";
import icon from '../assets/images/illustration-thank-you.svg';

function FeedbackSendedContainer({score}) {
    return (
        <div className="result-container">
            <img src={icon}/>
            <div className="score-selected">You selected {score} of 5</div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support. don't hesitate to get in touch.</p>
        </div>
    );
}

export default FeedbackSendedContainer;