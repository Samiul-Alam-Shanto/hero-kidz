import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart, FaRegEye, FaBolt } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  // 1. Destructure all properties for clean access
  const { _id, title, bangla, image, price, discount, reviews, sold, ratings } =
    product;

  // 2. Price Calculation Logic
  const discountedPrice = Math.round(price - (price * (discount ?? 0)) / 100);
  //   console.log(discountedPrice);

  return (
    <div className="group relative w-full  bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-out overflow-hidden flex flex-col">
      {/* --- Image Section --- */}
      <div className="relative h-70 w-full bg-gray-50 overflow-hidden">
        {/* Main Image with Zoom Effect */}
        <Image
          src={image}
          alt={title}
          width={450}
          height={280}
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {/* Overlay Gradient (Subtle darken on hover for contrast) */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          {discount > 0 && (
            <span className="badge border-none bg-red-500 text-white font-bold px-3 py-3 rounded-xl shadow-lg shadow-red-500/30">
              -{discount}%
            </span>
          )}
        </div>

        {/* Floating Action Button (Appears on Hover) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 z-20 px-4">
          <Link
            href={`/products/${_id}`}
            className="btn btn-sm glass text-gray-800 hover:text-primary w-full shadow-lg backdrop-blur-md"
          >
            <FaRegEye className="text-lg" />
            Quick View
          </Link>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="flex flex-col grow p-5 space-y-3">
        {/* Rating & Sold Row */}
        <div className="flex items-center justify-between text-xs font-medium text-gray-500">
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg text-amber-700">
            <FaStar className="text-amber-400" />
            <span>{ratings}</span>
            <span className="text-gray-300">|</span>
            <span>{reviews} reviews</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-600">
            <FaBolt />
            <span>{sold} sold</span>
          </div>
        </div>

        {/* Titles */}
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-gray-400 font-sans line-clamp-1">
            {bangla}
          </p>
        </div>

        {/* Price Section */}
        <div className="pt-2 flex items-center gap-3">
          <span className="text-2xl font-extrabold text-gray-900">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <div className="flex flex-col leading-none">
              <span className="text-xs text-gray-400 line-through">
                ৳ {price}
              </span>
              <span className="text-[10px] font-semibold text-red-500 bg-red-50 px-1 rounded">
                Save ৳{price - discountedPrice}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* --- Footer / Action Section --- */}
      <div className="p-5 pt-0 mt-auto">
        <CartButton product={{ ...product, _id: product._id.toString() }} />
      </div>
    </div>
  );
};

export default ProductCard;
