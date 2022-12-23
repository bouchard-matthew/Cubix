import { getFirestore, collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import app from "../../firebase/firebaseConfig";
import bcrypt from "bcrypt";
import LoginValidate from "../../ValidationSchemas/LoginValidate";
import jwt from "jsonwebtoken";

async function checkPassword(password: string, hash: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        reject();
      } else {
        resolve(result);
      }
    });
  });
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  LoginValidate.validate(req.body);

  const db = getFirestore(app);
  const usersCol = collection(db, "Users");
  const userSnapshot = await getDocs(usersCol);
  let match = userSnapshot.docs.map((doc) => doc.data()).find((user) => user.username === req.body.username);
  if (match === undefined) {
    return res.status(400).json({ message: "Username not found in database" });
  }

  try {
    const result = await checkPassword(req.body.password, match.password);
    const token = jwt.sign(
      {
        data: { username: match.username, phone: match.phone },
      },
      "secret",
      { expiresIn: "1d" }
    );
    await addDoc(collection(db, "Sessions"), { username: req.body.username, cookie: token });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong..." });
  }

  return res.status(200).json({ message: "Successfully logged in" });
};

export default login;
