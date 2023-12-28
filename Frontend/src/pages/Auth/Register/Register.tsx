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
import { useEffect, useRef, useState } from "react";
import { useRegister } from "@/hooks/useUser";
import { Loader2 } from "lucide-react";
type userInput = {
  confirmPassword?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
};

export default function Register() {
  const navigate = useNavigate();
  const [details, setDetails] = useState<userInput | undefined>(undefined);
  const [passwordErr, setPasswordErr] = useState("");
  const inputRef = useRef<Map<keyof userInput, HTMLInputElement>>();
  const { loading, data, error } = useRegister(details);

  useEffect(() => {
    if (data) {
      navigate("/auth/verify", { state: details?.email });
    }
  }, [data]);
  const getMap = () => {
    if (inputRef.current) return inputRef.current;
    inputRef.current = new Map<keyof userInput, HTMLInputElement>();
    return inputRef.current;
  };
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
              setPasswordErr("");
              console.log("hi");
              if (
                !(
                  inputRef.current?.get("password")?.value ===
                  inputRef.current?.get("confirmPassword")?.value
                )
              ) {
                setPasswordErr("password didn't match");
                console.log("wtf");
                return;
              }
              setDetails({
                name: inputRef.current?.get("name")?.value ?? "",
                email: inputRef.current?.get("email")?.value ?? "",
                password: inputRef.current?.get("password")?.value ?? "",
                phone: inputRef.current?.get("phone")?.value ?? "",
              });
            }}
          >
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  ref={(node) => {
                    if (!node) {
                      return;
                    }
                    const map = getMap();
                    map.set("name", node);
                  }}
                  id="name"
                  placeholder="John Doe"
                  required
                  disabled={loading}
                  autoComplete="name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  ref={(node) => {
                    if (!node) {
                      return;
                    }
                    const map = getMap();
                    map.set("email", node);
                  }}
                  id="email"
                  placeholder="johndoe@example.com"
                  required
                  disabled={loading}
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  ref={(node) => {
                    if (!node) {
                      return;
                    }
                    const map = getMap();
                    map.set("password", node);
                  }}
                  id="password"
                  required
                  disabled={loading}
                  type="password"
                  minLength={3}
                  maxLength={30}
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  ref={(node) => {
                    if (!node) {
                      return;
                    }
                    const map = getMap();
                    map.set("confirmPassword", node);
                  }}
                  id="confirmPassword"
                  required
                  disabled={loading}
                  type="password"
                  minLength={3}
                  maxLength={30}
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="flex">
                  <div className="w-fit h-10 border mr-1 p-1 flex justify-center items-center">
                    +234
                  </div>
                  <Input
                    ref={(node) => {
                      if (!node) {
                        return;
                      }
                      const map = getMap();
                      map.set("phone", node);
                    }}
                    id="phone"
                    placeholder="123-456-7890"
                    required
                    disabled={loading}
                    type="tel"
                    maxLength={10}
                    autoComplete="phone number"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pb-0">
              <Button className="w-full sm:w-auto">
                {!loading ? (
                  "Register"
                ) : (
                  <Loader2 className="animate-spin fill-none stroke-white" />
                )}
              </Button>
            </CardFooter>
          </form>
          {error && <p className="my-1 mx-auto w-fit text-red-500 ">{error}</p>}
          {passwordErr && (
            <p className="my-1 mx-auto w-fit text-red-500 ">{passwordErr}</p>
          )}
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
