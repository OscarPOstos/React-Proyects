import '../stylesheet/EmojiSearch.css';
import emojiData from '../emojis/emojis.json';
import { useRef, useState } from 'react';

export default function EmojiSearch() {
    let emojisKeys = Object.keys(emojiData);
    const inputRef = useRef("");
    const [emojisSearched, setEmojiSearched] = useState([]);

    const searchEmoji = () => {
        let lis = emojisKeys.map((emoji) => {
            if(inputRef.current.value != "" && emojiData[emoji]["name"].includes(inputRef.current.value)) {
                return (<li key={emojisKeys.indexOf(emoji)}>{String.fromCodePoint(parseInt (emojiData[emoji]["unicode"], 16))} {emojiData[emoji]["name"]}</li>)
            }
        })
        setEmojiSearched(lis);
    }

    return (
        <div className="Emoji-Search">
            <h1>Emoji Search</h1>
            <div>
                <input type="text" ref={inputRef}/>
                <button onClick={searchEmoji}>Search</button>
            </div>
            <ul>
                {
                    emojisSearched.map((li) => li)
                }
            </ul>
        </div>
    )
}