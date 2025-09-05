import { Contianer } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/Countdown';
import { DefaultInput } from './components/DefaultInput';



export const App = () => {

  return (
    <>
      <Contianer>
        <Logo />
      </Contianer>

      <Contianer>
        <Menu />
      </Contianer>

      <Contianer>
        <CountDown />
      </Contianer>

      <Contianer>
        <form className='form' action="">
          <div className='formRow'>
            <DefaultInput labelText='Qualquer coisa' id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Contianer>
    </>
  )
}
