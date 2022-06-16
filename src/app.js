import express from "express"
import morgan from "morgan"
import routas from "./routes/routes";

const app=express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/users", routas);

export default app;
