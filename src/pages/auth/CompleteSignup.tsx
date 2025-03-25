import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function CompleteSignup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-200px)]">
        <h1 className="mb-8 md:mb-16 text-3xl md:text-4xl xl:text-[40px] text-center font-bold">
          Complete <br className="hidden md:block" />
          Signup
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-8 md:px-0 md:w-md">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="mb-1">Username</FormLabel>
                  <FormControl>
                    <input
                      placeholder="@username"
                      {...field}
                      className="border-2 border-[#CECECE] py-2 px-4 rounded-[50px] ring-0 focus:ring-0 focus:outline-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-4 w-full py-6 bg-[#F3D468] hover:bg-[#F3D468] text-black rounded-4xl cursor-pointer"
            >
              Proceed to dashboard
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default CompleteSignup;
