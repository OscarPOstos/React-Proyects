import { useState } from 'react';
import '../stylesheet/Input.css';
import activateEffect from '../utils/effect_utils';

export default function Input({value}) {
    const [isAnimated, setAnimated] = useState("");
    return(
        <div className='input-container'>
            <input type="text" value={value}  className={isAnimated} onClick={() => activateEffect(setAnimated)}/>
        </div>
    )
}