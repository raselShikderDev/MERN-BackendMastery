import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import AddUser from "@/custom-components/users/adduser";
import { deleteUser, userSelector } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Checkbox } from "@/components/ui/checkbox"; 
import { Trash2 } from "lucide-react";

const User = () => {
  const users = useAppSelector(userSelector);
  const dispatch = useAppDispatch()

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      {/* Page Title & Add Button */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-4xl md:text-5xl mb-4">Users</h2>
        <AddUser />
      </div>

      {/* Users List */}
      <div className="space-y-6">
        {users.map((user) => (
          <Card
            key={user.userId}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-2xl border border-border shadow-sm"
          >
            <div className="flex-1">
              <CardHeader className="p-0">
                <CardTitle className="text-lg">{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">ID: {user.userId}</p>
              </CardHeader>
            </div>

            <div className="flex items-center gap-2 md:gap-4 self-end md:self-auto">
              <Checkbox className="mt-1" />
              <Button
                size="icon"
                variant="ghost"
                className="text-destructive hover:bg-destructive/10"
                onClick={()=> dispatch(deleteUser(user.userId))}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default User;
