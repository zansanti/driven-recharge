import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  err: { type: string; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  switch (err.type) {
    case 'CONFLICT':
      return res.status(409).send(err.message);
    case 'NOT_FOUND':
      return res.status(404).send(err.message);
    case 'UNPROCESSABLE_ENTITY':
      return res.status(422).send(err.message);
    default:
      return res.status(500).send('Internal Server Error');
  }
}