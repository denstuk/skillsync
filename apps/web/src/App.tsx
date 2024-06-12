import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QuizSessionProvider } from "./context/QuizSessionContext";
import { QuizDemoPage } from "./pages/Experimental/QuizDemoPage";
import { QuizHomePage } from "./pages/Experimental/QuizHomePage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import { AnswerResponse, QuizData } from "./types";
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
      scaling="100%"
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
          <Route path="/experiment" element={<QuizDemoPage />} />
          <Route path="/experiment/home" element={<QuizHomePage />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
