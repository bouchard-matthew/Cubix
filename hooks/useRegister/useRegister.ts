import React, { useCallback } from "react";
import axios from "axios";
import { RegisterFields } from "../../shared/types/register";
import { useRouter } from "next/router";

const useRegister = () => {
  const router = useRouter();

  const register = useCallback(async (values: RegisterFields, setStatus: (status: string) => void) => {
    try {
      await axios.post("/api/register", values);
      router.push("/");
    } catch (error: any) {
      setStatus(error.response.data.message);
    }
  }, []);
  return register;
};

export default useRegister;
