const Navitem = (props) => {
    return (

        <div className = "nav-item">
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