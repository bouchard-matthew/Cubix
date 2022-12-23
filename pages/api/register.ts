import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from "../../firebase/firebaseConfig";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import RegisterValidate from "../../ValidationSchemas/RegisterValidate";

const saltRounds = 10;

async function genPassword(password: string) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        reject();
      } else {
        resolve(hash);
      }
    });
  });
}

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  RegisterValidate.validate(req.body);

  const db = getFirestore(app);
  const usersCol = collection(db, "Users");
  const userSnapshot = await getDocs(usersCol);
  let match = userSnapshot.docs.map((doc) => doc.data()).find((user) => user.username === req.body.username);
  if (match !== undefined) {
    return res.status(400).json({ message: "Username already exists in database" });
  }

  try {
    const hash = await genPassword(req.body.password);
    await addDoc(collection(db, "Users"), { ...req.body, password: hash });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong..." });
  }

  return res.status(200).json({ message: "Successfully registered user" });
};

export default register;
