
import express, { Application, Request, Response } from "express";
import myNote from "./controller/noteController";

const app: Application = express()

app.use(express.json())
app.use("/notes", myNote)



app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Note App")
})




export default app