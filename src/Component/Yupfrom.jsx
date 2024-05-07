import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const YupFrom = () => {
  const formobj = useFormik({
    initialValues: {
      userId: "",
      pass: "",
    },
       validationSchema: Yup.object({
       userId: Yup.string()
        .required("required input")
        .min(8, "minmum 8 charac ")
        .max(12, "maximum 12 charac"), 

       
        pass: Yup.string().required ("required input"),
    }),

     onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleSubmitHandler = (e) => {
    e.preventDefault();
    formobj.handleSubmit();
  };

  return (
    <>
      <h1>This is Yup</h1>
      <form onSubmit={handleSubmitHandler}>
        <table border={1} cellPadding={3}>
          <tr>
            <td>User</td>
            <td>
              <input
                type="text"
                name="userId"
                onChange={formobj.handleChange}
                value={formobj.values.userId}
                placeholder="enter your name"
              />
               {formobj.touched.userId && formobj.errors.userId ? (
                <em>{formobj.errors.userId}</em>
              ) : null}
            </td>
          </tr>
          <tr>
            <td>Pass</td>
            <td>
              <input
                type="text"
                name="pass"
                onChange={formobj.handleChange}
                value={formobj.values.pass}
                placeholder="enter your name"
              />
              {formobj.touched.pass && formobj.errors.pass ? (
                <em>{formobj.errors.pass}</em>
              ) : null}
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Login</button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};
export default YupFrom;
