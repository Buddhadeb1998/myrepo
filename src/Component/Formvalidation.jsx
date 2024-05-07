import { useFormik } from "formik";
import React from "react";

 const validate = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = "Required";
  } else if (values.user.length < 8) {
    errors.user = "enter 8 digit";
  } else if (values.user.length > 12) {
    errors.user = "Maximun limit reached";
  }
  return errors;
 }

const Formvalidation = () => {
  const formikobj = useFormik({
    initialValues: {
      user: "",
      pass: "",
      Gender:"",
      course:"",
    },
    validate,
    onSubmit: (value) => {
      console.log(value);
     document.getElementById("r1").value = value.user;
     document.getElementById("r2").value = value.pass;
     },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    formikobj.handleSubmit();
  };
  return (
    <>
      <h1>This is fromobj</h1>
      <form onSubmit={handleSubmit}>
        <table border={1} cellPadding={3}>
          <tr>
            <td>User</td>
            <td>
              <input
                type="text"
                name="user"
                  onChange={formikobj.handleChange}
                 value={formikobj.values.user}
                placeholder="enter your name"
              />
              {formikobj.errors.user}
            </td>
          </tr>
          <tr>
            <td>Pass</td>
            <td>
              <input
                type="text"
                name="pass"
                //onChange={formikobj.handleChange}
                // value={formikobj.values.pass}
                placeholder="enter your name"
              />
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input
                type="radio"
                name="Gender"
                 value = "Male"
                onChange={formikobj.handleChange}
                //value={formikobj.values.Gender}
              />
              Male
               <input
                type="radio"
                name="Gender"
                value = "Female"
                onChange={formikobj.handleChange}
                //value={formikobj.values.Gender}
              />
              Female
            </td>
          </tr>       
          <tr>
            <td>- course:</td>
            <td>
            <select  onChange={formikobj.handleChange} name="course">
                select of your course
                <option>React</option>
                 <option>Js</option>
                <option>Native</option>
                <option>Java</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Upload Resume:-</td>
            <td>
              <input type="file" />
            </td>
          </tr>
          <tr>
            <td>Upload Image:-</td>
            <td>
              <input type="file" />
            </td>
          </tr>
          <button type="submit">Submit</button>
        </table>
        <h1>React output</h1>

      </form>
    </>
  );
};
export default Formvalidation;
