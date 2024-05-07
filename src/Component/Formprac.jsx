import { useFormik } from "formik";
import React from "react";

//const Formprac = () => {
//   const fromobj = useFormik({
//     initialValues: {
//       user: "",
//       pass: "",
//     },
//     onSubmit:(values)=>{
//         console.log(values);
//     },

//   });

//   const handelSubmit=(e)=>{
//    e.preventDefault()
//    fromobj.handleSubmit()

//   };

//   return (
//     <>
//     <form onSubmit={handelSubmit}>
//       <table border={1} cellSpacing={0} cellPadding={2}>
//         <tr>
//           <td>User:-</td>
//           <td>
//             <input
//               type="text"
//               placeholder="enter your name"
//               name="user"
//               value={fromobj.values.user}
//               onChange={fromobj.handleChange}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td>pass:-</td>
//           <td>
//             <input
//               type="text"
//               placeholder="enter your name"
//               name="pass"
//               value={fromobj.values.pass}
//               onChange={fromobj.handleChange}
//             />
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={2}>
//             <button type="submit">Submit</button>
//           </td>
//         </tr>
//       </table>
//     </form>
//     </>
//   );
// }
const Formprac = () => {
  const formobj = useFormik({
    initialValues: {
      user: "",
      pass: "",
    },
    onSubmit: (value) => {
      document.getElementById("name").value = value.user;
      document.getElementById("pass").value = value.pass;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formobj.handleSubmit();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <table border={1} cellPadding={1} cellSpacing={1}>
          <tr>
            <td>User:</td>
            <td>
              <input
                type="text"
                placeholder="user"
                onChange={formobj.handleChange}
                name="user"
               // value={formobj.values.user}
              />
            </td>
          </tr>
          <tr>
            <td>Pass:</td>
            <td>
              <input
                type="text"
                placeholder="pass"
                onChange={formobj.handleChange}
                name="pass"
                value={formobj.values.pass}
              />
            </td>
          </tr>
          <button type="submit">Submit</button>
        </table>
      </form>
      <h2>React output</h2>
      Name:
      <input type="text" id="name" />
      pass:
      <input type="text" id="pass" />
    </>
  );
};
export default Formprac;
