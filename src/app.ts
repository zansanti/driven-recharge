import express from "express";
import carriersRouter from "./routers/carriersRouter";
import phonesRouter from './routers/phonesRouter';
import rechargesRouter from './routers/rechargesRouter';
import summaryRouter from './routers/summaryRouter';

const app = express();
app.use(express.json());
app.use(carriersRouter);
app.use(phonesRouter);
app.use(rechargesRouter);
app.use(summaryRouter);

export default app;