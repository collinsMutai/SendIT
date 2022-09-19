import { Router } from "express";
import {
  addParcel,
  deleteParcel,
  deliverParcel,
  getDeliveredParcels,
  getOnTransitParcels,
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
routerp.get("/ontransit", getOnTransitParcels);
routerp.get("/delivered", getDeliveredParcels);

export default routerp;
