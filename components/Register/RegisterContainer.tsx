import React from "react";
import Register from "./Register";
import { useRegister } from "../../hooks/useRegister";

const RegisterContainer = () => {
  const register = useRegister();

  return <Register register={register} />;
};

export default RegisterContainer;
