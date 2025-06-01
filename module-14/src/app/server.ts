
import app from "./app";
import { client } from "../config/mongodb";
const port = 3000 



let server;




const bootstrap = async ()=>{
  await client.connect();
  console.log("Connected to mongdb");

  const db =  await client.db("todosDB")
  const collection = db.collection("todos").insertOne({
    title:"MongoDB_1",
    body:"Body of mongodb_1 title"
  })
  console.log("Collection: ", collection);
  
  server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

bootstrap()