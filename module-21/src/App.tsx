import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  const handleIncrement = (value:number) => {
    dispatch(increment(value));
  };
  const handleDecrement = (value:number) => {
    dispatch(decrement(value));
  };

  return (
    <>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
      <h2>{count}</h2>
      <button onClick={() => handleDecrement(1)}>Decrement</button>
      <button onClick={() => handleDecrement(5)}>Decrement by 5</button>
    </>
  );
}

export default App;
