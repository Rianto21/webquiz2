import React from 'react';
import { Link } from 'react-router-dom';

export default function SelectLanguange({ controller }) {
  return (
    <div
      onClick={() => controller(false)}
      className="z-10 bg-black/50 w-full h-screen relative flex items-center justify-center">
      <div className="absolute text-white w-[20rem] h-[10rem] gap-y-4 rounded-lg bg-white items-center justify-center flex flex-col">
        <p className="text-2xl text-neutral-700 ">Pilih Mode Soal</p>
        <div className="flex font-comforta gap-x-2 mx-4">
          <Link
            to={'/quiz/indonesia-english'}
            className="bg-rose-600/50 duration-200 cursor-pointer px-4 py-1 hover:bg-rose-600/75 rounded-md text-center">
            Indonesia {'->'} English
          </Link>
          <Link
            to={'/quiz/english-indonesia'}
            className="bg-rose-600/50 duration-200 cursor-pointer px-4 py-1 hover:bg-rose-600/75 rounded-md text-center">
            English {'->'} Indonesia
          </Link>
        </div>
      </div>
    </div>
  );
}
