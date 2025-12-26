"use client";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CartButton = ({ product }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();

  const addToCart = () => {
    if (isLogin) {
      alert(product._id);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <div>
      <button
        onClick={addToCart}
        className="btn btn-primary w-full rounded-xl text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn"
      >
        <span className="text-xl group-hover/btn:-translate-x-1 transition-transform duration-300">
          <HiOutlineShoppingBag />
        </span>
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
