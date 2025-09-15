import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './Cycles.module.css';


export const Cycles = () => {
    const { state } = useTaskContext();
    const cycleSteps = Array.from({length: state.currentCycle})

    const cycleDescriptionMap = {
        workTime: 'Foco',
        shortBreakTime: 'Descanso Curto',
        longBreakTime: 'Descanso Longo'
    }

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                {
                    cycleSteps.map( (_, index) => {
                        const cycle = getNextCycle(index); 
                        const cycleType = getNextCycleType(cycle);
                        return (
                            <span
                                key={ `${cycleType}_${cycle}` }
                                className={`${styles.cycleDot} ${styles[cycleType]}`}
                                aria-label={`Indicador de ciclo de ${cycleDescriptionMap[cycleType]}`}
                                title={`Indicador de ciclo de ${cycleDescriptionMap[cycleType]}`}
                            />
                        );
                    })
                }
                
                
                {
                /* 
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span> 
                */
                }
            </div>
        </div>
    );
}