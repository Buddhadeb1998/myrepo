import { useFormik } from "formik";
import * as Yup from "yup";


const Homework = () => {
  const fromobj = useFormik({
    initialValues: {
      email: "",
      pass: "",
     },
      validationSchema: Yup.object({
      email: Yup.string()
        .required("required input")
        .matches(/[@\.]/, "@ and . must required"),

         pass:Yup.string()
         .required("required input")
         .min(4,"minmum 4 charc is required")
         .max(12,"minmum 4 charc is required")
         .matches(/[^\w]/, "required at least one special charac")
         .matches(/[A-Z]/, "required at least one Upparcase")
         .matches(/[a-z]/, "required at least one lowercase")

    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleSubmitHandler = (e) => {
    e.preventDefault();
    fromobj.handleSubmit();
    
  };
  return (
    <>
    <h1>A Typical Page</h1>
    <div className="f1">
      <form onSubmit={handleSubmitHandler}>
        <table>
          <tr>
            <td>email:-</td>
            <td>
              <input
                type="text"
                name="email"
                value={fromobj.values.email}
                onChange={fromobj.handleChange}
                placeholder="enter your name"
                id="input"
                
              />
              {fromobj.touched.email && fromobj.errors.email?(<span>{fromobj.errors.email}</span>):null }
            </td>
          </tr>
          <tr>
            <td>Pass:-</td>
            <td>
              <input
                type="text"
                name="pass"
                value={fromobj.values.pass}
                onChange={fromobj.handleChange}
                placeholder="enter your password"
                id="input"
                
              />
              {fromobj.touched.pass && fromobj.errors.pass?(<span>{fromobj.errors.pass}</span>):null }

            </td>
          </tr>
          <td  className="f6" colSpan={2}>
            <button  className="f8" type="submit">Login</button>
          </td>
        </table>
      </form>
      </div>
    </>
  );
};
export default Homework;
