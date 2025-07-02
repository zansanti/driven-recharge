import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'joi';

export function validateSchema(schema: AnySchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      res.status(422).send({
        errors: error.details.map(d => d.message)
      });
      return; // ← Faltava este return para interromper o fluxo!
    }
    
    next(); // ← Só chama next() se não houver erro
  };
}