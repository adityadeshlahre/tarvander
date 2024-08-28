"use client";

import { ReactNode } from "react";
import Swal from "sweetalert2";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  notiTitle: string;
}

export default function Button({
  children,
  className,
  appName,
  notiTitle,
}: ButtonProps) {
  const onClickFucn = () => {
    Swal.fire({
      // title: "Booking is completed successfully!",
      title: `${notiTitle}`,
      // text: `${}\n ${}\n ${}\n ${}`,
      text: `${appName}`,
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  return (
    <button
      className={`bg-white text-neutral-900 shadow-sm shadow-black rounded-full p-2 pr-8 pl-8 m-2 ${className}`}
      onClick={
        // () => alert(`Hello from your ${appName} app!`)
        onClickFucn
      }
    >
      {children}
    </button>
  );
}
