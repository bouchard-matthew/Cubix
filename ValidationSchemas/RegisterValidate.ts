import * as yup from "yup";

const RegisterValidate = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  username: yup.string().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),
  phone: yup
    .string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Please enter a valid phone number")
    .required("Phone is required"),
});

export default RegisterValidate;
