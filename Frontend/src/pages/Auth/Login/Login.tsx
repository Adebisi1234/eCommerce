/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zK1QRbZDfYp
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

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your Phone and password below to login to your account.
          </CardDescription>
        </CardHeader>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="Phone">Phone</Label>
              <Input
                id="Phone"
                placeholder="Phone"
                required
                type="text"
                autoComplete="phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign in</Button>
          </CardFooter>
        </form>
        <div className="flex justify-center mb-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?
            <a
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              {" "}
              Sign up
            </a>
          </p>
        </div>
      </Card>
    </>
  );
}
