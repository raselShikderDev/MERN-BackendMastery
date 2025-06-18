import express, { Application, Request, Response } from "express";
import { NoteModel } from "../modals/noteModal";

const myNote = express.Router()


// Get all notes 
myNote.get("/", async(req: Request, res: Response)=>{
    // const notes = await NoteModel.findOne({_id:"684f837aac4953e6fb660bd0"})
    const notes = await NoteModel.find().populate("userId")
    res.status(200).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:notes,
    })
})

// Get a singel notes 
myNote.get("/:noteId", async(req: Request, res: Response)=>{
    const noteId = req.params.noteId
    const note = await NoteModel.findById(noteId).populate("userId")
    res.status(200).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:note
    })
})

// Create note
myNote.post("/create-note", async(req: Request, res: Response) => {
    
    // // Approch - 01
    // const myNote = new noteModel({
    //     title: "My Title ",
    //     body: "Here is the body of my first body",
    //     isActive: false,
    //     numberOfChar: 65,
    //     comments: [
    //         {
    //             title: "Comment title",
    //             body: "body of my first comment",
    //         }
    //     ]
    // })
    // await myNote.save()


    // Approch - 02
    const data = await req.body
    const note = await NoteModel.create(data)

    res.status(201).json({
        success:true,
        message:"Note created successfully",
        data:note,
    })
})


// update a singel note
myNote.patch("/:noteId", async(req: Request, res: Response)=>{
    const noteId = req.params.noteId
    const updatedNotes = await req.body
    // const note = await NoteModel.findOne({_id:noteId}, updatedNotes)
    // const note = await NoteModel.findOneAndUpdate({_id:noteId}, updatedNotes)
    const note = await NoteModel.findByIdAndUpdate(noteId, updatedNotes, {new:true})
    res.status(200).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:note
    })
})


// delete a singel note
myNote.delete("/:noteId", async(req: Request, res: Response)=>{
    const noteId = req.params.noteId
    const updatedNotes = await req.body
    // const note = await NoteModel.findOne({_id:noteId})
    // const note = await NoteModel.findOneAndDelete({_id:noteId})
    const note = await NoteModel.findByIdAndDelete(noteId)
    res.status(200).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:note
    })
})

export default myNote