import React, { createContext, useEffect, useReducer, useState } from "react";
import Layout from "./Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Data1 from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { incrementHandler, decrementHandler } from "../Action/index";
import { useNavigate } from "react-router-dom";



export const menuContext = createContext();
const Menu = () => {
  const myState = useSelector((state)=> state.quantityHandler);
  const dispatch = useDispatch();
  const navigate=useNavigate();
     useEffect(()=>{
     const getToken=localStorage.getItem("login")
     if(!getToken){
        navigate("/")

     }
    },[navigate]);
   var [value, setValue] = useState(Data1.map((item) => 0));
  // const decreamentHandler = (index) => {
  //   if (value[index] > 0) {
  //     value[index]--;
  //     setValue([...value]);
  //   } else {
  //     value[index] = 0;
  //     setValue([...value]);
  //   }
  // };

  // const increamentHandler = (index) => {
  //   value[index]++;
  //   setValue([...value]);
  // };

  // return (
    
  //   <menuContext.Provider value={{value}}>
  //   <div>
  //     <Layout>
  //       <Box
  //         sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
  //       >
  //         {Data1.map((menu, i) => (
  //           <div key={i}>
  //             <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
  //               <CardActionArea>
  //                 <CardMedia
  //                   sx={{ minHeight: "300px" }}
  //                   component={"img"}
  //                   src={menu.image}
  //                 />
  //                 <CardContent>
  //                   <Typography variant="h5" gutterBottom component={"div"}>
  //                     {menu.name}
  //                   </Typography>
  //                   <Typography variant="h5">
  //                     Price: {menu.price}
  //                     <RemoveIcon
  //                       id={menu.id}
  //                       sx={{ ml: 6 }}
  //                       onClick={() => decreamentHandler(i)}
  //                     />
  //                     <input className="Qty" readOnly value={value[i]} id={menu.id} />
  //                     <AddIcon
  //                       id={menu.id}
  //                       onClick={() => increamentHandler(i)}
  //                     />
  //                   </Typography>
  //                 </CardContent>
  //               </CardActionArea>
  //             </Card>
  //           </div>
  //         ))}
  //       </Box>
  //     </Layout>
  //   </div>
  //   </menuContext.Provider>
  // );




  return (
    
    <menuContext.Provider value={{value}}>
    <div>
      <Layout>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {Data1.map((menu, i) => (
            <div key={i}>
              <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                <CardActionArea>
                   <CardMedia
                    sx={{ minHeight: "300px" }}
                    component={"img"}
                    src={menu.image}
                  />
                   <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
                    <Typography variant="h5">
                      Price: {menu.price}
                      <RemoveIcon
                        id={menu.id}
                        sx={{ ml: 6 }}
                        onClick={() => dispatch(decrementHandler(i))}
                      />
                      <input className="Qty" readOnly value={myState[i]} id={menu.id} />
                      <AddIcon
                        id={menu.id}
                        onClick={() => dispatch(incrementHandler(i))}
                      />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Box>
      </Layout>
    </div>
    </menuContext.Provider>
  );




};

export default Menu;
