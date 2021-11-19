import Navbar from "./Navbar/Navbar";
import Explore from "./Explore/Explore";
import Post from "./Post/Post";
import Form from "./Form/Form";
import {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import "./assets/main.css";


function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if(isLoggedIn)
    {
      enableScroll();
    }
    else
    {
      disableScroll();
    }
  }, [isLoggedIn])
  return (
    <div className ="app">
        {isLoggedIn ? null : <Form />}
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Explore />} /> 
        <Route exact path = "/Post" element = {<Post />} />
      </Routes>

    </div>
  );
};
export default App;
