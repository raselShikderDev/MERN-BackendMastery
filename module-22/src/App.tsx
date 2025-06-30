import { Outlet } from 'react-router'
import './App.css'
import { decrement, increment, selectorCounter } from './redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'
import Navbar from './layouts/custom-components/navbar'


function App() {
  const count = useAppSelector(selectorCounter)
  const dispatch = useAppDispatch()
  return (
    <>
     <div className="">
      <Navbar/>
      <button  onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
      <Outlet/>
    </>
  )
}

export default App
