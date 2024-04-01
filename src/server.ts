import express from "express";
import router from "./routes";

const app = express()
app.use(express.json())

app.use("/", router)

app.listen(3333, ()=> console.log("Você conseguiu conectar na porta 3333 o/"))