"use client";

import { useNavigate } from "../hooks/useNavigate";
import Button from "./Button";

interface ButtonRenderProps {
  text: string;
  appName: string;
  notiTitle: string;
}

export default function Header({
  text,
  appName,
  notiTitle,
}: ButtonRenderProps) {
  const navigate = useNavigate();
  const onClickFucn = () => {
    navigate("/signup");
  };
  const router = useNavigate();
  return (
    <>
      <div className="text-black">
        <div className="flex flex-col sm:flex-row items-center justify-between m-2 space-y-4 sm:space-y-0">
          <div
            onClick={() => {
              router("/");
            }}
            className="cursor-pointer text-3xl sm:text-4xl font-serif p-1 text-cyan-700 hover:underline"
          >
            tarvander
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 text-lg sm:text-xl">
              <div className="text-xl hover:underline">Home</div>
              <div className="text-xl hover:underline">Community</div>
              <div className="text-xl hover:underline">About Us</div>
            </div>
            <Button
              appName={appName}
              notiTitle={notiTitle}
              onClickFucn={onClickFucn}
            >
              {text}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
