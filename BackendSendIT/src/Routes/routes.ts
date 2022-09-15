import { Router } from "express";
import {
  getUsers,
  loginUser,
  registerUser,
  checkUser,
} from "../Controller/UsersController";
import {
  addParcel,
  deleteParcel,
  deliverParcel,
  getParcel,
  getParcels,
  updateParcel,
} from "../Controller/ParcelsController";
import { VerifyToken } from "../Middleware/VerifyToken";

const router = Router();

router.post("/login", loginUser);
router.post("/signup", registerUser);
router.get("/users", getUsers);
router.get("/check", VerifyToken, checkUser);
router.post("/add", addParcel);
router.get("/delete/:id", deleteParcel);
router.get("/all", getParcels);
router.get("/view/:id", getParcel);
router.put("/update/:id", updateParcel);
router.get("/delivered/:id", deliverParcel);

export default router;
