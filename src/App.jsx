import { useFormik } from "formik";
import "./App.css";
import basicSchema from "./validate";

const onSubmit = async (action, values) => {
  alert("The login page is successfully completed");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  action.resetForm();
};

function App() {
  const {
    values,
    handleBlur,
    handleChange,
    isSubmitting,
    touched,
    errors,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      age: null,
      phoneno: null,
      password: "",
      confirmpassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <label>
          First Name :<br />
          <input
            type="text"
            id="firstname"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstname}
            placeholder="Enter your first name"
            className={
              errors.firstname && touched.firstname ? "input-error" : ""
            }
          />
        </label>
        <br />
        {errors.firstname && touched.firstname ? (
          <p className="error">{errors.firstname}</p>
        ) : (
          ""
        )}
        <label>
          Email :<br />
          <input
            type="email"
            id="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            className={errors.email && touched.email ? "input-error" : ""}
            placeholder="Enter your email"
          />
        </label>
        <br />
        {errors.email && touched.email ? (
          <p className="error">{errors.email}</p>
        ) : (
          ""
        )}
        <label>
          Age :<br />
          <input
            type="number"
            id="age"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.age}
            placeholder="Enter your age"
            className={errors.age && touched.age ? "input-error" : ""}
          />
        </label>
        <br />
        {errors.age && touched.age ? <p className="error">{errors.age}</p> : ""}
        <label>
          Phone no :<br />
          <input
            type="number"
            id="phoneno"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneno}
            placeholder="Enter your phone no"
            className={errors.phoneno && touched.phoneno ? "input-error" : ""}
          />
        </label>
        <br />
        {errors.phoneno && touched.phoneno ? (
          <p className="error">{errors.phoneno}</p>
        ) : (
          ""
        )}
        <label>
          Password :<br />
          <input
            type="password"
            id="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            placeholder="Enter your password"
            className={errors.password && touched.password ? "input-error" : ""}
          />
        </label>
        <br />
        {errors.password && touched.password ? (
          <p className="error">{errors.password}</p>
        ) : (
          ""
        )}
        <label>
          Confirm Password :<br />
          <input
            type="password"
            id="confirmpassword"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.confirmpassword}
            placeholder="Re-enter your password"
            className={
              errors.confirmpassword && touched.confirmpassword
                ? "input-error"
                : ""
            }
          />
        </label>
        <br />
        {errors.confirmpassword && touched.confirmpassword ? (
          <p className="error">{errors.confirmpassword}</p>
        ) : (
          ""
        )}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
