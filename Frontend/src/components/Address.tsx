/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fLYhxJd1QXQ
 */
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Address() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Address</DialogTitle>
          <DialogDescription>
            Update your address details here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="address-line-1">
              Address Line 1
            </Label>
            <Input
              className="col-span-3"
              id="address-line-1"
              placeholder="1234 Main St"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="address-line-2">
              Address Line 2
            </Label>
            <Input
              className="col-span-3"
              id="address-line-2"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="city">
              City
            </Label>
            <Input
              className="col-span-3"
              id="city"
              placeholder="Enter your city"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="post-code">
              Post Code
            </Label>
            <Input
              className="col-span-3"
              id="post-code"
              placeholder="Enter your post code"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="country">
              Country
            </Label>
            <Input
              className="col-span-3"
              id="country"
              placeholder="Enter your country"
            />
          </div>
        </div>
        <DialogFooter className="flex justify-between">
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
