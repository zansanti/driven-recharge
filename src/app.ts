import express from "express";
import carriersRouter from "./routers/carriersRouter";
import phonesRouter from './routers/phonesRouter';
import rechargesRouter from './routers/rechargesRouter';

const app = express();
app.use(express.json());
app.use(carriersRouter);
app.use(phonesRouter);
app.use(rechargesRouter);

export default app;