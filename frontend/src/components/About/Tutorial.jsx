import React from 'react';

export default function Tutorial() {
  return (
    <div className="text-white text-justify text-sm m-4 flex flex-col justify-center">
      <h2 className="text-center font-comforta font-semibold text-2xl my-2">
        Petunjuk Permainan!!!{' '}
      </h2>
      <p>
        Aplikasi ini memiliki pilihan dengan 2 mode soal antara Bahasa inggris dan Bahasa indonesia
        yang bisa dipilih saat akan memulai, Soal yang diberikan aplikasi berjumlah total 30 soal,
        Saat permainan dimulai user(pengguna) diberikan batas 3 nyawa dan waktu untuk mengerjakan
        soal selama 15 detik, Aplikasi ini memiliki 2 pilihan opsi pilihan jawaban saat permainan
        dimulai, User(pengguna) bisa memilih satu opsi jawaban yang menurutnya paling benar, Jika
        jawaban benar maka user(pengguna) akan mendapat 10 point dari satu soal sementara itu jika
        user(pengguna) memilih jawaban yang salah atau kehabisan waktu maka nyawa akan dikurangi 1
        setiap jawaban salah atau kehabisan waktu untuk menjawab, jika nyawa user(pengguna) habis
        sebelum mencapai soal ke 30 atau habis diawal maka permainan akan otomatis berhenti dan
        aplikasi akan memberikan poin bedasarkan soal yang dijawab dengan benar. Setelah permainan
        selesai user(pengguna) bisa menyimpan skor poin yang didapatkan selama permainan dengan
        memasukan nama kedalam leaderboard. Selamat Mencoba!!!!
      </p>
    </div>
  );
}
