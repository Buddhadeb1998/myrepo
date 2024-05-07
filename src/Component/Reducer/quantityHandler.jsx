import Data1 from "../Project/Data";
import Data from "../Project/Data";

//const initialState = 5;
var value = Data1.map((item) => 0);
var orderedItem = [];
const quantityHandler = (state = value , action) => {
  switch(action.type){
      case "INCREMENT" : {
          value[action.index]++;
          //Data[action.index].quantity = value[action.index];
          //orderedItem.push(Data[action.index]);
          return([...value]);
      }
      case "DECREMENT" : {
          if (value[action.index] > 0) {
              value[action.index]--;
              // Data[action.index].quantity = value[action.index];
              // orderedItem.push(Data[action.index]);
              return([...value]);
            } else {
              value[action.index] = 0;
              // Data[action.index].quantity = value[action.index];
              // orderedItem.push(Data[action.index]);
              return([...value]);
            }
      }
      default: return ([...value]);
  }
};

export default quantityHandler;