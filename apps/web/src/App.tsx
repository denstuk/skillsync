import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import { QuizData, AnswerResponse } from './types';

function App() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [results, setResults] = useState<AnswerResponse | null>(null);

  const startQuiz = (data: QuizData) => {
    setQuizData(data);
    setResults(null);
  };

  const endQuiz = (result: AnswerResponse) => {
    setResults(result);
  };

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage startQuiz={startQuiz} />} />
          <Route path="/quiz" element={<QuizPage quizData={quizData} endQuiz={endQuiz} />} />
          <Route path="/results" element={<ResultsPage results={results} />}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
