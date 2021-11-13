import {Link} from "react-router-dom";


const Navitem = (props) => {
    const showButton = (e) => {
        console.log(e.target.dataset);
        // window.location.href = `/${e.target.dataset.value}`
    }
    return (
        <Link to = {`/${props.title}`} className = "nav-item">
                <svg onClick = {showButton} className = "icon nav-icon">
                    <use xlinkHref= {`./images/sprite.svg#${props.icon}`} />
                </svg>
                <h1 onClick = {showButton} className = "nav-title">
                    {props.title}
                </h1>
        </Link>
    );
}

export default Navitem;