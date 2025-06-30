import { AddTaskModal } from "@/custom-components/tasks/addTask";
import  TaskCard  from "@/custom-components/tasks/taskCard";
import { selectorFilter, selectorTasks, taskFilter } from "@/redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
// import {addTaskModel} from "@/layouts/custom-components/tasks/addTask"

const Task = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(selectorTasks);
  const filters = useAppSelector(selectorFilter);
  console.log(tasks);
  console.log(filters);
  return (
    <>
      <div>
      <div>
        <h2 className="font-bold text-center text-5xl my-5">Tasks</h2>
        <AddTaskModal/>
        <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger onClick={()=> dispatch(taskFilter("All"))} value="All">All</TabsTrigger>
          <TabsTrigger onClick={()=> dispatch(taskFilter("Normal"))} value="Normal">Normal</TabsTrigger>
          <TabsTrigger onClick={()=> dispatch(taskFilter("Medium"))} value="Medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=> dispatch(taskFilter("High"))} value="High">High</TabsTrigger>
        </TabsList>
        </Tabs>
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
