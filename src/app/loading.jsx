"use client";
import { FaTools } from "react-icons/fa";

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/60 backdrop-blur-xl transition-all duration-500">
      <div className="relative flex flex-col items-center">
        {/* The "Mechanical" Orbital Rings */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ring */}
          <div className="h-24 w-24 rounded-full border-t-2 border-r-2 border-primary animate-spin" />

          {/* Middle Ring (Reverse) */}
          <div className="absolute h-16 w-16 rounded-full border-b-2 border-l-2 border-secondary animate-[spin_1.5s_linear_infinite_reverse]" />

          {/* Center Icon */}
          <div className="absolute flex items-center justify-center h-10 w-10 bg-primary rounded-xl shadow-lg shadow-primary/40 text-white animate-pulse">
            <FaTools className="text-xl" />
          </div>
        </div>

        {/* Textual Feedback */}
        <div className="mt-8 text-center space-y-2">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight uppercase italic">
            Kidz Fun
          </h2>
          <div className="flex items-center justify-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce"></span>
          </div>
        </div>

        {/* Subtle Progress Bar at the bottom of the loader */}
        <div className="absolute bottom-[-40px] w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-[loading_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
            left: 0%;
          }
          50% {
            width: 100%;
            left: 0%;
          }
          100% {
            width: 0%;
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalLoader;
