import { useState } from "react";
import { initialState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export const TaskContextProvider = ({children}: TaskContextProviderProps) => {
    const [state, setState] = useState(initialState);


    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>    
    )
}