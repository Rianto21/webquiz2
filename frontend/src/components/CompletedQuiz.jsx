import React, { useState } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { AiOutlineCheckCircle, AiOutlineReload } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CompletedQuiz({ score, languange }) {
  const [Playername, setPlayername] = useState();
  const [Submited, setSubmited] = useState(false);
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  const submitScore = () => {
    if (!Submited) {
      axios.post('http://localhost:8000/api/score', {
        nama: Playername,
        score: score,
        language: languange
      });
    } else {
      return;
    }

    setSubmited(true);
  };
  return (
    <div className="h-[33rem] bg-gradient-to-b flex flex-col items-center justify-center from-rose-500/60 to-amber-500/60 rounded-2xl">
      <BsPatchCheckFill className="w-12 h-12 text-emerald-400 " />
      <h2 className="text-white font-comforta my-2">You are done!</h2>
      <h2 className="text-2xl text-center w-[25rem] text-white font-semibold font-comforta">
        Congratulations You Have Completed This Quiz
      </h2>
      <div className="flex items-center gap-x-2">
        <AiOutlineCheckCircle className="w-8 h-8 text-white" />
        <p className="text-white text-lg">Score: {score}</p>
      </div>
      {Submited ? (
        <div className="flex flex-col">
          <div className=" flex ">
            <p>Your Score Has Been Submited</p>
          </div>
          <div
            onClick={refreshPage}
            className="flex items-center cursor-pointer bg-white/20 rounded-md px-4 py-1 my-4 gap-x-2 text-white hover:text-rose-600 duration-200">
            <AiOutlineReload className="w-8 h-8" />
            <p className="text-2xl font-comforta ">Play Again?</p>
          </div>
        </div>
      ) : (
        <div className="text-white flex flex-col items-start w-[20rem] my-4">
          <p className="text-sm px-2">Input Your Name</p>
          <input
            maxLength={30}
            className="bg-transparent outline-none border rounded-md px-2 py-1 w-full placeholder:text-white/60"
            placeholder="Player Name"
            onChange={(e) => setPlayername(e.target.value)}
          />
        </div>
      )}

      <div
        onClick={submitScore}
        className={` rounded-md text-white text-xl font-comforta px-4 py-1 ${
          !Submited
            ? ' bg-pink-800 cursor-pointer hover:bg-pink-700 duration-200 hover:shadow-md'
            : 'cursor-default bg-neutral-500 duration-500'
        }`}>
        SUBMIT SCORE
      </div>
    </div>
  );
}
