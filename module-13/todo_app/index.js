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
  else if (req.url === "/create-todos" && req.method === "POST") {
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
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(5000, "0.0.0.0", () => {
  console.log("Server running at: ", "http://0.0.0.0:5000");
});
