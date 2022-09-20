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
routerp.delete("/delete/:id",deleteParcel);
routerp.get("/all",  getParcels);
routerp.get("/view/:id", VerifyToken,getParcel);
routerp.put("/update/:id", VerifyToken,updateParcel);
routerp.get("/delivered/:id", deliverParcel);
routerp.get("/ontransit", VerifyToken,getOnTransitParcels);
routerp.get("/delivered", getDeliveredParcels);

export default routerp;
