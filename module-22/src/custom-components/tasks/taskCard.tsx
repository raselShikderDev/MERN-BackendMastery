import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { format } from "date-fns";
import type { ITask } from "@/redux/types";

interface TaskCardProps {
  task: ITask;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { title, description, dueDate, isComplete, priority } = task;

  const priorityColors: Record<string, string> = {
    Normal: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-red-500",
  };

  return (
    <Card className="w-full relative rounded-2xl border border-border shadow-sm transition-colors">
      {/* Priority dot */}
      <span
        className={`absolute top-2 left-2 w-3 h-3 rounded-full ${
          priorityColors[priority] || "bg-gray-400"
        }`}
        title={`Priority: ${priority}`}
      ></span>

      <CardContent className="p-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 w-full">
          <Checkbox
            checked={isComplete}
            // onCheckedChange={() => onToggle(id)}
            className="mt-1"
          />
          <div className="flex flex-col w-full">
            <h3
              className={`font-semibold text-lg break-words ${
                isComplete ? "line-through text-muted-foreground" : ""
              }`}
            >
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground break-words mt-1">
                {description}
              </p>
            )}
            {dueDate && (
              <p className="text-xs text-muted-foreground mt-2">
                🗓 Due: {format(dueDate, "PPP")}
              </p>
            )}
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
