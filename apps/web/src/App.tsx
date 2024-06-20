import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { QuizPage } from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {
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
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
