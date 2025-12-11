import { PiHeartDuotone } from "react-icons/pi";

function Card({ home }) {
  if (!home) return null;

  const images = [home.image1, home.image2, home.image3].filter(Boolean);

  return (
    <div className="w-[220px] h-[270px] flex items-start justify-start flex-col rounded-xl cursor-pointer">
      <div className="w-[100%] h-[60%] bg-[#2e2d2d] rounded-lg overflow-hidden flex relative">
        <div className="z-1 absolute justify-between items-center flex p-2 w-full">
          <span className="bg-gray-300 rounded-2xl border-1 border-gray-500 p-1 text-xs px-3 font-semibold">
            Guest favourite
          </span>
          <PiHeartDuotone className="text-2xl hover:scale-105" />
        </div>
        {images.length > 0 ? (
          images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`img${i + 1}`}
              className="w-[100%] flex-shrink-0 object-cover"
            />
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No image
          </div>
        )}
      </div>
      <div className="w-[100%] h-[40%] py-[18px] flex flex-col gap-[2px]">
        <span className="w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434]">
          {home.title}
        </span>
        <span className="text-[15px] w-[80%] text-ellipsis overflow-hidden text-nowrap text-slate-600">
          {home.city} · {home.ratings}
        </span>
        <span className="text-[16px] font-semibold text-[#986b6b]">{`${home.rent}/day`}</span>
      </div>
    </div>
  );
}

export default Card;
