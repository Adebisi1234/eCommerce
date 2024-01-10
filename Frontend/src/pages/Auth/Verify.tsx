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
import { useRefreshOTP, useVerify } from "@/hooks/useUser";
import { Loader2 } from "lucide-react";
type UserInput = {
  email: string;
  code?: string;
};
export default function Verify() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState<UserInput | undefined>(undefined);
  const [refresh, setRefresh] = useState<boolean>(true);
  const [countdown, setCountdown] = useState<number>(60);
  const [email, setEmail] = useState<UserInput | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { loading, error, data } = useVerify(details);
  const otpRef = useRef<HTMLInputElement>(null);
  if (!state) {
    navigate("/auth/login");
  }

  useRefreshOTP(email);
  useEffect(() => {
    let intervalId: any;
    if (refresh) {
      setCountdown(60);
      clearInterval(intervalId);
      return;
    }
    intervalId = setInterval(() => {
      setCountdown((prev) => {
        if (prev !== 0) {
          return prev - 1;
        }
        setRefresh(true);
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refresh]);

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
            your account. Expires in 3mins
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
        <div className="flex items-center justify-center w-full gap-3 space-y-1">
          <p>Didn't get an email </p>
          <Button
            className={`${!refresh && "opacity-0"}`}
            onClick={() => {
              if (!refresh) return;
              setEmail({ email: state });
              setRefresh(false);
            }}
          >
            Retry
          </Button>
        </div>
        {!refresh && (
          <p className="flex items-center justify-center w-full gap-3 space-y-1">
            retrying: 0: {countdown}sec{" "}
          </p>
        )}
        {error && <p className="mx-auto my-1 text-red-500 w-fit ">{error}</p>}
      </Card>
    </>
  );
}
