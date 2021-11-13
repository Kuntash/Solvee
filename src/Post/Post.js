const Post = () => {
    return (
        <div className = "post">
            <div className = "post-title">
                <label for ="title-input" className ="title-label">Title: </label>
                <input id ="title-input" className = "title-input" placeholder = "Type something.... " />
            </div>
            <div className = "post-description">
                <label for ="desc-input" className = "desc-label">Description: </label>
                <input id ="desc-input" className = "desc-input title-input" placeholder = "description....." />
            </div>
            <button className = "post-button">Post Question</button>
        </div>
    );
}

export default Post;