import { ReactNode } from "react";
import Button from "./Button";

interface ButtonRenderProps {
  text: string;
  appName: string;
}

export default function Header({ text, appName }: ButtonRenderProps) {
  return (
    <>
      <>
        <div className="text-black">
          <div className="flex tems-center justify-between m-2">
            <div className="text-4xl font-serif p-1 text-cyan-700">
              travander
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <div className="text-xl">Home</div>
                <div className="text-xl">Community</div>
                <div className="text-xl">About Us</div>
              </div>
              <Button appName={appName}>{text}</Button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
