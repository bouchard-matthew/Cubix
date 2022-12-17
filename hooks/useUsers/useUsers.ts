import React from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "../../firebase/firebaseConfig";

const useUsers = async () => {
  const db = getFirestore(app);

  const usersCol = collection(db, "Users");
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());

  return userList;
};

export default useUsers;
