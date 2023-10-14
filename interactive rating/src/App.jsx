import './App.css';
import RatingContainer from "./components/RatingContainer";
import FeedbackSendedContainer from './components/FeedbackSendedContainer';
import { useState } from "react";

function App() {
  const [mainContainer, setMainContainer] = useState((<RatingContainer clickfunction={(score) => {
    setMainContainer(<FeedbackSendedContainer score={score+1}/>)
  }}/>));

  return (
    <main>
      {mainContainer}
    </main>
  )
}

export default App
