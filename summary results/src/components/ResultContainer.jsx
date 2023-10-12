import '../stylesheet/ResultContainer.css';

function ResultContainer() {
    return (
        <div className="main-result">
            <h1>Your Result</h1>
            <div className="circle">
                <p><span id="score">76</span> of 100</p>
            </div>
            <h2>Great</h2>
            <p>You scored higher than 65% of the people who have taken these tests</p>
        </div>
    );
}

export default ResultContainer;