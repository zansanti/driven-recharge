import { Request, Response } from 'express';
import * as summaryService from '../services/summaryService';

export async function getSummary(req: Request, res: Response) {
  const { document } = req.params;
  const summary = await summaryService.getSummary(document);
  res.status(200).json({
    document,
    phones: summary
  });
}