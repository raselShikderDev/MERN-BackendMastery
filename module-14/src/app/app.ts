import express, { Application, Request, Response, NextFunction } from 'express'
import alltodos from "./todos/allTodoRoutes"
import allUsers from "./users/allUsers"
import { error } from 'console'
const app: Application = express()

app.use(express.json())



app.use("/todos", alltodos)
app.use("/users", allUsers)


app.get('/', (req:Request, res:Response) => {
  console.log("from home route ");
  res.json({
    "message":"From alltodos home page"
  })
})


app.get("/error", (req: Request, res: Response, next: NextFunction) => {
try {
    console.log(somthing)
} catch (error) {
  next(error)
}
}, (req: Request, res: Response) => {
  res.send("Hello i am actual response");
});

app.use((err: any, req: Request, res: Response, next: NextFunction)=>{
  if(err){
    console.error("Error inserting todo:", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
})




export default app