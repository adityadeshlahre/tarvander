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
  return (
    <>
      <>
        <div className="text-black">
          <div className="flex tems-center justify-between m-2">
            <div className="text-4xl font-serif p-1 text-cyan-700 hover:underline">
              travander
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <div className="text-xl hover:underline">Home</div>
                <div className="text-xl hover:underline">Community</div>
                <div className="text-xl hover:underline">About Us</div>
              </div>
              <Button appName={appName} notiTitle={notiTitle}>
                {text}
              </Button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
