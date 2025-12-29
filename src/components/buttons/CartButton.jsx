"use client";
import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CartButton = ({ product }) => {
  const session = useSession();
  const isLogin = session?.status == "authenticated";
  const router = useRouter();
  const path = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async () => {
    setIsLoading(true);
    if (isLogin) {
      // alert(product._id);
      const result = await handleCart({ product, inc: true });
      if (result.success) {
        alert("Added to Cart", product?.title);
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <button
        disabled={session.status == "loading" || isLoading}
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
