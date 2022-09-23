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

routerp.post("/add", VerifyToken,addParcel);
routerp.delete("/delete/:id",VerifyToken,deleteParcel);
routerp.get("/all",  VerifyToken, getParcels);
routerp.get("/view/:id", VerifyToken,getParcel);
routerp.put("/update/:id", VerifyToken,updateParcel);
routerp.get("/delivered/:id", VerifyToken,deliverParcel);
routerp.get("/ontransit", VerifyToken,getOnTransitParcels);
routerp.get("/delivered", VerifyToken,getDeliveredParcels);

export default routerp;
