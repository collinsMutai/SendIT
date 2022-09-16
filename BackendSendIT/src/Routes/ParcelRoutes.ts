import { Router } from "express";

import {
  addParcel,
  deleteParcel,
  deliverParcel,
  getParcel,
  getParcels,
  
  updateParcel,
} from "../Controller/ParcelsController";
import { VerifyToken } from "../Middleware/VerifyToken";

const routerp = Router();



routerp.post("/add", addParcel);
routerp.get("/delete/:id", deleteParcel);
routerp.get("/all", getParcels);
routerp.get("/view/:id", getParcel);
routerp.put("/update/:id", updateParcel);
routerp.get("/delivered/:id", deliverParcel);

export default routerp;
