import { useState } from "react";
import "../stylesheet/Button.css";
import activateEffect from "../utils/effect_utils";

export default function Button({value, clickType, inputValue, setInput, funtionality}) {
    const [isAnimated, setAnimated] = useState("");
    return (
        <div className="button-container">
            <button onClick={() => {
                activateEffect(setAnimated)
                if (clickType == "fill") {
                    setInput((inputValue.charAt(inputValue.length - 1) == ")" ? inputValue + "*" + value : inputValue + value));
                } else {
                    funtionality();
                }
            }} className={isAnimated} style={{fontSize: value == "X" ? "20px" : "30px"}
                }>{value}</button>
        </div>
    )
}