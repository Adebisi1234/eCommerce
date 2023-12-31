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
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useVerify } from "@/hooks/useUser";
import { Loader2 } from "lucide-react";
type UserInput = {
  email: string;
  code: string;
};
export default function Verify() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState<UserInput | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { loading, error, data } = useVerify(details);
  const otpRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!state) {
      navigate("/auth/login");
    }
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      localStorage.setItem("token", `Bearer ${data.token}`);
      localStorage.setItem("id", `${data._id}`);
      localStorage.setItem("cartId", `${data.cart}`);

      navigate(-1);
    }
  }, [data]);

  return (
    <>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Verify OTP</CardTitle>
          <CardDescription>
            Enter the OTP sent to your registered email address below to verify
            your account.
          </CardDescription>
        </CardHeader>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            setIsLoading(true);
            setDetails({
              email: state,
              code: otpRef.current?.value || "000000",
            });
          }}
        >
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">OTP</Label>
              <Input
                id="otp"
                placeholder="Enter OTP"
                required
                type="text"
                minLength={6}
                maxLength={6}
                disabled={loading}
                ref={otpRef}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => setIsLoading(!isLoading)}>
              {!isLoading ? (
                "Verify"
              ) : (
                <Loader2 className="animate-spin fill-none stroke-white" />
              )}
            </Button>
          </CardFooter>
        </form>
        {error && <p className="mx-auto my-1 text-red-500 w-fit ">{error}</p>}
      </Card>
    </>
  );
}
