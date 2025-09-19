import { useEffect, useReducer } from "react";
import { initialState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReduce } from "./taskReduce";
import { TimerWorkerManager } from "../../works/TimerWorkerManager";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export const TaskContextProvider = ({children}: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReduce, initialState);

    const worker = TimerWorkerManager.getInstance();
    worker.onMessage( e => {
        const countDownSeconds = e.data;

        if( countDownSeconds <= 0 ) {
            worker.terminate();
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