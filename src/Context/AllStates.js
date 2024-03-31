import context from "./StateContext";
import { useState } from "react";

const AllStates = (props) => {
    const [signUp,setSignUp]=useState(false);
    const [explore,setExplore]=useState(false);
    return (
        <context.Provider value={{signUp,setSignUp,explore,setExplore}}>
          {props.children}
        </context.Provider>
      )
    
}


export default AllStates;