import "../stylesheet/SummarySection.css";

function SummarySection({category, score, icon, classDivName}) {
    return (
        <div className={`summary-section ${classDivName}`}>
            <div className="category">
                <img src={icon} />
                <p>{category}</p>
            </div>
            <p className="score"><span>{score}</span> / 100</p>
        </div>
    )
}

export default SummarySection;