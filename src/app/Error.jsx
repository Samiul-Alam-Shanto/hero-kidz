"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaTools, FaUndoAlt, FaHome } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an analytics service
    // console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8 relative">
        {/* --- Visual Illustration Area --- */}
        <div className="relative inline-block">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-yellow-200 blur-[80px] rounded-full opacity-50 animate-pulse" />

          {/* The "Broken" Engineering Scene */}
          <div className="relative flex items-center justify-center space-x-4">
            <div className="animate-bounce">
              <FaTools className="text-7xl text-primary rotate-12" />
            </div>
            <HiOutlineEmojiSad className="text-8xl text-slate-300" />
            <div className="animate-[bounce_1s_infinite_200ms]">
              <div className="h-16 w-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg rotate-[-15deg]">
                <span className="text-white font-bold text-2xl">?</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Error Content --- */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Oops! The tools got stuck.
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
            Even the best engineers have a little trouble sometimes. Let’s try
            to fix this together!
          </p>

          {/* Optional: Show technical hint only in development or as a tiny code block */}
          <div className="py-2 px-4 bg-slate-50 rounded-lg inline-block border border-slate-100 mt-4">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Error Log: {error?.message || "Internal Mechanical Failure"}
            </p>
          </div>
        </div>

        {/* --- Recovery Actions --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Reset/Try Again Button */}
          <button
            onClick={() => reset()}
            className="btn btn-primary btn-lg rounded-2xl px-8 shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all gap-2 group"
          >
            <FaUndoAlt className="group-hover:rotate-[-45deg] transition-transform" />
            Try to Fix It
          </button>

          {/* Go Home Button */}
          <Link
            href="/"
            className="btn btn-ghost btn-lg rounded-2xl px-8 gap-2 text-slate-600 hover:bg-slate-100"
          >
            <FaHome />
            Back to Workshop
          </Link>
        </div>

        {/* --- Decorative elements --- */}
        <div className="hidden lg:block absolute -top-10 -left-10 h-20 w-20 border-4 border-slate-100 rounded-full" />
        <div className="hidden lg:block absolute bottom-0 -right-10 h-12 w-12 bg-yellow-100 rounded-xl rotate-45" />
      </div>
    </div>
  );
}
