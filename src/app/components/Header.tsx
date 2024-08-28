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
        <div className="bg-slate-200 text-black">
          <div className="flex tems-center justify-between m-6">
            <div className="text-4xl font-serif p-1">travander</div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <div className="text-2xl">Home</div>
                <div className="text-2xl">Community</div>
                <div className="text-2xl">About Us</div>
              </div>
              <Button appName={appName}>{text}</Button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
