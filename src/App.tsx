import { HomePage } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";

export const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <HomePage />
      </MessagesContainer>
    </TaskContextProvider>
  );
};
