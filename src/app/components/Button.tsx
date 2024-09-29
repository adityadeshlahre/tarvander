"use client";

import { ReactNode } from "react";
import Swal from "sweetalert2";

interface ButtonProps {
  children: ReactNode;
  appName: string;
  notiTitle: string;
  onClickFucn?: () => Promise<void>;
}

export default function Button({
  children,
  appName,
  notiTitle,
  onClickFucn,
}: ButtonProps) {
  const handleClick = async () => {
    if (onClickFucn) {
      await onClickFucn();
      Swal.fire({
        title: notiTitle,
        text: appName,
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: `${notiTitle}`,
        text: `${appName}`,
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <button
      className="bg-black text-neutral-200 font-bold shadow-sm shadow-black rounded-full p-2 pr-8 pl-8 my-2"
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
}
