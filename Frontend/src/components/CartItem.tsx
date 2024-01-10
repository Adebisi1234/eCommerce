import { Avatar } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { useDeleteCartItem, useUpdateCartItem } from "@/hooks/useUser";
import { CartDoc } from "@/types/types";

type Prop = {
  id: string;
  name: string;
  desc: string;
  thumbnail: string;
  itemQty: number;
  cartId: string;
  itemId: string;
  setCart: React.Dispatch<React.SetStateAction<CartDoc | undefined>>;
  index: number;
};
type Update =
  | {
      cartId: string;
      itemId: string;
      itemQty: number;
    }
  | undefined;
export default function CartItem({
  name,
  desc,
  thumbnail,
  itemQty,
  id,
  itemId,
  cartId,
  setCart,
  index,
}: Prop) {
  const [quantity, setQuantity] = useState(itemQty);
  const [update, setUpdate] = useState<Update>(undefined);
  const [deleteItem, setDeleteItem] = useState(false);
  useEffect(() => {
    if (quantity === itemQty) return;
    setUpdate({
      cartId,
      itemId,
      itemQty: quantity,
    });
    setCart((prev) => {
      const temp = { ...prev };
      if (typeof temp === "undefined") {
        return prev;
      }
      if (temp?.itemIds![index]) {
        temp.itemIds[index].itemQty = quantity;
      }
      return temp as CartDoc;
    });
  }, [quantity]);
  useEffect(() => {
    if (!deleteItem) return;
    setCart((prev) => {
      const temp = { ...prev };
      if (typeof temp === "undefined") {
        return prev;
      }
      temp.itemIds!.splice(index, 1);
      return temp as CartDoc;
    });
  }, [deleteItem]);
  useUpdateCartItem(id, update);
  useDeleteCartItem(deleteItem ? id : undefined);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Avatar className="w-10 h-10">
          <AvatarImage src={thumbnail} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="w-full text-gray-500 overflow-clip overflow-ellipsis">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={(ev) => {
            setQuantity((prev) => (prev >= 1 ? --prev : prev));
            if (quantity === 1) {
              ev.currentTarget.classList.add("opacity-50");
            } else {
              ev.currentTarget.classList.remove("opacity-50");
            }
          }}
        >
          <MinusIcon className="w-4 h-4" />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            setQuantity((prev) => ++prev);
          }}
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => {
          setDeleteItem(true);
        }}
      >
        <Trash2Icon />
      </div>
    </div>
  );
}
