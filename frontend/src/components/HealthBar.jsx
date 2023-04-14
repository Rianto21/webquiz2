import React from 'react';
import { RiHeart2Fill, RiHeart2Line } from 'react-icons/ri';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function HealthBar({ lives = 2, score = 255, soal = 21, language = 0 }) {
  return (
    <div className="flex w-full justify-between px-8 items-center my-2">
      <div className="flex font-medium text-white gap-x-2 items-center text-2xl">
        <IoCheckmarkCircleOutline className="w-10 h-10" />
        <p className="text-white font-medium text-[16px]">{score}</p>
      </div>
      <div className="text-white">
        <p className="font-medium">
          {language == 0 ? `Soal ke-${soal + 1}` : `Question Number ${soal + 1}`}
        </p>
      </div>
      <div className="flex items-center gap-x-2 ">
        {Array(lives)
          .fill(1)
          .map(() => (
            <RiHeart2Fill className="w-8 h-8 fill-white" />
          ))}
        {Array(3 - lives)
          .fill(1)
          .map(() => (
            <RiHeart2Line className="w-8 h-8 fill-white" />
          ))}
      </div>
    </div>
  );
}
