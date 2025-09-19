import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export const Tips = () => {
    
    const {state} = useTaskContext();

    const tipsForWhenActiveTask = {
        workTime: (<span>Foque por <b>{state.config.workTime}min</b></span>),
        shortBreakTime: (<span>Descanse por {state.config.shortBreakTime}min</span>),
        longBreakTime: (<span>Descanso longo</span>),
    }

    const tipsForNoActiveTask = {
        workTime: (<span>Próximo ciclo é de <b>{state.config.workTime}min</b></span>),
        shortBreakTime: (<span>Próximo descanso é de {state.config.shortBreakTime}min</span>),
        longBreakTime: (<span>Próximo descanso será longo</span>),
    }

    const nextCycleType = getNextCycleType( getNextCycle(state.currentCycle) );

    return(
        <>
            {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    )
}