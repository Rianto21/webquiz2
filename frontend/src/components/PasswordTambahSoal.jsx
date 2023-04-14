import React, { useState } from 'react';

export default function PasswordTambahSoal({ controller, showwarning, warningmessage }) {
  const [Password, setPassword] = useState('');
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (Password == 'dika123') {
      controller(true);
    } else {
      warningmessage({
        title: 'Password Salah',
        message:
          'Anda tidak bisa menambahkan soal kecuali memiliki password / kata kunci yang benar'
      });
      showwarning(true);
    }
  };
  return (
    <div className="flex justify-center relative w-full h-full ">
      <div className="absolute w-[30rem] h-[30rem] my-12 rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl overflow-hidden">
        <div className="h-[28rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl items-center justify-center flex flex-col">
          <div className="flex flex-col items-center text-white text-lg font-bebasneue">
            <p>Masukan Password</p>
            <input
              onChange={(e) => handleChange(e)}
              value={Password}
              type="password"
              className="outline-none py-1 px-1 rounded-md bg-white/75 text-neutral-700 font-comforta text-lg"
            />
            <div
              onClick={handleSubmit}
              className="px-8 py-1 rounded-md bg-white/25 hover:bg-white text-white hover:text-amber-500 duration-200 cursor-pointer my-4 text-xl">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
