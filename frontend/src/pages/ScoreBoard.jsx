import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';
import Moment from 'moment';

export default function ScoreBoard() {
  const [Listscore, setListscore] = useState([{ nama: '', score: 0, language: '' }]);
  const [Show, setShow] = useState({ start: 0, end: 10 });

  const nextSlide = () => {
    if (Show.end < Listscore.length) {
      setShow({ start: Show.start + 10, end: Show.end + 10 });
    }
  };
  const prevSlide = () => {
    if (Show.start != 0) {
      setShow({ start: Show.start - 10, end: Show.end - 10 });
    }
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/score').then((res) => {
      console.log(res.data.data);
      setListscore(res.data.data);
    });
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-tr  from-rose-50 to-amber-300">
      <NavigationBar Score={Listscore} />
      <div className="w-full mt-8 flex flex-col items-center justify-center">
        <h1 className="text-rose-600 font-bebasneue text-3xl">SCOREBOARD</h1>
        <table className="table-auto w-[95%] sm:w-[40rem] bg-white/50 text-rose-600 font-comforta overflow-hidden">
          <thead>
            <tr className=" h-8 ">
              <th className="border border-rose-600 ">Nomor</th>
              <th className="border border-rose-600 ">Nama</th>
              <th className="border border-rose-600 ">Score</th>
              <th className="border border-rose-600 ">Language</th>
              <th className="hidden sm:table-cell border border-rose-600 ">Waktu Submit</th>
            </tr>
          </thead>
          <tbody>
            {Listscore.slice(Show.start, Show.end).map((e, i) => (
              // console.log(e);
              <tr className="h-8">
                <td className="border border-rose-600 text-center">{i + 1 + Show.start}</td>
                <td className="border border-rose-600 text-center truncate text-ellipsis max-w-[10rem] px-2">
                  {e.nama}
                </td>
                <td className="border border-rose-600 text-center">{e.score}</td>
                <td className="border border-rose-600 text-center">{e.language}</td>
                <td className="hidden sm:table-cell border border-rose-600 text-center">
                  {Moment(e.updated_at).format('yyyy-MM-DD hh:mm')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex my-4 rounded-full bg-white/50 overflow-hidden">
          <div
            onClick={prevSlide}
            className="hover:bg-rose-600 duration-200 font-comforta font-semibold px-4 py-1 cursor-pointer text-rose-600 hover:text-white flex-1">
            prev
          </div>
          <div
            onClick={nextSlide}
            className="hover:bg-rose-600 duration-200 font-comforta font-semibold px-4 py-1 cursor-pointer text-rose-600 hover:text-white flex-1">
            next
          </div>
        </div>
      </div>
    </div>
  );
}
