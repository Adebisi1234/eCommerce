import { type Request, type Response } from "express";

export const getOrders = async (req: Request, res: Response) => {
  console.log("getOrders");
};

export const orderProduct = async (req: Request, res: Response) => {
  console.log("orderProduct");
};

export const cancelOrder = async (req: Request, res: Response) => {
  console.log("cancelOrder");
};

export const getShippings = async (req: Request, res: Response) => {
  console.log("getShippings");
};

export const shipProduct = async (req: Request, res: Response) => {
  console.log("shipProduct");
};

export const purchaseProduct = async (req: Request, res: Response) => {
  console.log("purchaseProduct");
};
