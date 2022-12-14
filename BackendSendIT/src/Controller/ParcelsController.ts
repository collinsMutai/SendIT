import { Request, RequestHandler, Response } from "express";
import { v4 as uid } from "uuid";
import Connection from "../DatabaseHelpers/db";
const db = new Connection();
import { Data } from "../Interfaces/interfaces";
import { ParcelSchema, SenderSchema } from "../Helper/UserValidator";
interface Extended extends Request {
  info?: Data;
}

interface ExtendedRequest extends Request {
  body: {
    id?: string;
    senderName: string;
    receiverName: string;
    senderEmail: string;
    receiverEmail: string;
    origin: string;
    destination: string;
    dispatchedDate: string;
    deliveryDate: string;
    weight: string;
    price: string;
    receiverLat: number;
    receiverLng: number;
    senderLat: number;
    senderLng: number;
  };
}

export const addParcel = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = uid();
    const {
      senderEmail,
      senderName,
      receiverName,
      receiverEmail,
      origin,
      destination,
      dispatchedDate,
      deliveryDate,
      weight,
      price,
      receiverLat,
      receiverLng,
      senderLat,
      senderLng,
    } = req.body;
    const { error, value } = ParcelSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }

    db.exec("ProjectCreateOrUpdate", {
      id,
      senderEmail,
      senderName,
      receiverName,
      receiverEmail,
      origin,
      destination,
      dispatchedDate,
      deliveryDate,
      weight,
      price,
      receiverLat,
      receiverLng,
      senderLat,
      senderLng,
    });
    res.status(200).json({ message: "Parcel created Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Parcels Not Created!" });
  }
};
export const getParcels: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("getParcels");
    res.status(200).json(recordset);
  } catch (error) {
    res.status(404).json({ error });
  }
};
export const getParcel: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const id = req.params.id;
    const { recordset } = await db.exec("getParcel", { id });
    if (!recordset[0]) {
      res.json({ message: "Parcel Not Found" });
    } else {
      res.status(200).json(recordset);
    }
  } catch (error) {
    res.status(400).json({ message: "Parcel Not Found!" });
  }
};
export const deleteParcel: RequestHandler<{ id: string }> = async (
  req,
  res
) => {
  try {
    const id = req.params.id;
    const { recordset } = await db.exec("getParcel", { id });
    if (!recordset[0]) {
      res.status(404).json({ message: "Parcel Not Found" });
    } else {
      await db.exec("softDeleteParcel", { id });
      res.status(200).json({ message: "Parcel Deleted" });
    }
  } catch (error) {
    res.status(400).json({ message: "Parcel Not Deleted!" });
  }
};
export const updateParcel: RequestHandler<{ id: string }> = async (
  req,
  res
) => {
  try {
    const id = req.params.id;
    const {
      senderEmail,
      senderName,
      receiverName,
      receiverEmail,
      origin,
      destination,
      dispatchedDate,
      deliveryDate,
      weight,
      price,
      receiverLat,
      receiverLng,
      senderLat,
      senderLng,
    } = req.body as {
      senderName: string;
      receiverName: string;
      senderEmail: string;
      receiverEmail: string;
      origin: string;
      destination: string;
      dispatchedDate: string;
      deliveryDate: string;
      weight: string;
      price: string;
      receiverLat: string;
      receiverLng: string;
      senderLat: string;
      senderLng: string;
    };
    const { error, value } = ParcelSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }
    const { recordset } = await db.exec("getParcel", { id });
    if (!recordset[0]) {
      res.status(404).json({ message: "Parcel Not Found" });
    } else {
      await db.exec("ProjectCreateOrUpdate", {
        id,
        senderEmail,
        senderName,
        receiverName,
        receiverEmail,
        origin,
        destination,
        dispatchedDate,
        deliveryDate,
        weight,
        price,
        receiverLat,
        receiverLng,
        senderLat,
        senderLng,
      });
      res.status(200).json({ message: "Parcel Updated ..." });
    }
  } catch (error: any) {
    res.status(400).json({ message: "Parcel Not Updated!" });
  }
};
export const deliverParcel: RequestHandler<{ id: string }> = async (
  req,
  res
) => {
  try {
    const id = req.params.id;
    const { recordset } = await db.exec("getParcel", { id });
    if (!recordset[0]) {
      res.status(404).json({ message: "Parcel Not Found!" });
    } else {
      await db.exec("parcelDelivered", { id });
      res.status(200).json({ message: "Parcel Delivered!" });
    }
  } catch (error) {
    res.status(400).json({ message: "Parcel Not Delivered!" });
  }
};
export const sentParcels: RequestHandler<{ email: string }> = async (
  req,
  res
) => {
  try {
    const email = req.params.email;

    const { recordset } = await db.exec("getSent", { email });
    res.status(200).json(recordset);
  } catch (error) {
    res.status(400).json({ message: "Parcels Not Found!" });
  }
};
export const receivedParcels: RequestHandler<{ email: string }> = async (
  req,
  res
) => {
  try {
    const email = req.params.email;

    const { recordset } = await db.exec("getReceived", { email });
    res.status(200).json(recordset);
  } catch (error) {
    res.status(400).json({ message: "Parcels Not Found!" });
  }
};
export const getOnTransitParcels: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("onTransit");
    res.status(200).json(recordset);
  } catch (error) {
    res.status(404).json({ message: "Parcels Not Found!" });
  }
};
export const getDeliveredParcels: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("delivered");
    res.status(200).json(recordset);
  } catch (error) {
    res.status(404).json({ message: "Parcels Not Found!" });
  }
};
