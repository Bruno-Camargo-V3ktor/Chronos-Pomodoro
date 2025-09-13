import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import type React from "react"
import { useState } from "react"

export const MainForm = () => {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
              value={taskName}
              onChange={ (e) => setTaskName(e.target.value) }
            />
          </div>

          <div className='formRow'>
            <p>Proximo Intervalo a 25min</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>} />
          </div>
        </form>
        </>
    )
}