interface NTravellerProps {
  travellerCount: number;
}

export default function NTraveller({ travellerCount }: NTravellerProps) {
  return (
    <>
      {Array.from({ length: travellerCount }).map((_, index) => (
        <div key={index} className="text-slate-900">
          <div className="text-sm flex flex-col items-center">
            <span className="text-2xl">{index + 1} Traveller</span>
            <div className="flex space-x-4">
              <div>
                <div>Name</div>
                <div>
                  <input className="border rounded p-1"></input>
                </div>
              </div>
              <div>
                <div>Age</div>
                <div>
                  <input className="border rounded p-1"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
