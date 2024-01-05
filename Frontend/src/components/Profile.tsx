/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ySSKMasiqlp
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

import Address from "./Address";
import { useGetProfile } from "@/hooks/useUser";
import { Skeleton } from "./ui/skeleton";
import Orders from "./Orders";
import { Button } from "./ui/button";

export default function UserProfile() {
  const userId = localStorage.getItem("id");
  const { loading, data, error } = useGetProfile(userId!);
  const Fallback = <Skeleton className="bg-black w-12 h-5" />;
  return (
    <>
      {!error || error === "Token expired" ? (
        <div className="grid gap-6 p-6 lg:grid-cols-2">
          {loading || !data ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>User Details</CardTitle>
                  <Button variant="outline" className="px-0">
                    <Skeleton className="w-14 h-10 bg-black" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage alt="User Avatar" src="" />
                    <AvatarFallback>Loading</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="text-lg font-medium">
                      <Skeleton className="w-20 h-7 bg-black" />
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      <Skeleton className="w-40 h-7 bg-black" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <div>Phone:</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {Fallback}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>Address 1:</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {Fallback}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>Address 2:</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {Fallback}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>City:</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {Fallback}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>Post Code:</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {Fallback}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>Country:</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {Fallback}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>User Details</CardTitle>
                  <Address />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      alt="User Avatar"
                      src={data?.profilePic ?? ""}
                    />
                    <AvatarFallback>
                      {data?.name.slice(0, 2) ?? "JD"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="text-lg font-medium">
                      {data?.name ?? Fallback}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {data?.email ?? Fallback}
                    </div>
                  </div>
                </div>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <div>Phone:</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {data?.phone ?? Fallback}
                    </div>
                  </div>
                  {data?.address.addressLine1 && (
                    <div className="flex justify-between">
                      <div>Address 1:</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {data?.address.addressLine1}
                      </div>
                    </div>
                  )}
                  {data?.address.addressLine2 && (
                    <div className="flex justify-between">
                      <div>Address 2:</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {data?.address.addressLine2}
                      </div>
                    </div>
                  )}
                  {data?.address.city && (
                    <div className="flex justify-between">
                      <div>City:</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {data?.address.city}
                      </div>
                    </div>
                  )}
                  {data?.address.postCode && (
                    <div className="flex justify-between">
                      <div>Post Code:</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {data?.address.postCode}
                      </div>
                    </div>
                  )}
                  {data?.address.country && (
                    <div className="flex justify-between">
                      <div>Country:</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {data?.address.country}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          <Orders />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-white bg-black">
          <p>Error occurred: {error}</p>
        </div>
      )}
    </>
  );
}
