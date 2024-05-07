import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import Todolist from "./Todolist";


const Exam = () => {
    const [isAdmin,setisAdmin]=useState(false)
    const handleCheckboxChange=()=>{
        setisAdmin(!isAdmin)
    }
  return (
    <div>
      <label>
      <input type='checkbox'
     // name='admin'
    //   checked={isAdmin}
      onChange={handleCheckboxChange}/>
      Admin
      </label>
      {isAdmin?<DataComponent/>:<p>Data not found</p>}
      
    </div>
  )
}
 const DataComponent=()=>{
    const data1=[
        {id:1,name:'raj'},
        {id:2,name:'rahul'},
    ]
   return(
    <>
        <div>
        
        <ul>
        {data1.map(item=>(
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            </div>
   ))}
        </ul>
        </div>
        </>
   )
 }
 
  //  const Exam=()=>{
  //       const [seconds,setSeconds]=useState(0);
  //       useEffect(()=>{
  //           const interval=setInterval(()=>{
  //               setSeconds((prevSeconds)=>prevSeconds+1)
            
  //       },1000)
  //       return()=>clearInterval(interval);

  //   },[])
  //   const handleReset=()=>{
  //       setSeconds(0)
  //   }
  //   return(
  //       <div>
  //       <h1>Timer:{seconds}</h1>
  //       <button onClick={handleReset}>Reset</button>
  //       </div>
  //   )
    // const Exam=()=>{
    // const formobj = useFormik({
    //     initialValues: {
    //       userId: "",
    //       pass: "",
    //     },
    //        validationSchema: Yup.object({
    //        userId: Yup.string()
    //         .required("required input")
    //         .min(8, "minmum 8 charac ")
    //         .max(12, "maximum 12 charac"),
    
           
    //         pass: Yup.string()
    //         .required ("required input")
    //         .min(8, "minmum 8 charac ")
    //         .max(12, "maximum 12 charac")
    //      }),
    
    //      onSubmit: (values) => {
    //       console.log(values);
    //       alert('submited')
    //       }
    //     ,
    //   });
    //   const handleSubmitHandler = (e) => {
    //     e.preventDefault();
    //     formobj.handleSubmit();
    //   };
    
    //   return (
    //     <>
         
    //       <form onSubmit={handleSubmitHandler}>
    //         <table border={1} cellPadding={3}>
    //           <tr>
    //             <td>User</td>
    //             <td>
    //               <input
    //                 type="text"
    //                 name="userId"
    //                 onChange={formobj.handleChange}
    //                 value={formobj.values.userId}
    //                 placeholder="enter your name"
    //               />
    //                {formobj.touched.userId && formobj.errors.userId ? (
    //                 <em>{formobj.errors.userId}</em>
    //               ) : null}
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>Pass</td>
    //             <td>
    //               <input
    //                 type="text"
    //                 name="pass"
    //                 onChange={formobj.handleChange}
    //                 value={formobj.values.pass}
    //                 placeholder="enter your name"
    //               />
    //               {formobj.touched.pass && formobj.errors.pass ? (
    //                 <em>{formobj.errors.pass}</em>
    //               ) : null}
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <button type="submit">Login</button>
    //             </td>
    //           </tr>
    //         </table>
    //       </form>
    //     </>
    //   );
    // const [inputList, setInputList] = useState("");
    // const [Items, setItems] = useState([]);
    // const itemEvent = (event) => {
    //   setInputList(event.target.value);
    // };
    // const listofitems = () => {
    //   setItems((oldItems) => {
    //     return [...oldItems, inputList];
    //   });
    //   setInputList("");
    // };
    // const deleteItem = (id) => {
    //   setItems((oldItems) => {
    //     return oldItems.filter((arrEle, index) => {
    //       return  id!==index;
                
    //     });
    //   });
    // };
  
    // return (
    //   <>
    //     <div >
    //       <div >
    //         <h1>ToDo List</h1>
    //         <br />
    //         <input
    //           type="text"
    //           placeholder="Add to Items"
    //           value={inputList}
    //           onChange={itemEvent}
    //         />
    //         <button onClick={listofitems}>+</button>
    //         <ol>
    //           {Items.map((itemval, index) => {
    //             return (
    //               <Todolist
    //                 id={index}
    //                 text={itemval}
    //                 onSelect={deleteItem}
    //               />
    //             );
    //           })}
    //         </ol>
    //       </div>
    //     </div>
    //   </>
    //   )

    // };

 


export default Exam
