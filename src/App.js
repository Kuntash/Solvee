import Navbar from "./Navbar/Navbar";
import Explore from "./Explore/Explore";
import { useState } from "react";


const App = () => {

  const [explore, setExplore] = useState(false);
  return (
    <div>
      <Navbar changeExplore = {setExplore}/>
      {explore ? <Explore /> : null}
    </div>
  );
};
export default App;
