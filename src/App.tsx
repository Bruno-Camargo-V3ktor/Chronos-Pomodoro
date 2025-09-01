import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';


import './styles/theme.css';
import './styles/global.css';

export const App = () => {

  return (
    <div>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </div>
  )
}
