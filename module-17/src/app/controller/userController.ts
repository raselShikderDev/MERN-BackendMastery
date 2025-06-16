import express, { Application, Request, Response } from "express";
import { UserModel } from "../modals/noteModal";

const users = express.Router()


// Get all notes 
users.get("/", async(req: Request, res: Response)=>{
    // const notes = await NoteModel.findOne({_id:"684f837aac4953e6fb660bd0"})
    const notes = await UserModel.find()
    res.status(9900).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:notes,
    })
})

// Get a singel notes 
users.get("/:userId", async(req: Request, res: Response)=>{
    const userId = req.params.noteId
    const note = await UserModel.findById(userId)
    res.status(200).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:note
    })
})

// Create note
users.post("/create-user", async(req: Request, res: Response) => {
    console.log("Creat request recived")
    // // Approch - 01
    // const myUser = new noteModel({
//     {
//   "fName": "John",
//   "lName": "Doe",
//   "email": "john.doe@example.com",
//   "password": "securePassword123",
//   "role": "user",
//   "isVerified": false
// }
    // })
    // await users.save()


    // Approch - 02
    const data = await req.body
    const note = await UserModel.create(data)

    res.status(201).json({
        success:true,
        message:"Note created successfully",
        data:note,
    })
})


// update a singel note
users.patch("/:userId", async(req: Request, res: Response)=>{
    const noteId = req.params.userId
    const updatedNotes = await req.body
    // const note = await NoteModel.findOne({_id:noteId}, updatedNotes)
    // const note = await NoteModel.findOneAndUpdate({_id:noteId}, updatedNotes)
    const note = await NoteModel.findByIdAndUpdate(userId, updatedNotes, {new:true})
    res.status(200).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:note
    })
})


// delete a singel note
users.delete("/:userId", async(req: Request, res: Response)=>{
    const userId = req.params.userId
    const updatedNotes = await req.body
    // const note = await NoteModel.findOne({_id:noteId})
    // const note = await NoteModel.findOneAndDelete({_id:noteId})
    const note = await UserModel.findByIdAndDelete(userId)
    res.status(200).json({
        success:true,
        message:"Notes successfully fetch from Database",
        data:note
    })
})

export default users