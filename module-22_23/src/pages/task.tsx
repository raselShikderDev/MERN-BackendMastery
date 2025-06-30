import { AddTaskModal } from "@/custom-components/tasks/addTask";
import  TaskCard  from "@/custom-components/tasks/taskCard";
import { selectorFilter, selectorTasks } from "@/redux/features/todoSlice";
import { useAppSelector } from "@/redux/hook";
// import {addTaskModel} from "@/layouts/custom-components/tasks/addTask"

const Task = () => {
  const tasks = useAppSelector(selectorTasks);
  const filters = useAppSelector(selectorFilter);
  // const dispatch = useAppDispatch(addTask())
  console.log(tasks);
  console.log(filters);
  return (
    <>
      <div>
      <div>
        <h2 className="font-bold text-center text-5xl my-5">Tasks</h2>
        <AddTaskModal/>
      </div>
        <div className="space-y-5 mt-5">
          {tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Task;
