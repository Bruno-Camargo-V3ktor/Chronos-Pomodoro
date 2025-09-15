import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import type React from "react"
import { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes"

export const MainForm = () => {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;
    
    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    };

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [
          ...prevState.tasks,
          newTask
        ]
      }
    });
  }
  
  return (
        <>
        <form onSubmit={handleCreateNewTask} className='form' action="">
          <div className='formRow'>
            <DefaultInput 
              labelText='Tarefa' 
              id='meuInput' 
              type='text'
              placeholder='Digite algo'
              defaultValue='Minha Tarefa'
              ref={taskNameInput}
              disabled={!!state.activeTask}
            />
          </div>

          <div className='formRow'>
            <p>Proximo Intervalo a 25min</p>
          </div>

          { state.currentCycle > 0 &&
            <div className='formRow'>
              <Cycles />
            </div>
          }

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>} />
          </div>
        </form>
        </>
    )
}