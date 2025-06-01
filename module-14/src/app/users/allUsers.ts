import express, { Application, Request, Response } from 'express'

 const allUsers = express.Router()

allUsers.get('/', (req: Request, res: Response) => {
  console.log("from query: ", req.query);
  console.log("from params: ", req.params);
  
  res.send('Hello userssssss!!!!!')
})


allUsers.post('/create-user', (req:Request, res:Response) => {
  const {title} = req.body
  res.send(title)
  console.log(title);
})


allUsers.delete('/delete-user', (req:Request, res:Response) => {
  res.send('Hello World this is Delete uaser!')
})


export default allUsers