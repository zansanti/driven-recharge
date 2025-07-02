import { Request, Response } from 'express';
import * as phoneService from '../services/phoneService';

export async function addPhone(req: Request, res: Response) {
  const phone = req.body;
  await phoneService.createPhone(phone);
  res.sendStatus(201);
}