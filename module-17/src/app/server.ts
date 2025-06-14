import app from "./app";
import mongoose from "mongoose";

const PORT = 3000;

async function main() {
  // Connecting with mongodb
  try {
    await mongoose.connect(
      "mongodb+srv://mongodb:mongodb@cluster0.em4cgxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB has successfully connected");
  } catch (error) {
    console.log(error);
  }
  // Connecting with server
  try {
    app.listen(PORT, () => {
      console.log(`App is listening on http://localhost:${PORT}`);
      console.log("Server has successfully connected");
    });
  } catch (error) {
    console.error(error);
  }
}

main();
