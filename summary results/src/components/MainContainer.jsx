import ResultContainer from "./ResultContainer";
import SummaryContainer from "./SummaryContainer";
import '../stylesheet/MainContainer.css';

function MainContainer() {
    return (
        <div className="main-container">
            <ResultContainer />
            <SummaryContainer />
        </div>
    );
}

export default MainContainer;