const Navitem = (props) => {
    const showButton = (e) => {
        if(e.target.dataset.value === "Explore")
        {
            props.changeExplore(true);
        }
    }
    return (

        <div onClick = {showButton} className = "nav-item" data-value = {props.title}>
            <svg className = "nav-icon">
                <use xlinkHref= {`./images/sprite.svg#${props.icon}`} />
            </svg>
            <h1 className = "nav-title">
                {props.title}
            </h1>
        </div>
    );
}

export default Navitem;