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
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
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
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="johndoe@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="123-456-7890"
                  required
                  type="tel"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pb-0">
              <Button className="w-full sm:w-auto">Register</Button>
            </CardFooter>
          </form>
          <div className="flex justify-center pb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?
              <a
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                {" "}
                Log in
              </a>
            </p>
          </div>
        </Card>
      </main>
    </>
  );
}
