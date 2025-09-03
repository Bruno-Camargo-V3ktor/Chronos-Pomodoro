import { Contianer } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';



export const App = () => {

  return (
    <>
      <Contianer>
        <Logo />
      </Contianer>

      <Contianer>
        <Menu />
      </Contianer>
    </>
  )
}
