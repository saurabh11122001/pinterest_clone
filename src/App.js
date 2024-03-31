
import {gsap,Power3} from "gsap";
import Navbar from "./Components/Hero/Navbar";
import Mainhero from "./Components/Hero/Mainhero";
import AllStates from "./Context/AllStates";


function App() {
 let tl=new gsap.timeline()
 let ease=Power3.easeOut()
 

  return (
    <>
    <AllStates>
    <div >
    <Navbar/>
    <Mainhero timeline={tl} ease={ease}/>
    </div>
    </AllStates>
    </>
  );
}

export default App;
