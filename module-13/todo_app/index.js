const http = require("http");
const path = require("path");
const fs = require("fs");

// const data = {
//   "name": "Alice",
//   "age": 30,
//   "email": "alice@example.com",
//   "isStudent": false,
//   "hobbies": ["reading", "cycling", "photography"],
//   "address": {
//     "street": "123 Main St",
//     "city": "Springfield",
//     "zip": "12345"
//   }
// }

const jsonData = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Finish homework",
    completed: true,
  },
  {
    id: 3,
    title: "Call mom",
    completed: false,
  },
];


const server = http.createServer((req, res) => {
  const urlpath = new URL(req.url, `http://${req.headers.host}`)
  console.log(urlpath);
  
  const url = urlpath.pathname
  console.log(req.url, req.method);
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Todos");
  }
  // GET Method
  else if (req.url === "/todos" && req.method === "GET") {
    const filepath = path.join(__dirname, "data.json")
    const getData = fs.readFileSync(filepath, { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(getData);
  }
  // POST method
  else if (req.url === "/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const todo = JSON.parse(data);
        console.log("Recived data :", todo);
        const filepath = path.join(__dirname, "newData.json")
        // Reading existing file
        let todos = []
        if(fs.existsSync(filepath)){
          const fileContent = fs.readFileSync(filepath, {encoding: "utf-8"})
          todos = JSON.parse(fileContent)
        }
        // Create new todo
        todo.createdAt = new Date().toLocaleString()
        todos.push(todo)

        // update todo list
        fs.writeFileSync(filepath, JSON.stringify(todos, null, 2))

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "todo created", todo }));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid json" }));
      }
    });
  }
  // Getting singel todo
   else if (urlpath.pathname === "/todo" && req.method === "GET") {
    const filepath = path.join(__dirname, "newData.json")
    // getting user id from search params
    if(!urlpath.searchParams.has("id")){
      res.writeHead(400, { "Content-Type": "text/plain" });
    return res.end("parameter has not found");
    }
    const userId = parseInt(urlpath.searchParams.get("id"))
    if(isNaN(userId)){
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Route not found");
    }
    console.log("userId: ", userId)
    // Reading existing file and peersing
    const data = fs.readFileSync(filepath, {encoding: "utf-8"})
    const parseData = JSON.parse(data)

    // finding todo by id
    const userTodo = parseData.find((todo)=> todo.id === userId)
    if(!userTodo){
        res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Todo not found");
    }
    const stringToDo = JSON.stringify(userTodo)

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(stringToDo);
  }

   // PATCH method
  else if (urlpath.pathname === "/delete-todo" && req.method === "PATCH") {
   // Getting userId
    if (!urlpath.searchParams.has("id")) {
    res.writeHead(401, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Invalid paremeter" }));  
    }
    const userId = parseInt(urlpath.searchParams.get("id"))
    if (isNaN(userId)) {
      res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "User id not found" }));
    }
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const {title} = JSON.parse(data);
        console.log("Recived title's data :", title);
        const filepath = path.join(__dirname, "newData.json")
        // Reading existing file
        
        
          const fileContent = fs.readFileSync(filepath, {encoding: "utf-8"})
          const parseTodos = JSON.parse(fileContent)
        
        // Create new todo
        parseTodos.createdAt = new Date().toLocaleString()
       const myTodoIndex = parseTodos.findIndex((todo)=> todo.id === userId)
       if (myTodoIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "todo not found" }));
       }
        console.log(myTodoIndex);

        parseTodos[myTodoIndex].title = title
        console.log("title updated: ", parseTodos[myTodoIndex]);
        
        // update todo list
        fs.writeFileSync(filepath, JSON.stringify(parseTodos, null, 2))

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "todo updated", parseTodos }));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid json" }));
      }
    });
  }

  // Delete Method
  else if (urlpath.pathname === "/delete-todo" && req.method === "DELETE") {
   // Getting userId
    if (!urlpath.searchParams.has("id")) {
    res.writeHead(401, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Invalid paremeter" }));  
    }
    const userId = parseInt(urlpath.searchParams.get("id"))
    if (isNaN(userId)) {
      res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "User id not found" }));
    }
      console.log(userId);
      try {
        const filepath = path.join(__dirname, "newData.json")
        // Reading existing file
          const fileContent = fs.readFileSync(filepath, {encoding: "utf-8"})
          const parseTodos = JSON.parse(fileContent)
        
        // find  todo
       const myTodoIndex = parseTodos.filter((todo)=> todo.id === userId)
       if (myTodoIndex === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "todo not found" }));
       }

        const updatedTodos = parseTodos.filter((todo)=> todo.id === userId)
        
        // update todo list
        fs.writeFileSync(filepath, JSON.stringify(updatedTodos, null, 2))

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "todo deleted" }));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid json" }));
      }
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server running at: ", "http://127.0.0.1:5000");
});
