import express, { Application, NextFunction, request, Request, Response } from "express";

import path from "path";
import fs from "fs";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

const alltodos = express.Router();

alltodos.get("/test", (req: Request, res: Response, next: NextFunction) => {
  console.log("I am form test middleware")
  next()
}, (req: Request, res: Response) => {
  res.send("Hello i am actual response");
});

alltodos.get("/", (req: Request, res: Response) => {
  res.send("Hello todossss!!!!!");
});


alltodos.get("/all-todo", (req: Request, res: Response) => {
  const filepath = path.join(__dirname, "../db/data.json");
  const getData = fs.readFileSync(filepath, { encoding: "utf-8" });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(getData);
});

alltodos.delete("/delete/:id", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const id = req.params.id;
 
  const mytodo = await collection.deleteOne({ _id: new ObjectId(id) });

  console.log(mytodo);
  res.send(mytodo);
});

// Update a todo using id
alltodos.put("/update/:id", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const { title, body } = req.body;
  const id = req.params.id;

  const updateTodo = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, body } },
    { upsert: true }
  );
  console.log(updateTodo);
  res.send(updateTodo);
});

// getting One todo using id
alltodos.get("/get-one-todo/:id", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  const id = req.params.id;

  const mytodo = await collection.findOne({ _id: new ObjectId(id) });

  console.log(mytodo);
  res.send(mytodo);
});

// getting All todo
alltodos.get("/get-all-todo", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");

  // await collection.insertOne({
  //   "title":"mongodb",
  //   "body":"This is the body of mongodb "
  // })
  const mytodo = await collection.find({}).toArray();
  console.log(mytodo);
  res.send(mytodo);
});

// Creating a singel todo /todos/create-todo
alltodos.post("/create-todo", async (req: Request, res: Response) => {
  // console.log(req.body);
  // const {title, body, priority,isCompleted } = req.body

  try {
    const db = await client.db("todosDB");
    const collection = await db.collection("todos");
    // const newtodo = {
    //   title,
    //   body,
    //   priority,
    //   isCompleted
    // }
    //  await collection.insertOne(newtodo)
    await collection.insertOne({
      title: "mongodb",
      body: "This is the body of mongodb ",
      priority: "High",
      isCompleted: false,
    });

    const getTodo = collection.find({});
    const arryTodo = await getTodo.toArray();

    res.json({
      message: "Successfully created todo",
      todo: arryTodo,
    });
  } catch (error) {
    console.error("Error inserting todo:", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
});






export default alltodos;
