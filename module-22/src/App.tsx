import { Outlet } from 'react-router'
import './App.css'
import { decrement, increment } from './redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'
import { ModeToggle } from './components/ui/mode-toggle'


function App() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()
  return (
    <>
     <div className="">
      <div><p>Simple navbar</p> <div><ModeToggle/></div></div>
      <button  onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
      <Outlet/>
    </>
  )
}

export default App
