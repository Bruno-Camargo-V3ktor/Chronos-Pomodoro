import { useEffect, useReducer } from "react";
import { initialState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReduce } from "./taskReduce";
import { TimerWorkerManager } from "../../works/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export const TaskContextProvider = ({children}: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReduce, initialState);

    const worker = TimerWorkerManager.getInstance();
    worker.onMessage( e => {
        const countDownSeconds = e.data;

        console.log(countDownSeconds);
        if( countDownSeconds <= 0 ) {
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

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>    
    )
}