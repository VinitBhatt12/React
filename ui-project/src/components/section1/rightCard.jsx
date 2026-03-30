import { ArrowRight } from "lucide-react";

function RightCard(props) {
  return (
    <div className="h-full w-1/3 rounded-4xl overflow-hidden relative shrink-0">
      <img
        src={props.img}
        className="h-full w-full object-cover"
      />
      <div className="absolute  h-full w-full top-0 p-5 flex flex-col justify-between text-white">
        <h2 className="bg-white rounded-full  h-7 w-7 flex items-center justify-center text-black">
          {props.id+1}
        </h2>
        <div className="flex flex-col gap-10 text-sm font-bold leading-normal">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil
            enim possimus debitis distinctio.
          </p>
          <div className="flex justify-around ">
            <button className="bg-blue-400 px-3 py-2 rounded-full">
              {props.tag}
            </button>
            <button className="bg-blue-400 px-3 py-2 rounded-full">
              <ArrowRight size={16} strokeWidth={2.75} absoluteStrokeWidth />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCard;
