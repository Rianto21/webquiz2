import React from 'react';
import { Link } from 'react-router-dom';

export default function LeaderboardBar({ list = [{ nama: '', score: 0 }] }) {
  return (
    <div className="absolute w-64 h-[22rem] top-20 right-6 bg-white rounded-lg z-20 ">
      {[...Array(10)].map((e, i) => (
        <div
          className={`flex items-center h-8 text-neutral-900 text-lg gap-x-2 px-2 rounded-md text-ellipsis ${
            i % 2 == 0 ? 'bg-neutral-200' : 'bg-neutral-100'
          } `}>
          <p className=" font-bold text-amber-400 ">{i + 1}</p>
          <p className=" font-light text-neutral-600 w-24 truncate flex-1 ">
            {list[i] ? list[i].nama : ''}
          </p>
          <p className=" w-[3rem] ">{list[i] ? list[i].score : ''}</p>
        </div>
      ))}
      <Link
        to={'/scoreboard'}
        className="text-rose-400 duration-200 text-lg text-center w-[5rem] mx-auto  cursor-pointer font-comforta font-bold">
        <p className="hover:text-rose-600 ">View All</p>
      </Link>
      {/* {list.map((e, i) => (
        <div
          className={`flex items-center h-8 text-neutral-900 text-lg gap-x-2 px-2 rounded-md ${
            i % 2 == 0 ? 'bg-neutral-200' : 'bg-neutral-100'
          } `}>
          <p className=" font-bold text-amber-400 ">{i + 1}</p>
          <p className=" font-light text-neutral-600 w-24 ">{e.name}</p>
          <p className=" ">{e.score}</p>
        </div>
      ))} */}
    </div>
  );
}
