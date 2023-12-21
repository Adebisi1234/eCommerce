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

export default function Register() {
  return (
    <main className="mx-auto max-w-md space-y-8 p-4">
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Registration Form
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400 text-center">
            Please fill out the form below to create your account.
          </CardDescription>
        </CardHeader>
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
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="123-456-7890" required type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="123 Main St, City, Country"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-full sm:w-auto" type="submit">
            Register
          </Button>
        </CardFooter>
      </Card>
      <div className="flex justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Already have an account?
          <a href="#">Log in</a>
        </p>
      </div>
    </main>
  );
}
