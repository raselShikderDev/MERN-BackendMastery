import { AddTaskModal } from "@/custom-components/tasks/addTask";
import  TaskCard  from "@/custom-components/tasks/taskCard";
import {
  Tabs,
} from "@/components/ui/tabs"
import { useGetTaskQuery } from "@/redux/api/baseurl";
import type { ITaskk } from "@/redux/types";



const Task = () => {
  const {data, isError, isLoading}= useGetTaskQuery(undefined,{
    pollingInterval:30000,
    refetchOnFocus:true,
  })
  console.log(data, isLoading, isError);
  
  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <>
      <div>
      <div>
        <h2 className="font-bold text-center text-5xl my-5">Tasks</h2>
        <AddTaskModal/>
        <Tabs defaultValue="account">
        {/* <TabsList>
          <TabsTrigger onClick={()=> dispatch(taskFilter("All"))} value="All">All</TabsTrigger>
          <TabsTrigger onClick={()=> dispatch(taskFilter("Normal"))} value="Normal">Normal</TabsTrigger>
          <TabsTrigger onClick={()=> dispatch(taskFilter("Medium"))} value="Medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=> dispatch(taskFilter("High"))} value="High">High</TabsTrigger>
        </TabsList> */}
        </Tabs>
      </div>
        <div className="space-y-5 mt-5">
          {!isLoading && data.tasks.map((task:ITaskk) => {
            console.log("Task: ", task);
            return <TaskCard key={task._id} task={task} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Task;
