// import { useUpdateProfile } from "@/hooks/useUser";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Payment({
  name,
  setPaymentDetails,
}: {
  name: string;
  setPaymentDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // const {loading, data, error } = useUpdateProfile()
  const [value, setValue] = useState("card");
  console.log(value);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>{name}</Button>
        </DialogTrigger>
        <DialogContent>
          <Card className="max-w-md mx-auto border-none">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                Add a new payment method to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <RadioGroup
                defaultValue="card"
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="sr-only peer"
                  />
                  <Label
                    onClick={() => {
                      setValue("card");
                    }}
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6 mb-3"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                    Card
                    <p>(Dummy)</p>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="transfer"
                    id="transfer"
                    className="sr-only peer"
                  />
                  <Label
                    onClick={() => {
                      setValue("transfer");
                    }}
                    htmlFor="transfer"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6 mb-3"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                    Bank Transfer
                    <p>(Support me)</p>
                  </Label>
                </div>
              </RadioGroup>
              {value === "card" ? (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="First Last" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="number">Card number</Label>
                    <Input id="number" placeholder="" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="month">Expires</Label>
                      <Select>
                        <SelectTrigger id="month">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">January</SelectItem>
                          <SelectItem value="2">February</SelectItem>
                          <SelectItem value="3">March</SelectItem>
                          <SelectItem value="4">April</SelectItem>
                          <SelectItem value="5">May</SelectItem>
                          <SelectItem value="6">June</SelectItem>
                          <SelectItem value="7">July</SelectItem>
                          <SelectItem value="8">August</SelectItem>
                          <SelectItem value="9">September</SelectItem>
                          <SelectItem value="10">October</SelectItem>
                          <SelectItem value="11">November</SelectItem>
                          <SelectItem value="12">December</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="year">Year</Label>
                      <Select>
                        <SelectTrigger id="year">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => (
                            <SelectItem
                              key={i}
                              value={`${new Date().getFullYear() + i}`}
                            >
                              {new Date().getFullYear() + i}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="CVC" maxLength={3} />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center flex-col">
                  <p>
                    Transfer any amount you wish into the account below then
                    click continue
                  </p>
                  <p className="mt-2">8114779597</p>
                  <p>Tobiloba Isaiah Adebisi</p>
                  <p>Opay</p>
                </div>
              )}
            </CardContent>
            <DialogFooter>
              <DialogClose>
                <Button
                  className="w-full"
                  onClick={() => {
                    localStorage.setItem("paymentDetails", "set up");
                    setPaymentDetails(true);
                  }}
                >
                  Continue
                </Button>
              </DialogClose>
            </DialogFooter>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
}
