import express, { Application, Request, Response } from "express";
import { UserModel } from "../modals/userModal";
// import validator from 'validator';
import { z } from "zod";


const users = express.Router()

const createSchemaZod = z.object({
    fNmae:z.string(),
    lNmae:z.string(),
    role:z.string().optional(),
    password:z.string(),
    isVerified:z.boolean()
})

// Get all users 
users.get("/", async(req: Request, res: Response)=>{
    // const notes = await userModel.findOne({_id:"684f837aac4953e6fb660bd0"})
    const users = await UserModel.find({})
    res.status(201).json({
        success:true,
        message:"Users successfully fetch from Database",
        data:users,
    })
})

// Get a singel user 
users.get("/:userId", async(req: Request, res: Response)=>{
    console.log("got a request of singel user");
    
    const userId = req.params.userId
    const user = await UserModel.findById(userId)
    console.log("singel user: ", user);
    
    res.status(200).json({
        success:true,
        message:"User successfully fetch from Database",
        data:user
    })
})

// Create user
users.post("/create-user", async(req: Request, res: Response) => {
    console.log("Create user request recived")

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
    // // checking user data validation by zod
    //  const data = await req.body
    // let data;
    // try {
    //      data = createSchemaZod.parseAsync(req.body)
    //      console.log("Zod body: ", data)
    // } catch (error:any) {
    //     res.status(501).json({
    //     success:false,
    //     message:`${error.message}`,
    //     error,
    // })
    // }
    // const newUser = await UserModel.create(data)

    // // Built in custom Instance method
    // const data = await req.body
    // const newUser = new UserModel(data)
    // await newUser.hashPassword(newUser.password)
    // await newUser.save()


    // // Built in custom static method
    //  const data = await req.body
    //  const hashedPassword = await UserModel.hashPassword(data.password)
    //  console.log("Static", hashedPassword);
    //  data.password = hashedPassword
    //  const newUser = await UserModel.create(data)

    
    // Using pre save hook to convert into hash
    const data = await req.body
    const newUser = await UserModel.create(data)

    res.status(201).json({
        success:true,
        message:"User created successfully",
        data:newUser,
    })
})


// update a singel user
users.patch("/:userId", async(req: Request, res: Response)=>{
    const userId = await req.params.userId
    const updateUser = await req.body
    // const note = await NoteModel.findOne({_id:noteId}, updatedNotes)
    // const note = await NoteModel.findOneAndUpdate({_id:noteId}, updatedNotes)
    const updatedUserInfo = await UserModel.findByIdAndUpdate(userId, updateUser, {new:true})
    res.status(200).json({
        success:true,
        message:"User successfully fetch from Database",
        data:updatedUserInfo
    })
})


// delete a singel user
users.delete("/:userId", async(req: Request, res: Response)=>{
    const userId = req.params.userId
    // const note = await NoteModel.findOne({_id:userId})
    // const note = await NoteModel.findOneAndDelete({_id:userId})
    // const user = await UserModel.findByIdAndDelete(userId)

    // post query hook
    const user = await UserModel.findOneAndDelete({_id:userId})
    res.status(200).json({
        success:true,
        message:"User successfully deleted from Database",
        data:user
    })
})

export default users