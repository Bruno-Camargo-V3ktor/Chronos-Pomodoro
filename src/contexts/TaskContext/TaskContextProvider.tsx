import { useEffect, useReducer, useRef } from "react";
import { initialState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReduce } from "./taskReduce";
import { TimerWorkerManager } from "../../works/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export const TaskContextProvider = ({children}: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReduce, initialState);
    const playBeepRef = useRef<() => void | null>(null);

    const worker = TimerWorkerManager.getInstance();
    worker.onMessage( e => {
        const countDownSeconds = e.data;

        if( countDownSeconds <= 0 ) {
            if (playBeepRef.current) {
                playBeepRef.current();
            }
            
            dispatch({type: TaskActionTypes.COMPLETE_TASK});
            worker.terminate();
        } else {
            dispatch({
            type: TaskActionTypes.COUNT_DOWN,
            playload: {secondsRemaining: countDownSeconds}
        });
        }
    });

    useEffect(() => {
        if(!state.activeTask) {
            worker.terminate();
        }

        worker.postMessage(state);
    }, [state, worker])

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>    
    )
}