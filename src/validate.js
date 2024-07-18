import * as yup from 'yup';

const passwordvalid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

const basicSchema = yup.object().shape({
    firstname: yup.string().required("Enter your first name"),
    email: yup.string().matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, "Enter valid email").email("Enter your valid email")
        .required("Enter your email"),
    age: yup.number().positive().integer().min(1).max(99,"Enter your correct age").required("Enter your age"),
    phoneno: yup.string().matches(/^\d{10}$/, "Enter a valid 10 digit phone number").required("Enter your phone no"),
    password: yup.string().matches(passwordvalid, "Enter valid password").min(8, "Minimum 8 characters required for password")
        .required("Enter your password"),
    confirmpassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Re-enter your password"),
});


export default basicSchema;
