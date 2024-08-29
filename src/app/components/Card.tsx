interface ImageProp {
  img: string;
  main: string;
  desc: string;
  date: string;
  by: string;
  timeLine: string;
  price: string;
}

import { useLike } from "../hooks/useLike";
import { useNavigate } from "../hooks/useNavigate";

export default function Card({
  img,
  main,
  desc,
  date,
  by,
  timeLine,
  price,
}: ImageProp) {
  const navigate = useNavigate();
  const like = useLike();

  return (
    <>
      <div
        onClick={() => {
          navigate("/form");
        }}
        role="button"
        className="cursor-pointer max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative p-2 "
      >
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={img}
          alt="Snow Forest"
        />
        <div className="p-4">
          <h3 className="text-gray-800 text-xl font-semibold mb-2">{main}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
          <div className="mt-4">
            <div className="text-sm text-gray-500">
              Start Date: <span className="text-black">{date}</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">{by}</div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-gray-700 text-sm">{timeLine}</div>
            <div className="text-black text-lg font-semibold">$ {price}</div>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            like();
          }}
          className="absolute top-44 right-2 bg-white p-2 rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hover:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
