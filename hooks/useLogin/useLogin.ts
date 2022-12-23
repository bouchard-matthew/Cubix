import React, { useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { LoginFields } from "../../shared/types/login";

const useLogin = () => {
  const router = useRouter();

  const login = useCallback(async (values: LoginFields, setStatus: (status: string) => void) => {
    try {
      await axios.post("/api/login", values);
      router.push("/");
    } catch (error: any) {
      setStatus(error.response.data.message);
    }
  }, []);
  return login;
};

export default useLogin;
