// import { useState } from "react"

import { useFormik } from "formik";
import * as Yup from "yup";

// import { useFormik } from "formik";
//  import * as Yup from "yup"

//  import { useState } from "react"

// const Practic=()=>{
//     const [count,setCount]=useState('DARK')
//    const clickHandeler=()=>{
//         setCount('MONEY HEIST')
//     }
//   return(
//     <div>
//         <h2>{count}</h2>
//         <button type="button"onClick={clickHandeler}>Click</button>
//     </div>
//   )
// }
// export default Practic;

//  const Practic=()=>{
//    const [user, setUser]=useState('');
//    const [pass, setPass]=useState('');

//    const userHandler=(event)=>{
//     setUser(event.target.value)
//    };

//    const passHandler=(event)=>{
//     setPass(event.target.value)
//    };

//    const submitHandler =(event)=>{
//      event.preventDefault();
//        console.log(user,pass);
//       document.getElementById('r1').value=user;
//       document.getElementById('r2').value=pass;
//       // var a = document.getElementById('r1').value;
//       // var b = document.getElementById('r2').value;
//       // console.log(a, b);

//    };

// return(
//   <>
//    <h2> This is react input</h2>
//   <form onSubmit={submitHandler}>
//   <fieldset>
//   <legend> USER INPUT </legend>

//     User:-
//     <input type="text" placeholder="enter" onChange={userHandler}/>
//    < br/>
//    <br/>
//     Password:-
//     <input type="password" placeholder="enter" onChange={passHandler}/>
//     <button type="submit">Submit</button>

//   </fieldset>
//   <h1>React Output</h1>
//   User:-
//   <input type="text" placeholder="enter"   id="r1"/><br/><br/>
//   password:-
//   <input type="text" placeholder="enter"   id="r2"/>

//   </form>
//   </>

// )

// }
// export default Practit

//  const Practic=()=>{
//   const formobj=useFormik({
//     initialValues:{
//       user:"",
//       pass:"",
//     },
//     validationSchema:Yup.object({
//       user:Yup.string()
//       .required("required")
//       .max(6,"minimun 6 charc")

//     }),

//     onSubmit:(values)=>{
//       console.log(values);
//     }

//   })
//   const submitHandler=(e)=>{
//    e.preventDefault();
//    formobj.handleSubmit();
//   }
//   return(
//     <>
//     <h2>Validation</h2>
//     <form onSubmit={submitHandler}>
//      <table border={1} cellSpacing={2} cellPadding={3}>
//       <tr>
//       <td>
//       user:-
//       </td>
//       <td>
//       <input type="text" name="user" value={formobj.values.user} onChange={formobj.handleChange} placeholder="user"/>
//       </td>
//       </tr>
//       <tr>
//       <td>
//        {formobj.touched.user && formobj.errors.user?(<span> {formobj.errors.user}</span>):null}
//        pass:-
//       </td>
//       <td>
//       <input type="text"name="pass" value={formobj.values.pass} onChange={formobj.handleChange} placeholder="pass"/>
//       </td>
//       </tr>
//       <button typeof="submit">Submit</button>
//      </table>

//     </form>
//     </>
//   )
//  }
//  export default Practic;

const Practic = () => {
  const formobj = useFormik({
    initialValues: {
      user: "",
      pass: "",
    },
    validationSchema: Yup.object({
      user: Yup.string()
      .required("required input")
      .max(5,"max 5 charac")
    }),

    // onSubmit: (values) => {
    //   console.log(values);
    // },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    formobj.handleSubmit();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>user</td>
            <td>
              <input
                typeof="text"
                name="user"
                value={formobj.values.user}
                onChange={formobj.handleChange}
                placeholder="user"
              />
              {formobj.touched.user && formobj.errors.user ? (<span>{ formobj.errors.user }</span>) : null}

            </td>
          </tr>
          <tr>
            <td>pass</td>
            <td>
              <input
                typeof="text"
                name="pass"
                onChange={formobj.handleChange}
                placeholder="pass"
              />
            </td>
          </tr>
          <button>Submit</button>
        </table>
        
      </form>
    </>
  );
};
export default Practic;
