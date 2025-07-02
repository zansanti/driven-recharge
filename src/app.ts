import express from "express";
import carriersRouter from "./routers/carriersRouter";

const app = express();
app.use(express.json());
app.use(carriersRouter); // Adicione esta linha!

export default app;