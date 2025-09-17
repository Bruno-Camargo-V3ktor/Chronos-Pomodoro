import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import type { TaskActionModel } from "./taskActions";
import { TaskActionTypes } from "./taskActions";

export function taskReduce(state: TaskStateModel, action: TaskActionModel): TaskStateModel {

    switch (action.type) {
        case TaskActionTypes.START_TASK: {

            const nextCycle = getNextCycle(state.currentCycle);
            const nextCycleType = getNextCycleType(nextCycle);

            const newTask = {
                ...action.playload,
                duration: state.config[nextCycleType],
                type: nextCycleType
            }
            const secondsRemaining = newTask.duration * 60;

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask]
            };
        
        }

        case TaskActionTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: state.tasks.map((task) => { 
                      if (state.activeTask && state.activeTask.id === task.id) {
                        state.activeTask.interruptDate = Date.now();
                      }
                      return task; 
                })
            };
        }
    }

    return state;
}