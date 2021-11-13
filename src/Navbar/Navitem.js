const Navitem = (props) => {
    const showButton = (e) => {
        if(props.title === "Explore")
            props.changeExplore(true);
    }
    return (

        <div onClick = {showButton} className = "nav-item" >
            <svg onClick = {showButton} className = "icon nav-icon">
                <use xlinkHref= {`./images/sprite.svg#${props.icon}`} />
            </svg>
            <h1 onClick = {showButton} className = "nav-title">
                {props.title}
            </h1>
        </div>
    );
}

export default Navitem;