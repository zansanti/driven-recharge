import express from "express";
import carriersRouter from "./routers/carriersRouter";
import phonesRouter from './routers/phonesRouter';

const app = express();
app.use(express.json());
app.use(carriersRouter);
app.use(phonesRouter);

export default app;