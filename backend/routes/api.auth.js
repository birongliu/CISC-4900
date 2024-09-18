import { Router } from "express";
import jwt from "jsonwebtoken"
const router = Router();
// should remove this hardcoded user object and use a database or some other form of storage
const user = {
  userID: "21211"
}

router.post("/login", async (req, res) => {
  const { body } = req;
  const { userID } = body;

  //checking to make sure the user entered the correct username
  if (userID === user.userID) {
    //if user log in success, generate a JWT token for the user with a secret key
    jwt.sign(
      { user },
      process.env.JWT_KEY,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err);
        }
        res.send(token);
      }
    );
  } else {
    console.log("ERROR: Could not log in");
    res.send("Username or password incorrect");
  }
});
