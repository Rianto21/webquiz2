import React, { useEffect, useRef, useState } from 'react';
import HealthBar from '../components/HealthBar';
import Countdown from 'react-countdown';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import CompletedQuiz from '../components/CompletedQuiz';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';
import Loading from '../components/Loading';
import Gameover from '../components/Popup/Gameover';
import useSound from 'use-sound';

// Import Suara
import correctsound from '/sound/correct.mp3';
import wrongsound from '/sound/wrong.mp3';
import Starting from '../components/Starting';

export default function QuizPageIndtoEng() {
  // Variable state untuk lagu
  const correct = () => {
    const sound = new Audio(correctsound);
    sound.volume = 0.5;
    sound.play();
  };
  const wrong = () => {
    const sound = new Audio(wrongsound);
    sound.volume = 0.5;
    sound.play();
  };
  const [bgm, { stop }] = useSound('/sound/quizbgm.mp3', { volume: 0.1 });

  const [Listscore, setListscore] = useState([{ nama: '', score: 0, language: '' }]);

  // Variable state untuk menyimpan data apakah data masih di load atau belum
  const [isLoading, setLoading] = useState(true);

  // Variable untuk menyimpan kebenaran jawaban
  const [Answer, setAnswer] = useState(null);

  // Variable untuk memulai quiz
  const [Start, setStart] = useState(false);

  // Variable untuk mengecek apakah soal sudah terjawab atau belum
  const [Finish, setFinish] = useState(false);

  // Variable untuk mentrack nomor soal
  const [Soal, setSoal] = useState(0);

  // Variable untuk mencatat sisa nyawa yang dimiliki oleh pengguna
  const [Lives, setLives] = useState(3);

  // Variable untuk menyimpan Skor
  const [Score, setScore] = useState(0);

  // Variable untuk mengecek apakah soal sudah sampai terakhir atau belum
  const [Completed, setCompleted] = useState(false);

  // Variable fungsi untuk mereturn tag paragraf apabila waktu untuk menjawab soal telah habis
  const Timeup = () => <p className="text-xl font-medium text-white my-7">Your Time is up!</p>;

  // Fungsi miik Countdown, untuk menampilkan waktu hitung mundur soal, dan menampilkan fungsi Timeup bila sudah habis
  const renderer = ({ seconds, completed }) => {
    // Jika Countdown / waktu soal habis
    if (completed) {
      // setSoal(Soal + 1);
      setLives(Lives - 1);
      setAnswer(2);
      setFinish(true);
      return <Timeup className=" my-7 " />;
    }

    // Jika belum selesai maka ditampilkan sisa waktu berupa detikannya
    else {
      return (
        <div className="flex flex-col my-6">
          <p className="text-lg text-white font-light my-0">Countdown!</p>
          <p className="text-4xl text-white font-semibold my-0">{seconds}</p>
        </div>
      );
    }
  };

  // Fungsi untuk mengecek apakah soal yang terakhir sudah terjawab
  const isLastSoal = () => {
    if (Soal == question.length - 1) {
      console.log('terprint');
      setCompleted(true);
      return true;
    } else {
      return false;
    }
  };

  // Untuk menyimpan data Soal yang akan ditampilkan
  const [question, setquestion] = useState([]);

  // Fungsi untuk mengecek apakah jawaban yang diberikan benar atau salah
  const pilihJawaban = (answer) => {
    // console.log(answer);

    // jika soal yang dipilih adalah benar
    if (answer == 1) {
      setAnswer(1); // Mengubah Answer menjadi 0 yang bertujuan untuk menampilkan pesan benar
      setFinish(true); // Mengubah Finish menjadi true sehingga tombol untuk next ke soal berikutnya dapat ditampilkan
      setScore(Score + 10); // Menambahkan Score pengguna
      correct();
    } else {
      setAnswer(0); // Mengubah Answer menjadi 0 yang bertujuan untuk menampilkan pesan benar
      setFinish(true); // Mengubah Finish menjadi true sehingga tombol untuk next ke soal berikutnya dapat ditampilkan
      setLives(Lives - 1); // Mengurangi nyawa/kesempatan pengguna
      wrong();
    }
  };

  const nextSoal = () => {
    const selesai = isLastSoal();
    console.log(selesai);
    if (selesai) {
      return;
    } else {
      setSoal(Soal + 1); // Mentrack nomor soal menjadi +1
      setAnswer(null);
      setFinish(false);
    }
  };

  // fungsi untuk memulai permainan
  const Playit = () => {
    bgm();
    setStart(true);
  };

  // console.log(question.length, Soal);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/score').then((res) => {
      setListscore(res.data.data);
    });

    // Mengambil data dari dari backend menggunakan axios
    axios.get('http://localhost:8000/api/quiz').then((res) => {
      setquestion(res.data.data);
    });

    setLoading(false);
    return () => {
      stop();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-tr  from-rose-50 to-amber-300 w-[100vw] h-full">
        <NavigationBar />
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-tr  from-rose-50 to-amber-300 w-[100vw] h-full">
      <NavigationBar Score={Listscore} />
      <div className=" flex justify-center relative items-center w-full h-[90vh]">
        <div className=" absolute w-[35rem] h-[35rem] rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl overflow-hidden ">
          {Completed ? (
            <CompletedQuiz score={Score} languange="English" />
          ) : Lives == 0 ? (
            <Gameover score={Score} setCompleted={setCompleted} audioStop={stop} />
          ) : !Start ? (
            <Starting playit={Playit} />
          ) : (
            <div className="h-[33rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl">
              <HealthBar soal={Soal} score={Score} lives={Lives} language={1} />
              <div className="my-8 w-[35rem] h-[25rem] text-xl text-white text-center flex flex-col items-center ">
                <div className="px-4 py-1 bg-teal-600 rounded-full">
                  <h1>Translate it to Indonesia</h1>
                </div>
                <p className="text-3xl font-thin my-12">{question[Soal].question}</p>
                <div className="flex items-center justify-center gap-x-2 my-4">
                  <div
                    onClick={() => {
                      if (!Finish) {
                        pilihJawaban(question[Soal].a_correct);
                      }
                    }}
                    className={`  px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] ${
                      !Finish
                        ? ' hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer'
                        : null
                    } `}>
                    {question[Soal].a_answer}
                  </div>
                  <div
                    onClick={() => {
                      if (!Finish) {
                        pilihJawaban(question[Soal].b_correct);
                      }
                    }}
                    className={` px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] ${
                      !Finish
                        ? ' hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer'
                        : null
                    }`}>
                    {question[Soal].b_answer}
                  </div>
                </div>
                {Finish ? null : (
                  <div className=" flex-1 w-[15rem] h-[5rem] flex items-center justify-center ${}">
                    <Countdown date={Date.now() + 15000} renderer={renderer} />
                  </div>
                )}
                {Answer == 1 ? (
                  <div className=" flex-1  text-white flex flex-col items-center w-[15rem] justify-center ">
                    <AiOutlineCheckCircle className="w-12 h-12 text-emerald-600 " />
                    <p className=" text-white text-xl font-normal ">Correct Answer!</p>
                  </div>
                ) : Answer == 0 ? (
                  <div className=" flex-1  text-white flex flex-col items-center w-[15rem] justify-center ">
                    <AiOutlineCheckCircle className="w-12 h-12 text-red-600 " />
                    <p className=" text-white text-xl font-normal ">Wrong Answer!</p>
                  </div>
                ) : Answer == 2 ? (
                  <Timeup className=" my-7 " />
                ) : null}
                {Finish ? (
                  <div
                    onClick={() => nextSoal()}
                    className="bg-teal-600 hover:bg-teal-400 rounded-full cursor-pointer duration-200 px-8 py-1">
                    <p className="text-white">Next</p>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
