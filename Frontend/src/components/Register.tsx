/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DBRDuLZPoHn
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { BACKEND_URL } from "@/App";
import { useNavigate } from "react-router-dom";

export default function Register({
  user,
  setUser,
}: {
  user: {
    name: string;
    password: string;
    number: string;
    email: string;
    address: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      password: string;
      number: string;
      email: string;
      address: string;
    }>
  >;
}) {
  const navigate = useNavigate();
  const handleSubmit = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    fetch(BACKEND_URL + "/user/signup", {
      method: "POST",
      body: JSON.stringify(user),
    }).then(() => {
      navigate("/login");
    });
  };
  return (
    <main className="max-w-md p-4 mx-auto space-y-8">
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Registration Form
          </CardTitle>
          <CardDescription className="text-center text-gray-500 dark:text-gray-400">
            Please fill out the form below to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              required
              onInput={(ev) => {
                setUser((prev) => {
                  return {
                    ...prev,
                    name: (ev.target as HTMLInputElement).value,
                  };
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="johndoe@example.com"
              required
              type="email"
              onInput={(ev) => {
                setUser((prev) => {
                  return {
                    ...prev,
                    email: (ev.target as HTMLInputElement).value,
                  };
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              required
              type="password"
              onInput={(ev) => {
                setUser((prev) => {
                  return {
                    ...prev,
                    password: (ev.target as HTMLInputElement).value,
                  };
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="123-456-7890"
              required
              type="tel"
              onInput={(ev) => {
                setUser((prev) => {
                  return {
                    ...prev,
                    number: (ev.target as HTMLInputElement).value,
                  };
                });
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="123 Main St, City, Country"
              required
              onInput={(ev) => {
                setUser((prev) => {
                  return {
                    ...prev,
                    address: (ev.target as HTMLInputElement).value,
                  };
                });
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="w-full sm:w-auto"
            type="submit"
            onSubmit={handleSubmit}
          >
            Register
          </Button>
        </CardFooter>
      </Card>
      <div className="flex justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Already have an account?
          <a
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
