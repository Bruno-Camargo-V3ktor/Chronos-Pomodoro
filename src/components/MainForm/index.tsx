import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import type React from "react"
import { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions"
import { Tips } from "../Tips"
import { TimerWorkerManager } from "../../works/TimerWorkerManager"

export const MainForm = () => {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

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
      duration: 0,
      type: 'workTime'
    };

    dispatch({type: TaskActionTypes.START_TASK, playload: newTask })
  }
  
  function handleInterruptTask() {
    dispatch({type: TaskActionTypes.INTERRUPT_TASK});
  }

  const worker = TimerWorkerManager.getInstance();

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
            <Tips />
          </div>

          { state.currentCycle > 0 &&
            <div className='formRow'>
              <Cycles />
            </div>
          }

          <div className='formRow'>
            {!state.activeTask 
              ? <DefaultButton key='send-form' aria-label='Iniciar nova tarefa' title='Iniciar nova tarefa' type='submit' icon={<PlayCircleIcon/>} />
              : <DefaultButton key='not-send-form' onClick={handleInterruptTask}  aria-label='Interromper tarefa atual' title='Interromper tarefa atual' type='button' color="red" icon={<StopCircleIcon/>} />
            }
          </div>
        </form>
        </>
    )
}