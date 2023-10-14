import "../stylesheet/RatingContainer.css";
import starIcon from '../assets/images/icon-star.svg';
import ScoreButton from "./ScoreButton";
import { useState } from "react";

function RatingContainer({clickfunction}) {
    const [score, setScore] = useState(0);
    const initialButtons = [
        (<ScoreButton key={1} score={1} selected={""} click={() => selectScore(0)}/>),
        (<ScoreButton key={2} score={2} selected={""} click={() => selectScore(1)}/>),
        (<ScoreButton key={3} score={3} selected={""} click={() => selectScore(2)}/>),
        (<ScoreButton key={4} score={4} selected={""} click={() => selectScore(3)}/>),
        (<ScoreButton key={5} score={5} selected={""} click={() => selectScore(4)}/>)
    ];
    const [buttons, setButtons] = useState(initialButtons);

    const selectScore = (feedback) => {
        let tempButtons = [...initialButtons];
        setScore(feedback);
        tempButtons[feedback] = (<ScoreButton key={feedback + 1} score={feedback + 1} selected={"selected"} click={() => selectScore(feedback)}/>);
        setButtons(tempButtons);
    };

    return (
        <div className="rating-container">
            <div className="star-icon">
                <img src={starIcon}/>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!</p>
            <div className="points-container">
                {buttons}
            </div>
            <button className="button-submit" onClick={() => clickfunction(score)}>Submit</button>
        </div>
    );
}

export default RatingContainer;