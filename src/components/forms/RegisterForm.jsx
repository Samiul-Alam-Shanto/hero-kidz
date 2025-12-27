"use client";
import { FcGoogle } from "react-icons/fc";
import {
  LuMail,
  LuLock,
  LuUser,
  LuEye,
  LuEyeOff,
  LuArrowRight,
} from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
const RegisterForm = ({ onToggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, password };
    const result = await postUser(formData);
    if (result.acknowledged) {
      alert("Successful. Welcome");
      router.push(callBack);
    }
    // Add your registration logic here (e.g., API call)
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h1 className="text-4xl font-black tracking-tight text-slate-900 text-center mb-2">
        Start your journey.
      </h1>
      <p className="text-slate-500 font-medium text-center mb-8">
        Join 10k+ creators today.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input w-full pl-12 h-14 bg-white/50 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
          />
        </div>

        <div className="relative group">
          <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input w-full pl-12 h-14 bg-white/50 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
          />
        </div>

        <div className="relative group">
          <LuLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input w-full px-12 h-14 bg-white/50 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="btn btn-neutral w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white border-none text-base font-bold gap-2 group shadow-lg"
        >
          Create Account
          <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <div className="mt-8 text-center">
        <button
          onClick={onToggle}
          className="text-slate-500 font-medium hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          Already a member?
          <span className="font-bold text-slate-900 underline underline-offset-4">
            Log in
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
