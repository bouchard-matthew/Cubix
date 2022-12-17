import * as yup from "yup";

const LoginValidate = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup.string().required("Password is required"),
});

export default LoginValidate;
