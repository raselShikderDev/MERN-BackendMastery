import TaskCard from "@/layouts/custom-components/tasks/taskCard"
import {selectorFilter, selectorTasks } from "@/redux/features/todoSlice"
import { useAppSelector } from "@/redux/hook"
// import {addTaskModel} from "@/layouts/custom-components/tasks/addTask"

 const Task = () =>{
    const tasks = useAppSelector(selectorTasks)
    const filters = useAppSelector(selectorFilter)
    // const dispatch = useAppDispatch(addTask())
    console.log(tasks)
    console.log(filters)
    return(
        <>
       <div>
        <h2>Tasks</h2>
        {/* <addTaskModel/> */}
        <div className="space-y-5 mt-5">
            {
                tasks.map((task)=>{
                    return <TaskCard task={task}/>
                })
            }
        </div>
       </div>
        </>
    )
}

export default Task