import * as z from "zod";
const validEmailDomain = "vitstudent.ac.in";
export const SignupValidation = z.object({
    name:z.string().min(2,{message:'name is too short'}),
    username: z.string().min(2,{message:'username is too short'}),
    email:z.string().email().refine((value) => value.endsWith(`@${validEmailDomain}`), {
      message: 'only VIT mail is Accepted',
    }),
    password:z.string().min(8,{message:"password must be atleast 8 character"})
  });