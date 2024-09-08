"use client";

import { useEffect, useState } from "react";

interface SpinnerProps {
  time?: number;
}

export default function Spinner({ time = 1 }: SpinnerProps) {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, time * 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isSpinning && (
        <div
          className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-700"
          style={{
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
            borderLeftColor: "transparent",
          }}
        ></div>
      )}
    </div>
  );
}
