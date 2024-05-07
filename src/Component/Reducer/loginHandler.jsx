import Data1 from "../Project/Data";
import Data from "../Project/Data";

 //const initialState = 5;
 var value = Data1.map((item) => 0);
 var orderedItem = [];
 const loginHandler = (state = value , action) => {
    switch(action.type){
        case "login" : {
            localStorage.setItem("login", "Buddhadeb");
            return([...value]);
        }
        
        default: return ([...value]);
    }
  };

  export default loginHandler;