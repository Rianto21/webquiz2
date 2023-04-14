import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Deskripsi from './Deskripsi';
import Tutorial from './Tutorial';

export default function About({ controller }) {
  const [Showoption, setShowoption] = useState(0);
  return (
    <div className="flex flex-col z-10 items-center justify-center w-full h-screen absolute bg-black/50">
      <div className="flex w-[40rem] px-4 items-center justify-start gap-x-2">
        <div
          onClick={() => setShowoption(0)}
          className={`px-4  cursor-pointer py-1 rounded-t-md  duration-200  font-comforta text-xl ${
            Showoption == 0
              ? 'text-amber-500 bg-white'
              : 'hover:bg-white text-white  bg-white/50 hover:text-amber-500'
          }`}>
          Tentang
        </div>
        <div
          onClick={() => setShowoption(1)}
          className={`px-4  cursor-pointer py-1 rounded-t-md  duration-200  font-comforta text-xl ${
            Showoption == 1
              ? 'text-amber-500 bg-white'
              : 'hover:bg-white text-white bg-white/50 hover:text-amber-500'
          }`}>
          Cara Main
        </div>
      </div>
      <div className="flex flex-col w-[40rem] bg-gradient-to-tr from-amber-500/75 to-rose-700/75 rounded-lg h-[25rem] relative">
        <div
          onClick={() => controller(false)}
          className="top-2 right-2 absolute hover:bg-white/25 rounded-md duration-200">
          <RxCross2 className="text-white w-8 h-8 cursor-pointer " />
        </div>
        {Showoption == 0 ? <Deskripsi /> : <Tutorial />}
      </div>
    </div>
  );
}
