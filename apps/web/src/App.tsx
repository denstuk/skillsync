import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import { QuizData, AnswerResponse } from "./types";
import { QuizSessionProvider } from "./context/QuizSessionContext";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
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
    <Theme
      appearance="dark"
      accentColor="green"
      grayColor="sand"
      panelBackground="solid"
      radius="large"
      scaling="95%"
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage startQuiz={startQuiz} />} />
          <Route
            path="/quiz"
            element={
              <QuizSessionProvider quizData={quizData}>
                <QuizPage quizData={quizData} endQuiz={endQuiz} />
              </QuizSessionProvider>
            }
          />
          <Route path="/results" element={<ResultsPage results={results} />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
