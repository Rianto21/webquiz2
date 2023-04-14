import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Gameover({ score, setCompleted, audioStop }) {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  audioStop();
  return (
    <div className="w-full h-full absolute bg-black/25 flex justify-center items-center ">
      <div className=" flex flex-col rounded-md bg-white p-8 justify-center items-center">
        <p className="text-neutral-500">Score: {score}</p>
        <p className="text-neutral-700 font-comforta text-5xl my-4">GAME OVER</p>
        <div className="flex my-2 gap-x-2">
          <div
            onClick={refreshPage}
            className="px-4 py-1 bg-neutral-200/50 rounded-md hover:text-rose-600 cursor-pointer font-comforta hover:bg-neutral-400/50 duration-200">
            Play Again
          </div>
          <div
            onClick={() => setCompleted(true)}
            className="px-4 py-1 bg-neutral-200/50 rounded-md hover:text-rose-600 cursor-pointer font-comforta hover:bg-neutral-400/50 duration-200">
            Submit Score
          </div>
        </div>
      </div>
    </div>
  );
}
