import { getSingleProduct } from "@/actions/server/product";
import Error404 from "@/app/not-found";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import {
  FaStar,
  FaShieldAlt,
  FaTruckMoving,
  FaTools,
  FaQuestionCircle,
} from "react-icons/fa";
import { HiOutlineShoppingBag, HiLightningBolt } from "react-icons/hi";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Hero Kidz",
      description: "The requested product could not be found.",
    };
  }

  const { title, description, image, price = 0, discount = 0 } = product;

  const discountedPrice = Math.round(price - (price * (discount ?? 0)) / 100);

  const shortDescription =
    description?.slice(0, 160) ||
    "Discover fun and educational kids products at Hero Kidz.";

  const productUrl = `https://hero-kidz-eta.vercel.app/products/${id}`;

  return {
    title: `${title} | Hero Kidz`,
    description: shortDescription,

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      type: "website",
      url: productUrl,
      title: `${title} | Hero Kidz`,
      description: shortDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Hero Kidz`,
      description: shortDescription,
      images: [image],
    },
  };
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  if (!product) return <Error404 />;

  const {
    title,
    bangla,
    image,
    price = 0,
    discount = 0,
    description,
    qna = [],
    info = [],
    ratings = 0,
    reviews = 0,
  } = product;

  const discountedPrice = Math.round(price - (price * (discount ?? 0)) / 100);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* --- Left Column: Visuals --- */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 group">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {discount > 0 && (
              <div className="absolute top-6 left-6 badge badge-error p-4 font-bold text-white text-lg shadow-xl shadow-red-500/20">
                SAVE {discount}%
              </div>
            )}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {info.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary">
                  <FaTools />
                </div>
                <p className="text-xs font-semibold text-slate-700 leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Column: Mechanics & Purchase --- */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-sm font-bold text-slate-500">
                {ratings} ({reviews} Reviews)
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              {title}
            </h1>
            <p className="text-xl font-medium text-primary/80 font-sans">
              {bangla}
            </p>
          </div>

          {/* Pricing Card */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-200 relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium mb-1">
                  Current Price
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold italic">
                    ৳{discountedPrice}
                  </span>
                  <span className="text-lg text-slate-500 line-through">
                    ৳{price}
                  </span>
                </div>
              </div>
              <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                <HiLightningBolt className="text-2xl text-yellow-400" />
              </div>
            </div>
            {/* Decorative Background Glow */}
            <div className="absolute -right-4 -top-4 h-24 w-24 bg-primary/20 blur-3xl rounded-full" />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="h-1.5 w-6 bg-primary rounded-full" /> Product
              Story
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <FaQuestionCircle className="text-primary" /> Common Questions
            </h3>
            <div className="join join-vertical w-full bg-slate-50 border border-slate-100">
              {qna.map((item, i) => (
                <div
                  key={i}
                  className="collapse collapse-arrow join-item border-b border-slate-200"
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    defaultChecked={i === 0}
                  />
                  <div className="collapse-title text-sm font-bold text-slate-700">
                    {item.question}
                  </div>
                  <div className="collapse-content text-sm text-slate-500">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 sticky bottom-4 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-white lg:static lg:bg-transparent lg:p-0 lg:border-none">
            <CartButton product={product} />
          </div>

          {/* Trust Badges */}
          <div className="flex justify-between items-center py-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <FaShieldAlt className="text-emerald-500" /> Child Safe Material
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <FaTruckMoving className="text-primary" /> Fast Delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
