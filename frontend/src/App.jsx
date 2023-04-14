import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import QuizPageIndtoEng from './pages/QuizPageIndtoEng';
import QuizPageEngtoInd from './pages/QuizPageEngtoInd';
import ScoreBoard from './pages/ScoreBoard';
import TambahSoal from './pages/TambahSoal';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scoreboard" element={<ScoreBoard />} />
        <Route path="/tambah-soal" element={<TambahSoal />} />
        <Route path="/quiz/indonesia-english" element={<QuizPageIndtoEng />} />
        <Route path="/quiz/english-indonesia" element={<QuizPageEngtoInd />} />
      </Routes>
    </div>
  );
}

export default App;
