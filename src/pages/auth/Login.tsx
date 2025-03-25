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
import { Link } from "react-router";

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
      <h1 className="mt-8 text-3xl md:text-4xl xl:text-[40px] text-center font-bold">
        Login
      </h1>
      <div className="mt-8 flex flex-col justify-center items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full px-8 md:px-0 md:w-md"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="mb-1">Email</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Enter your email address"
                      {...field}
                      className="border-2 border-[#CECECE] py-2 px-4 rounded-[50px] ring-0 focus:ring-0 focus:outline-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="mb-1">Password</FormLabel>
                  <FormControl>
                    <input
                      placeholder="Enter your password"
                      {...field}
                      className="border-2 border-[#CECECE] py-2 px-4 rounded-[50px] focus:outline-0"
                    />
                  </FormControl>

                  <FormMessage />
                  <div className="flex justify-end">
                    <Link to="/" className="underline">
                      Forgot Password?
                    </Link>
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-4 w-full py-6 bg-[#F3D468] hover:bg-[#F3D468] text-black rounded-4xl cursor-pointer"
            >
              Proceed with email
            </Button>

            <div className="flex justify-center mt-4">
              <Link to="/register" className="underline">
                Don't have an account? Signup
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}

export default Login;
