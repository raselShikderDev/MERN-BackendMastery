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
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export function AddTaskModal() {
  const form = useForm({
    defaultValues: {
      title: "",
      description:"",
    },
  });

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-green-500 text-black font-bold hover:bg-white hover:text-black-500">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription className="sr-only">
            Fill out the following field
          </DialogDescription>
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onsubmit)}>
            <Form {...form}>
              <div className="space-y-5">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Title" {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Task descreption" {...field} value={field.value  || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
             <div className="mt-3">
               <DialogFooter>
                {/* <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose> */}
                <Button className="bg-green-500 text-black font-bold hover:bg-white hover:text-black-500" type="submit">Save</Button>
              </DialogFooter>
             </div>
            </Form>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
