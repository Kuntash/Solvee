import Navbar from "./Navbar/Navbar";
import Explore from "./Explore/Explore";
import Post from "./Post/Post";
import {Route, Routes} from "react-router-dom";


const App = () => {
  
  return (
    <div className ="app">
      <Navbar />
      <Routes>
        <Route exact path = "/Explore" element = {<Explore />} /> 
        <Route exact path = "/Post" element = {<Post />} />
      </Routes>
    </div>
  );
};
export default App;
