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
import { BACKEND_URL } from "@/App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({
  user,
  setUser,
}: {
  user: {
    name: string;
    password: string;
    phone: string;
    email: string;
    address: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      password: string;
      phone: string;
      email: string;
      address: string;
    }>
  >;
}) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your Phone and password below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="Phone">Phone</Label>
          <Input
            id="Phone"
            placeholder="Phone"
            required
            type="text"
            onInput={(ev) => {
              setUser((prev) => {
                return {
                  ...prev,
                  phone: (ev.target as HTMLInputElement).value,
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
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => {
            axios.post(BACKEND_URL + "/user/login", user).then((res) => {
              console.log(res);
              if (res.status < 400) {
                navigate("/login");
              }
            });
          }}
        >
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
