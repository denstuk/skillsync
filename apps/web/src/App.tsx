import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResultsPage from "./pages/ResultsPage";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { QuizSessionPage } from "./pages/QuizSessionPage";
import { QuizHomePage } from "./pages/Experimental/QuizHomePage";

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
          <Route path="/" element={<QuizHomePage />} />
          <Route path="/quiz" element={<QuizSessionPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
