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
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLogin } from "@/hooks/useUser";
import { Loader2 } from "lucide-react";

type userInput = {
  email: string;
  password: string;
};
export default function Login() {
  const navigate = useNavigate();
  const [details, setDetails] = useState<userInput | undefined>(undefined);
  const inputRef = useRef<Map<string, HTMLInputElement>>();
  const { loading, data, error } = useLogin(details);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
      navigate("/auth/verify", { state: details?.email, replace: true });
    }
  }, [data]);
  const getMap = () => {
    if (inputRef.current) return inputRef.current;
    inputRef.current = new Map<string, HTMLInputElement>();
    return inputRef.current;
  };
  return (
    <>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your Email and password below to login to your account.
          </CardDescription>
        </CardHeader>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            setIsLoading(true);
            setDetails({
              email: inputRef.current?.get("email")?.value || "",
              password: inputRef.current?.get("password")?.value || "",
            });
          }}
        >
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                placeholder="Email"
                required
                type="text"
                autoComplete="Email"
                disabled={loading ? true : false}
                ref={(node) => {
                  if (!node) {
                    return;
                  }
                  const map = getMap();
                  map.set("email", node);
                }}
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
                disabled={loading ? true : false}
                ref={(node) => {
                  if (!node) {
                    return;
                  }
                  const map = getMap();
                  map.set("password", node);
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="flex items-center justify-center w-full"
              onClick={() => setIsLoading((prev) => !prev)}
            >
              {!isLoading ? (
                "Sign in"
              ) : (
                <Loader2 className="animate-spin fill-none stroke-white" />
              )}
            </Button>
          </CardFooter>
        </form>
        {error && <p className="mx-auto my-1 text-red-500 w-fit ">{error}</p>}
        <div className="flex justify-center mb-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?
            <a
              onClick={() => {
                navigate("/auth/register", { replace: true });
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
