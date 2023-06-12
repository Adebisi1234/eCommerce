import wishList from "../assets/wishList.svg";
import wishListed from "../assets/wishListed.svg";
import plus from "../assets/plus.svg";
const Card = ({
  imgUrl,
  smallImgUrl,
  isWishListed,
  name,
  price,
}: {
  imgUrl: string;
  smallImgUrl: string;
  isWishListed: boolean;
  name: string;
  price: string;
}) => {
  return (
    <div className="w-[144px] relative mb-6 h-[255px]">
      <div className="image mb-3">
        {/* before pseudo for small */}
        <img
          src={imgUrl}
          className="h-[194px] w-[144px] object-cover"
          height={194}
          width={144}
          alt="product image"
        />
        <div className="wishList absolute top-3 right-3 h-8 w-8 border-2 rounded-full flex justify-center items-center">
          <img
            src={isWishListed ? wishListed : wishList}
            alt="add to wishlist"
          />
        </div>
      </div>
      <p className="text-[#7B7B7B] font-semibold text-xs mb-1">{name}</p>
      <div className="price flex justify-between items-center w-full h-6">
        <p className="text-black text-sm font-bold">{price} NGN</p>
        <img src={plus} alt="add to cart" className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Card;
