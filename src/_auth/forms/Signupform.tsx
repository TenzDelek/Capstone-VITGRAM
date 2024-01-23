import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SignupValidation } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appwrite/api";

const Signupform = () => {
  const isloading=false


  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    //create user
    const newUser=await createUserAccount(values);
    console.log(newUser)
   
  }
  return (
    <Form {...form}>
      <div className=" sm:w-420 flex-center flex-col ">
        <img src="/assets/images/real.png" draggable="false" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-2">
          Create a new account
        </h2>
        <p className=" text-light-3 small-medium md:base-regular mt-2">
          To use VITgram enter your details
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-2 w-full mt-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className=" shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className=" shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className=" shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className=" shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className=" shad-button_primary">
            {isloading ?(
              <div className="flex-center gap-2">
               <Loader/> Loading....
              </div>
            ):"Sign Up"}
          </Button>
          <p className="text-small-regular mt-2 text-center text-light-2">
              Already have an account? 
              <Link to="/sign-in" className=" text-primary-500 text-small-semibold ml-1 ">Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default Signupform;
