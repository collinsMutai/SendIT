import { Router } from "express";
import { receivedParcels, sentParcels } from "../Controller/ParcelsController";
import {
  getUsers,
  loginUser,
  registerUser,
  // checkUser,
} from "../Controller/UsersController";

import { VerifyToken } from "../Middleware/VerifyToken";

const routeru = Router();

routeru.post("/login", loginUser);
routeru.post("/signup", registerUser);
routeru.get("/users", getUsers);
routeru.get("/sent/:email", sentParcels);
routeru.get("/received/:email", receivedParcels);
routeru.get("/check", VerifyToken);



export default routeru;
