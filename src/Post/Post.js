import {useState} from 'react';
import "../assets/Post.css";
const submitQuestion = () => {

}
const Post = () => {
    const [tInput, settInput] = useState("");
    const [dInput, setdInput] = useState("");
    return (
        <div className = "post">
            <div className = "post-title">
                <label for ="title-input" className ="title-label">Title: </label>
                <input id ="title-input"
                onChange = {(e) => settInput(e.target.value)} 
                value = {tInput} 
                className = "title-input" 
                placeholder = "Type something.... " />
            </div>
            <div className = "post-description">
                <label for ="desc-input" className = "desc-label">Description: </label>
                <input id ="desc-input"  
                onChange = {(e) => setdInput(e.target.value)}
                value = {dInput} 
                className = "desc-input title-input" 
                placeholder = "description....." />
            </div>
            <button onClick = {submitQuestion}className = "post-button">Post Question</button>
        </div>
    );
}

export default Post;