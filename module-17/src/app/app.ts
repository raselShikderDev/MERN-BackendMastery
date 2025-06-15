
import express, { Application, Request, Response } from "express";
import myNote from "./noteapp/note";
import mongoose, { Schema } from "mongoose";

const app: Application = express()

app.use(express.json())
app.use("/mynote", myNote)

const notesSchema = new Schema({
    title: String,
    body: String,
    isActive: Boolean,
    numberOfChar: Number,
    date: { type: Date, default: Date.now },
    comments: [
        { title: String, body: String }
    ]
})

const noteModel = mongoose.model("Note", notesSchema)

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Note App")
})


app.post("/create-note", (req: Request, res: Response) => {
    const myNote = new noteModel({
        title: "My Title",
        body: "Here is the body of my first body",
        isActive: true,
        numberOfChar: 679,
        date: Date.now,
        comments: [
            {
                title: "Comment title",
                body: "body of my first comment",
            }
        ]
    })

    res.status(201).json({
        success:true,
        message:"Note created successfully",
        data:myNote,
    })
})

export default app