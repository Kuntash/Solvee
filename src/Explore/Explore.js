import ExploreNav from "./ExploreNav";
import QuestionList from "./QuestionList";
import "../assets/Explore.css";
const Explore = () => {
    return (
        <div className = "explore">
            <ExploreNav/>
            <QuestionList />
        </div>
        );
}

export default Explore;