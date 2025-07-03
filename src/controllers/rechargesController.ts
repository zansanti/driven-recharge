import { Request, Response } from 'express';
import * as rechargeService from '../services/rechargeService';

export async function addRecharge(req: Request, res: Response) {
  const { phoneId, amount } = req.body;
  await rechargeService.createRecharge(phoneId, amount);
  res.sendStatus(201);
}