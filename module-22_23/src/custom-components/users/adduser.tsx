/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";

const AddUser = () => {
    const dispatch = useAppDispatch();
  const form = useForm({
    defaultValues:{
    name: "",
    }
  });

  const onsubmit = (data:any)=>{
    console.log(data.name)
    dispatch(addUser(data.name))
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-500 text-black font-bold hover:bg-white hover:text-black-500">
            Add User
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription className="sr-only">
            Fill out the following field
          </DialogDescription>
          <DialogHeader>
            <DialogTitle> Add User</DialogTitle>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onsubmit)}>
            <Form {...form}>
              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-3">
                <DialogFooter>
                  <Button
                    className="bg-green-500 text-black font-bold hover:bg-white hover:text-black-500"
                    type="submit"
                  >
                    Save
                  </Button>
                </DialogFooter>
              </div>
            </Form>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddUser