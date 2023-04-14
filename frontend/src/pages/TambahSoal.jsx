import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';
import Warning from '../components/Popup/Warning';
import PasswordTambahSoal from '../components/PasswordTambahSoal';

export default function TambahSoal() {
  const [Scoreboard, setScoreboard] = useState([]);
  const [Language, setLanguange] = useState('');
  const [Checkadmin, setCheckadmin] = useState(false);
  const [Showwarning, setShowwarnig] = useState(false);
  const [Warningmessage, setWarningemessage] = useState({
    title: '',
    message: ''
  });
  const [Data, setData] = useState({
    question: '',
    a: { answer: '', correct: 1 },
    b: { answer: '', correct: 0 }
  });
  const handleBahasa = (e) => {
    // console.log(e.target.value);
    setLanguange(e.target.value);
  };

  const handleQuestion = (e) => {
    if (e.target.name == 'question') {
      setData({ ...Data, question: e.target.value });
    } else if (e.target.name == 'a_answer') {
      setData({ ...Data, a: { ...Data.a, answer: e.target.value } });
    } else if (e.target.name == 'a_correct') {
      setData({ ...Data, a: { ...Data.a, correct: e.target.value } });
    } else if (e.target.name == 'b_answer') {
      setData({ ...Data, b: { ...Data.b, answer: e.target.value } });
    } else if (e.target.name == 'b_correct') {
      setData({ ...Data, b: { ...Data.b, correct: e.target.value } });
    }
  };

  const handleSubmit = (e) => {
    if (Data.question == '' || Data.a.answer == '' || Data.b.answer == '') {
      setWarningemessage({
        title: 'Data Kosong',
        message:
          'Mohon lengkapi seluruh data terkait pertanyaan, dan jangan biarkan ada field kosong'
      });
      setShowwarnig(true);
    }

    if (Language == 'Indonesia') {
      axios
        .post('http://localhost:8000/api/quiz-indonesia', Data)
        .then((res) => {
          console.log(res);
          setWarningemessage({
            title: 'Soal Ditambahkan',
            message: 'Soal telah berhasil ditambahkan kedalam database.'
          });
          setShowwarnig(true);
        })
        .catch((e) => {
          console.log(e);
          setWarningemessage({
            title: 'Terjadi Error',
            message: 'error'
          });
          setShowwarnig(true);
        });
    } else if (Language == 'English') {
      axios
        .post('http://localhost:8000/api/quiz', Data)
        .then((res) => {
          console.log(res);
          setWarningemessage({
            title: 'Soal Ditambahkan',
            message: 'Soal telah berhasil ditambahkan kedalam database.'
          });
          setShowwarnig(true);
        })
        .catch((e) => {
          console.log(e);
          setWarningemessage({
            title: 'Terjadi Error',
            message: 'error'
          });
          setShowwarnig(true);
        });
    } else {
      console.log('broooo');
    }
  };
  useEffect(() => {
    axios.get('http://localhost:8000/api/score').then((res) => {
      setScoreboard(res.data.data);
    });
  }, []);

  // console.log(Language);
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-50 to-amber-300 overflow-y-hidden">
      <NavigationBar Score={Scoreboard} />
      {Checkadmin ? (
        <div className="flex justify-center relative w-full h-full ">
          <div className="absolute w-[30rem] h-[30rem] my-12 rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl overflow-hidden">
            <div className="h-[28rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl items-center flex flex-col">
              <div className=" text-white my-4">
                <h1 className=" text-2xl ">Tambah Soal</h1>
              </div>
              <div className=" flex flex-col self-start px-8 my-2 text-white w-full ">
                <p>Jenis Soal</p>
                <select
                  onChange={(e) => handleBahasa(e)}
                  id="question"
                  className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 ">
                  <option selected> Pilih Jenis Soal </option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="English">English</option>
                </select>
              </div>
              <div className="flex flex-col self-start px-8 my-2 text-white w-full ">
                <p>Pertanyaan</p>
                <input
                  className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 px-1 "
                  name="question"
                  onChange={(e) => handleQuestion(e)}
                  value={Data.question}
                />
              </div>

              {/* Jawaban A */}
              <div className="flex justify-between gap-x-2 w-full px-8">
                <div className="flex flex-col  flex-1 my-2 text-white w-full ">
                  <p>Jawaban</p>
                  <input
                    onChange={(e) => handleQuestion(e)}
                    name="a_answer"
                    value={Data.a.answer}
                    className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 px-1 "
                  />
                </div>
                <div className=" flex flex-col  flex-1 my-2 text-white w-full ">
                  <p>Jawaban Benar</p>
                  <select
                    onChange={(e) => handleQuestion(e)}
                    name="a_correct"
                    value={Data.a.correct}
                    id="question"
                    className={`outline-none rounded-md bg-white/50 py-1 text-neutral-700 
                  ${
                    Data.a.correct == true || Data.a.correct == 'true'
                      ? 'text-emerald-700'
                      : 'text-red-700'
                  }
                  `}>
                    <option disabled> Jawaban Benar </option>
                    <option value={1} className="text-emerald-700">
                      Ya
                    </option>
                    <option value={0} className="text-red-700">
                      Tidak
                    </option>
                  </select>
                </div>
              </div>

              {/* Jawaban B */}
              <div className="flex justify-between gap-x-2 w-full px-8">
                <div className="flex flex-col  flex-1 my-2 text-white w-full ">
                  <p>Jawaban</p>
                  <input
                    onChange={(e) => handleQuestion(e)}
                    name="b_answer"
                    value={Data.b.answer}
                    className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 px-1 "
                  />
                </div>
                <div className=" flex flex-col  flex-1 my-2 text-white w-full ">
                  <p>Jawaban Benar</p>
                  <select
                    onChange={(e) => handleQuestion(e)}
                    name="b_correct"
                    value={Data.b.correct}
                    id="question"
                    className={`outline-none rounded-md bg-white/50 py-1 text-neutral-700 ${
                      Data.b.correct == true || Data.b.correct == 'true'
                        ? 'text-emerald-700'
                        : 'text-red-700'
                    } `}>
                    <option disabled> Jawaban Benar </option>
                    <option value={1} className="text-emerald-700">
                      Ya
                    </option>
                    <option value={0} className="text-red-700">
                      Tidak
                    </option>
                  </select>
                </div>
              </div>
              <div
                onClick={handleSubmit}
                className=" w-[10rem] text-lg text-center py-1 cursor-pointer my-2 rounded-md bg-white/25 hover:bg-white text-white hover:text-amber-500 duration-200">
                Submit
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PasswordTambahSoal
          controller={setCheckadmin}
          showwarning={setShowwarnig}
          warningmessage={setWarningemessage}
        />
      )}

      {Showwarning ? (
        <Warning
          controller={setShowwarnig}
          title={Warningmessage.title}
          message={Warningmessage.message}
        />
      ) : null}
    </div>
  );
}
