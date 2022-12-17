import React from "react";
import Register from "./Register";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../firebase/firebaseConfig";
import { RegisterFields } from "./Register.types";
import { useUsers } from "../../hooks/useUsers";

const RegisterContainer = () => {
  const db = getFirestore(app);

  const register = async (values: RegisterFields, setStatus: (val?: string) => void) => {
    let users = useUsers();
    let match = (await users).find((user) => user.username === values.username);
    if (match !== undefined) {
      setStatus("User already registered with username");
      return false;
    }
    await addDoc(collection(db, "Users"), values);
    return true;
  };

  return <Register register={register} />;
};

export default RegisterContainer;
