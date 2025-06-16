import mongoose, { Schema } from "mongoose";
import { INotes } from "../interfaces/notesInterface";

const notesSchema = new Schema<INotes>({
    title: {type:String, require:true, trim:true},
    body: {type:String, default:""},
    isActive: Boolean,
    numberOfChar: Number,
    category:{
        type:String,
        enum:["personal", "world", "tech", "unknown"],
        default:"unknown"
    },
    comments: [
        { title: String, body: String}
    ],
    labels:{
        type:String,
        color:["lightBlue", "green", "red", "yellow", "beige"],
        default:"red"
    },
    // date: { type: Date, default: Date.now },
},
{
    timestamps:true,
    versionKey:false
})



export const NoteModel = mongoose.model("Note", notesSchema)
