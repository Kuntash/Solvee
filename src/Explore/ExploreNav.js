import {useState} from 'react';
const ExploreNav= (props) => {
    const placeholder = "Search new Questions";
    const [input, setInput] = useState("");
    const [status, setStatus] = useState("Solver");
    
    const toggleStatus = () => {
        status === "Solver" ? setStatus("Doubter") : setStatus("Solver");
    }
    return (
        <div className = "explore-nav">
            <div onClick = {toggleStatus} className = "current-status">
                {status}
            </div>
            <input 
            onChange = {(e) => setInput(e.target.value)}value = {input} 
            className = "input-search" 
            type = "text" 
            placeholder = {placeholder} />
            <svg className = "search-icon">
                <use xlinkHref = {`./images/sprite.svg#Search`} />
            </svg>
        </div>
    );
}

export default ExploreNav;