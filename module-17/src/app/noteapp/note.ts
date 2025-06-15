import express, { Application, Request, Response } from "express";
import data from '../db/data.json'
;

const myNote:Application = express()

myNote.get("/", (req:Request, res:Response)=>{
    res.json(data)
})

export default myNote