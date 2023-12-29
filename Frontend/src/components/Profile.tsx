/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ySSKMasiqlp
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Address from "./Address";

export default function UserProfile() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>User Details</CardTitle>
            <Address />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <div className="font-medium text-lg">John Doe</div>
              <div className="text-gray-500 dark:text-gray-400">
                johndoe@example.com
              </div>
            </div>
          </div>
          <div className="grid gap-2 text-sm">
            <div className="flex justify-between">
              <div>Phone:</div>
              <div className="text-gray-500 dark:text-gray-400">
                +1234567890
              </div>
            </div>
            <div className="flex justify-between">
              <div>Address:</div>
              <div className="text-gray-500 dark:text-gray-400">
                123 Main St, Anytown, USA
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#12345</TableCell>
                <TableCell>Dec 20, 2023</TableCell>
                <TableCell>$120.00</TableCell>
                <TableCell>
                  <Badge>Delivered</Badge>
                </TableCell>
                <TableCell>
                  <a className="text-blue-600 underline" href="#">
                    View
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#12346</TableCell>
                <TableCell>Dec 22, 2023</TableCell>
                <TableCell>$200.00</TableCell>
                <TableCell>
                  <Badge className="bg-red-500 text-white">Cancelled</Badge>
                </TableCell>
                <TableCell>
                  <a className="text-blue-600 underline" href="#">
                    View
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
