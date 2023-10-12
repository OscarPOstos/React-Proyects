import data from "../data/data.json";
import SummarySection from "./SummarySection";
import "../stylesheet/SummaryContainer.css";

function SummaryContainer() {
    return (
        <div className="summary">
            <h1>Summary</h1>
            {data.map((categoryResult) => 
                <SummarySection 
                    category={categoryResult["category"]}
                    score={categoryResult["score"]}
                    icon={categoryResult["icon"]}
                    classDivName={categoryResult["className"]}
                />
            )}
            <button>Continue</button>
        </div>
    )
}

export default SummaryContainer;