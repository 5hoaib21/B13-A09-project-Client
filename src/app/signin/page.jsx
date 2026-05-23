"use client";
import { Card } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user, "from signup page");

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    // console.log({data, error});
    if (data) {
      toast.success("Sign in successful");
      redirect("/");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="w-5/12 mx-auto my-20">
      <h2 className="text-3xl font-bold my-3">Login your Account!</h2>
      <Card className="">
        <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button className={"w-full font-bold text-shadow-md"} type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
        <div className="text-center">
          <h2>
            don`t have an account?
            <Link href={"/signup"}>
              {" "}
              <span className="text-blue">register</span>
            </Link>
          </h2>
        </div>
        <Button
          onClick={handleGoogleSignin}
          className="w-full"
          variant="tertiary"
        >
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
        <Button isDisabled className="w-full" variant="tertiary">
          <Icon icon="mdi:github" />
          Sign in with GitHub
        </Button>
        <Button isDisabled className="w-full" variant="tertiary">
          <Icon icon="ion:logo-apple" />
          Sign in with Apple
        </Button>
      </Card>
    </div>
  );
};

export default SignInPage;
