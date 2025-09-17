import { useReducer } from "react";
import { initialState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReduce } from "./taskReduce";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export const TaskContextProvider = ({children}: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReduce, initialState);


    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>    
    )
}