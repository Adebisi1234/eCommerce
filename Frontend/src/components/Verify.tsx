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

export default function Verify() {
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
          <Input id="otp" placeholder="Enter OTP" required type="text" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Verify</Button>
      </CardFooter>
    </Card>
  );
}
