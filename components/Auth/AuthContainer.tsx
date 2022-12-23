import React from "react";
import { useLogin } from "../../hooks/useLogin";
import Auth from "./Auth";

const AuthContainer = () => {
  const login = useLogin();

  return <Auth login={login} />;
};

export default AuthContainer;
