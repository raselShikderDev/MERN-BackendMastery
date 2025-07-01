export interface ITask{
    id: string;
    title: string;
    description: string;
    dueDate: Date | null;
    isComplete: boolean;
    priority: "Normal" | "Medium" | "High";
    assignedTo:string | null;
}

export interface ITaskk {
  _id: string;
  title: string;
  description: string;
  priority: "Normal" | "Medium" | "high" | "High"; // adjust "Normal" if schema requires lowercase
  dueDate: string; // ISO date string (or use Date if parsed)
  isCompleted: boolean;
  assignedTo:string | null;
}

export interface IUser{
    userId:string,
    name:string,
}