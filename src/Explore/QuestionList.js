import {questions} from './Questions.json';
import Question from './Question';
const QuestionList = () => {
    return (
        <div className = "explore-questions">
            {questions.map((ques, index) => 
            <Question key = {index} 
            question = {ques}
            />)}
        </div>
        );
}

export default QuestionList;