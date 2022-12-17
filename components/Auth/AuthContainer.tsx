import React from "react";
import Auth from "./Auth";
import { LoginFields } from "./Auth.types";
import { useUsers } from "../../hooks/useUsers";

const AuthContainer = () => {
  let userList: any[];

  const login = async (val: LoginFields) => {
    let users = await useUsers();
    let match = users.find((item: any) => item.username == val.username && item.password == val.password);
    return match;
  };

  return <Auth login={login} />;
};

export default AuthContainer;
