import { Request, RequestHandler, Response } from "express";
import mssql from "mssql";
import { v4 as uid } from "uuid";
import { sqlConfig } from "../Config/Config";
import Connection from "../DatabaseHelpers/db";
const db = new Connection();
import { LoginSchema, UserSchema } from "../Helper/UserValidator";
import { Data, User } from "../Interfaces/interfaces";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


interface Extended extends Request {
  info?: Data;
}

interface ExtendedRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}
export const registerUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = uid();
    const { name, email, password } = req.body;
    const { error, value } = UserSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    db.exec("insertCustomer", { id, name, email, password: hashedpassword });
    res.json({ message: "Customer Registered Successfully" });
  } catch (error) {
    res.json({ error });
  }
};
export const getUsers: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("getUsers");
    res.status(200).json(recordset);
  } catch (error) {
    res.status(400).json({ message: "User Not Fetched!" });
  }
};
export const getNewUsers: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("welcomeEmail");
    res.status(200).json(recordset);
  } catch (error) {
    res.status(400).json({ message: "Users Not Fetched!" });
  }
};

export const getTransitUsers: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("transitEmail");
    res.status(200).json(recordset);
  } catch (error) {
    res.status(400).json({ message: "Users Not Fetched!" });
  }
};
export const getDeliveredUsers: RequestHandler = async (req, res) => {
  try {
    const { recordset } = await db.exec("deliveredEmail");
    res.status(200).json(recordset);
  } catch (error) {
    res.status(400).json({ message: "Users Not Fetched!" });
  }
};

export const getResetNewUsers: RequestHandler<{ id: string }> = async (
  req,
  res
) => {
  const id = req.params.id;
  try {
    const { recordset } = await db.exec("resetwelcomeEmail", { id });
    res.status(200).json("Welcome Email Sent To New User");
  } catch (error) {
    res.status(400).json({ message: "User Not Fetched!" });
  }
};
export const getResetTransitUsers: RequestHandler<{ id: string }> = async (
  req,
  res
) => {
  const id = req.params.id;
  try {
    const { recordset } = await db.exec("resettransitEmail", { id });
    res.status(200).json("Transit Email Sent To New User");
  } catch (error) {
    res.status(400).json({ message: "User Not Fetched!" });
  }
};
export const getResetDeliveredUsers: RequestHandler<{ id: string }> = async (
  req,
  res
) => {
  const id = req.params.id;
  try {
    const { recordset } = await db.exec("resetdeliveredEmail", { id });
    res.status(200).json("Delivered Email Sent To New User");
  } catch (error) {
    res.status(400).json({ message: "User Not Fetched!" });
  }
};
export const loginUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const pool = await mssql.connect(sqlConfig);
    const { error, value } = LoginSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }
    const user: User[] = await (await db.exec("getUser", { email })).recordset;
    if (!user) {
      return res.json({ message: "User Not Found" });
    }
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.json({ message: "Invalid password" });
    }
    const payload = user.map((item) => {
      const { password, ...rest } = item;
      return rest;
    });
    const token = jwt.sign(payload[0], process.env.KEY as string, {
      expiresIn: "3600s",
    });
    res.json({
      message: "Logged in",
      token,
      email: user[0].email,
      name: user[0].name,
      role: user[0].role,
    });
  } catch (error) {
    res.json({ error });
  }
};
