import { HomePage } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFoundPage } from "./pages/NotFound";
import { AboutPomodoroPage } from "./pages/AboutPomodoro";

export const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-pomodoro" element={<AboutPomodoroPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </MessagesContainer>
    </TaskContextProvider>
  );
};
