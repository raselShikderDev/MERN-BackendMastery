export interface ITask{
    id: string;
    title: string;
    description: string;
    dueDate: Date | null;
    isComplete: boolean;
    priority: "Normal" | "Medium" | "High"; 
}