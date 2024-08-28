"use client";
interface TravellerProp {
  groupSize: number;
  noOfTraveller: number;
}

export default function Traveller({ groupSize, noOfTraveller }: TravellerProp) {
  return (
    <>
      <div className="text-slate-900">
        <div className="text-4xl flex justify-center items-center">
          Group Size: {groupSize} Traveller
        </div>
        <div className="text-lg flex justify-center items-center space-x-2">
          <span>Number of Traveller</span>
          <span>
            <button
              onClick={() => {
                console.log("plus");
              }}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </span>
          <span>{noOfTraveller}</span>
          <span>
            <button
              onClick={() => {
                console.log("minus");
              }}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="text-sm flex flex-col items-center">
          <span className="text-2xl">
            {/* need to render nth(from number of traveller) */}
            {/* n */} Traveller
          </span>
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
          <br />
          <div className="flex space-x-4">
            <div>
              <div>Contact</div>
              <div>
                <input className="border rounded p-1"></input>
              </div>
            </div>
            <div>
              <div>Email</div>
              <div>
                <input className="border rounded p-1"></input>
              </div>
            </div>
          </div>
          <br />
          <span className="text-2xl">
            {/* need to render nth(from number of traveller) */}
            {/* n */} Traveller
          </span>
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
    </>
  );
}
