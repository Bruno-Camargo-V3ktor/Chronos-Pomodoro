import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 30,
    shortBreakTime: 5,
    longBreakTime: 10
  }
}