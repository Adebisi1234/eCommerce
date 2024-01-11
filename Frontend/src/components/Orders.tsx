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
import { useGetOrder } from "@/hooks/useTransaction";
import { Skeleton } from "./ui/skeleton";
export default function Orders() {
  const id = localStorage.getItem("id");
  const { loading, data, error } = useGetOrder(id!);
  return (
    <>
      {!error || error === "Token expired" ? (
        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {!data || data.length === 0 ? (
              <div className="flex flex-col justify-center items-center w-60 h-60 gap-3">
                <img
                  src="./assets/noOrder.svg"
                  alt="Order not found"
                  loading="lazy"
                />
                <p>No Order found</p>
              </div>
            ) : (
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
                  {!loading || data ? (
                    data.map((_v, i) => {
                      return (
                        <TableRow key={i}>
                          <TableCell>{_v._id?.slice(0, 8)}</TableCell>
                          <TableCell>{_v.createdAt?.slice(0, 10)}</TableCell>
                          <TableCell>{_v?.amount}</TableCell>
                          <TableCell>
                            <Badge>{_v?.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <a className="text-blue-600 underline" href="#">
                              View
                            </a>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <>
                      <TableCell>
                        <Skeleton className="w-full h-10 bg-black" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-full h-10 bg-black" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-full h-10 bg-black" />
                      </TableCell>
                      <TableCell>
                        <Badge>
                          <Skeleton className="w-full h-10 bg-black" />
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-full h-10 bg-black" />
                      </TableCell>
                    </>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-white bg-black">
          <p>Error occurred: {error}</p>
        </div>
      )}
    </>
  );
}
