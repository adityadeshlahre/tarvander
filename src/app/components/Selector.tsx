import { ChangeEvent } from "react";

interface SelectorItem {
  name: string;
  price: number;
  dateTime: string;
}

interface SelectorProps {
  startingOptions: SelectorItem[];
  endingOptions: SelectorItem[];
  selectedStarting: SelectorItem;
  selectedEnding: SelectorItem;
  onStartingChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onEndingChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Selector({
  startingOptions,
  endingOptions,
  selectedStarting,
  selectedEnding,
  onStartingChange,
  onEndingChange,
}: SelectorProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center m-2 p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center text-slate-800 rounded-lg shadow-lg p-4 w-full md:w-3/5 space-y-4">
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <div className="flex flex-col w-full md:w-full">
              <div className="flex flex-row w-full space-y-2">
                <div className="mb-2 font-bold">Start Point:</div>
                <select
                  className="border rounded p-2 bg-inherit"
                  value={selectedStarting.name}
                  onChange={onStartingChange}
                >
                  {startingOptions.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} - ${item.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="m-2">
                <div>
                  Date & Time:{" "}
                  {new Date(selectedStarting.dateTime).toLocaleString()}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-full">
              <div className="flex flex-row w-full space-y-2">
                <div className="mb-2 font-bold">End Point:</div>
                <select
                  className="border rounded p-2 bg-inherit"
                  value={selectedEnding.name}
                  onChange={onEndingChange}
                >
                  {endingOptions.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} - ${item.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="m-2">
                <div>
                  Date & Time:{" "}
                  {new Date(selectedEnding.dateTime).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-neutral-800 text-center md:ml-4 mt-4 md:mt-0 w-full md:w-2/5 space-y-2">
          <span>#8394617</span>
          <span>Camchatak, Russia</span>
        </div>
      </div>
    </>
  );
}
