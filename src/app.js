import express from "express"
import morgan from "morgan"
import routas from "./routes/UserRoutes";

const app=express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/users", routas);


export default app;
