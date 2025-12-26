"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md z-10"
    >
      <div className="card bg-white/70 backdrop-blur-2xl shadow-glass border border-white/40 rounded-3xl overflow-hidden">
        <div className="card-body p-8 lg:p-10">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <LoginForm key="login" onToggle={() => setIsLogin(false)} />
            ) : (
              <RegisterForm key="register" onToggle={() => setIsLogin(true)} />
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-8 text-center text-slate-400 text-sm font-medium">
        Protected by reCAPTCHA and subject to our{" "}
        <span className="underline cursor-pointer">Terms</span>.
      </p>
    </motion.div>
  );
};

export default AuthForm;
