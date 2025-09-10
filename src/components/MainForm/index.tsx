import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"

export const MainForm = () => {
    return (
        <>
        <form className='form' action="">
          <div className='formRow'>
            <DefaultInput 
              labelText='Tarefa' 
              id='meuInput' 
              type='text'
              placeholder='Digite algo'
              defaultValue='Minha Tarefa'
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