

function ScoreButton({score, selected, click}) {
    return (
        <button className={`point ${selected}`.trim()} onClick={click}>{score}</button>
    );
}

export default ScoreButton;