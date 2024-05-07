//  import { useState } from "react";

import { useState } from "react";
import data from "./Data";
import { useFormik } from "formik";
import * as Yup from "yup";

// const Project = () => {
//   const [login, setlogin] = useState("");
//   const [logout, setlogout] = useState("");

//   const loginhandler = () => {
//     setlogin("User in login");
//     setlogout(" ");
//   };

//   const logouthandler = () => {
//     setlogout("User in logout");
//     setlogin(" ");
//   };

//   return (
//     <>
//       <button type="button" onClick={loginhandler}>
//         Login
//       </button>

//       <button type="button" onClick={logouthandler}>
//         Logout
//       </button>
//       <h1> {login}</h1>
//       <h1> {logout}</h1>
//     </>
//   );
// };
// export default Project;

//  const Project = () => {
//   const [friend, setfriend] = useState(data);

//   const removeHandler =()=>{
//     setfriend([])
//     }

//   const onHandeler=(id)=>{
//     let newset=friend.filter((str)=>
//        str.id!==id
//     )
//     setfriend(newset)

//    }

//   return (
//     <>
//       <h1>Friends</h1>
//       <div>
//         {friend.map((str) => {
//           return (
//             <div>
//               <h2>{str.id}</h2>
//               <span> {str.name}</span>
//               <button type="button" onClick={()=>onHandeler(str.id)}>Removed</button>
//             </div>
//           );

//         })}

//             <button type="button" onClick={removeHandler}> Close all</button>
//       </div>
//     </>
//   );
// };

const Project = () => {
  const fromobj = useFormik({
    initialValues: {
      user: "",
      pass: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("required").min(5, "atleast 5 charac"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fromobj.handleSubmit();
  };

  return (
    <>
       <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>user</td>
            <td>
              <input type="text" onChange={fromobj.handleChange} name="user" />
            </td>
          </tr>
          {fromobj.touched.user && fromobj.errors.user ? (
            <span>{fromobj.errors.user}</span>
          ) : null}
          <tr>
            <td>pass</td>
            <td>
              <input type="text" onChange={fromobj.handleChange} name="pass" />
            </td>
          </tr>
          <td>
            <button type="submit">Submit</button>
          </td>
        </table>
      </form>
    </>
  );
};
export default Project;
