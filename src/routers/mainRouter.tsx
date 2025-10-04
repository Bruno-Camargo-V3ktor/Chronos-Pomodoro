import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { NotFoundPage } from "../pages/NotFound";
import { AboutPomodoroPage } from "../pages/AboutPomodoro";
import { HomePage } from "../pages/Home";
import { useEffect } from "react";
import { HistoryPage } from "../pages/History";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-pomodoro" element={<AboutPomodoroPage />} />
        <Route path="/history" element={<HistoryPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
