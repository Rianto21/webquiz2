import React from 'react';

export default function Warning({ title, message, controller }) {
  return (
    <div
      className="w-full top-0 h-screen absolute z-10 bg-black/50 flex justify-center items-center"
      onClick={() => controller(false)}>
      <div className="p-4 w-[20rem] h-[15rem] bg-white rounded-md flex flex-col items-center justify-center gap-4">
        <h3 className="text-neutral-700 font-medium text-xl">{title}</h3>
        <p className="text-neutral-400 text-center">{message}</p>
        <div
          onClick={() => controller(false)}
          className="px-8 py-1 bg-red-700/50  text-white cursor-pointer rounded-md hover:text-red-700 duration-200 hover:bg-neutral-200/75 font-medium">
          Close
        </div>
      </div>
    </div>
  );
}
