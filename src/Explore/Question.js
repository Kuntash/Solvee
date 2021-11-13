
const Question = (props) => {
    const {title, description, dislike, like, keywords } = props.question;
    return (
    <div className = "question">
        <div className = "question-title">
            {title}
        </div>
        <div className = "question-info">
            <p className ="question-dec">
                {description}
            </p>
            <div className = "question-keywords">
                {keywords.map((key, i) => 
                    {
                        return (
                            <div className = "question-keyword">
                                {key} 
                            </div>)
                    }
                )}
            </div>
            <button className = "button like">
                    <svg className = "icon like-icon">
                        <use xlinkHref = {`images/sprite.svg#Like`} />
                    </svg>
            </button>
            <button className = " button dislike">
                    <svg className = "icon dislike-icon">
                        <use xlinkHref = {`images/sprite.svg#Dislike`} />
                    </svg>
            </button>
        </div>
    </div>
    );
}

export default Question;