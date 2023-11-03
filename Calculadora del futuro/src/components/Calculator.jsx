import Input from "./input";
import Button from "./Button";
import '../stylesheet/Calculator.css';
import { useState } from "react";
import { evaluate } from 'mathjs';

export default function Calculator() {
    const [inputValue, setInputValue] = useState("");
    return (
    <div>
        <Input value={inputValue}/>
        <div className="button-row">
            <Button value={"C"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue("")}/>
            <Button value={"/"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue((["+", "-", ".", "/", "*"].includes((inputValue.charAt(inputValue.length - 1))) || inputValue.length == 0 ? inputValue : inputValue + "/"))}/>
            <Button value={"*"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue((["+", "-", ".", "/", "*"].includes((inputValue.charAt(inputValue.length - 1))) || inputValue.length == 0  ? inputValue : inputValue + "*"))}/>
            <Button value={"<"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue(inputValue.substring(0, inputValue.length - 1))}/>
        </div>
        <div className="button-row">
            <Button value={"7"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"8"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"9"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"-"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue((["+", "-", ".", "/", "*"].includes((inputValue.charAt(inputValue.length - 1))) || inputValue.length == 0  ? inputValue : inputValue + "-"))}/>
        </div>
        <div className="button-row">
            <Button value={"4"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"5"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"6"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"+"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue((["+", "-", ".", "/", "*"].includes((inputValue.charAt(inputValue.length - 1))) || inputValue.length == 0  ? inputValue : inputValue + "+"))}/>
        </div>
        <div className="button-row">
            <Button value={"1"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"2"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"3"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"()"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue((inputValue.length == 0 || ["+", "-", ".", "/", "*", ")"].includes((inputValue.charAt(inputValue.length - 1))) ? inputValue : "(" + inputValue + ")"))}/>
        </div>
        <div className="button-row">
            <Button value={"0"} clickType={"fill"} inputValue={inputValue} setInput={setInputValue} />
            <Button value={"."} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue((["+", "-", ".", "/", "*"].includes((inputValue.charAt(inputValue.length - 1))) || inputValue.length == 0  ? inputValue : inputValue + "."))}/>
            <Button value={"+/-"} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue(inputValue.length != 0 ? String(evaluate((inputValue) + " * -1")) : inputValue)}/>
            <Button value={"="} clickType={"function"} inputValue={inputValue} setInput={setInputValue} funtionality={() => setInputValue((inputValue.length != 0 ? String(evaluate(inputValue) == 53111 ? "Sein" : evaluate(inputValue)) : inputValue))}/>
        </div>
    </div>
    );
}