import React from "react";

const LoaderOverlay: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-300 opacity-95 flex items-center justify-center">
      <div className="flex items-end">
        <div className="text-black font-mono text-2xl font-bold">
          Proccessing
        </div>
        <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s] mb-[6px] ml-1"></div>
        <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s] mb-[6px] ml-1"></div>
        <div className="h-2 w-2 bg-black rounded-full animate-bounce mb-[6px] ml-1"></div>
      </div>
    </div>
  );
};

export default LoaderOverlay;
