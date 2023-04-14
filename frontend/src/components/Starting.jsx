import React from 'react';

export default function Starting({ playit }) {
  return (
    <div className="h-[33rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl flex flex-col items-center justify-center">
      <p className="text-white font-comforta text-3xl my-2">Are You Ready?</p>
      <div
        onClick={() => playit()}
        className="px-8 py-2 bg-white/25 duration-200 rounded-md text-xl font-comforta text-neutral-700 hover:bg-white/75 my-4 cursor-pointer">
        Start!
      </div>
    </div>
  );
}
