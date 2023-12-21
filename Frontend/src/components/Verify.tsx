/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dHbtbqexTot
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
import { useState } from "react";
import { BACKEND_URL } from "@/App";
import { useNavigate } from "react-router-dom";

export default function Verify({
  user,
}: {
  user: {
    name: string;
    password: string;
    number: string;
    email: string;
    address: string;
  };
}) {
  const [otp, setOtp] = useState({ code: "", number: user.number });
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Verify OTP</CardTitle>
        <CardDescription>
          Enter the OTP sent to your registered phone number below to verify
          your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="otp">OTP</Label>
          <Input
            id="otp"
            placeholder="Enter OTP"
            required
            type="text"
            onInput={(ev) => {
              setOtp((prev) => {
                return { ...prev, code: (ev.target as HTMLInputElement).value };
              });
            }}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => {
            fetch(BACKEND_URL + "/user/verify", {
              method: "POST",
              body: JSON.stringify(otp),
            }).then(() => {
              navigate("/home");
            });
          }}
        >
          Verify
        </Button>
      </CardFooter>
    </Card>
  );
}
