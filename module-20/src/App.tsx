import "./App.css";
import Form from "./fromHandleByObject";
import FormByReducer from "./formByUserReducer";
// import { useState } from "react";



function App() {
 //   const [count, setCount] = useState(0);

  return (
    <>
    {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>Here is the count {count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <hr /> */}
      <Form/>
      <FormByReducer/>
    </>
  );
}

export default App;
