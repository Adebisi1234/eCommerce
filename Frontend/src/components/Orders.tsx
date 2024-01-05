import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { Badge } from "./ui/badge";
export default function Orders() {
  return (
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
                <Badge className="text-white bg-red-500">Cancelled</Badge>
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
  );
}
