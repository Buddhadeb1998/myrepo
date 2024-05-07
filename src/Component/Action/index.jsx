 export const decrementHandler = (index) => {
    return {
        type:"DECREMENT",
        index: index
    }
  };

 export const incrementHandler = (index) => {
    return {
        type:"INCREMENT",
        index: index
    }
  };