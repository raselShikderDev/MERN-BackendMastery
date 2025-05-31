import express, { Application, Request, Response } from 'express'
import fs from "fs"
import path from "path"
const app: Application = express()

app.use(express.json())

const alltodos = express.Router()
app.use("/todos", alltodos)


alltodos.get('/', (req:Request, res:Response) => {
  console.log("from alltodos route ");
  res.json({
    "message":"From alltodos route"
  })
})

app.get('/', (req:Request, res:Response) => {
   const filepath = path.join(__dirname, "db/data.json")
    const getData = fs.readFileSync(filepath, { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(getData);
})

app.get('/todos', (req:Request, res:Response) => {
  console.log("from query: ", req.query);
  console.log("from params: ", req.params);
  
  res.send('Hello todossss!!!!!')
})

app.post('/todos/create-todo', (req:Request, res:Response) => {
  const {title} = req.body
  res.send(title)
  console.log(title);
  
})

app.post('/todos/create-todo', (req:Request, res:Response) => {
  res.send('Hello World!')
})



export default app