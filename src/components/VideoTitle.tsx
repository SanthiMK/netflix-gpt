import React from "react";

const VideoTitle = (props: { title: string; overview: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-t from-black to-transparent pointer-events-none">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white px-8 py-6 w-full max-w-2xl flex flex-col items-start z-10">
        <h2 className="mb-4 font-bold text-4xl drop-shadow-lg">
          {props.title}
        </h2>
        <p className="mb-6 max-w-2xl text-lg leading-relaxed drop-shadow">
          {props.overview}
        </p>
        <div className="flex gap-4 pointer-events-auto">
          <button className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 rounded font-semibold text-lg hover:bg-opacity-100 transition">
            <span className="text-black text-xl">▶</span>
            <span className="text-black">Play</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-70 rounded font-semibold text-lg hover:bg-opacity-90 transition">
            <span className="text-black text-xl">&#9432;</span>
            <span className="text-black">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
