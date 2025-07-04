import { Request, Response } from "express";
import * as carrierRepository from "../repositories/carrierRepository";

export async function getCarriers(req: Request, res: Response) {
  try {
   // const carriers = await carrierRepository.getCarriers(); 
   const carriers = [ "Camilo 1, 2, 3" ]
    res.status(200).json(carriers);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

