import { TrashIcon } from "lucide-react"
import { Container } from "../../components/Container"
import { DefaultButton } from "../../components/DefaultButton"
import { Heading } from "../../components/Heading"
import { MainTemplate } from "../../templates/MainTemplate"

import styles from './styles.module.css';
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { formatDate } from "../../utils/formatDate"
import { getTaskStatus } from "../../utils/getTaskStatus"
import { sortTasks, type SortTasksOptions } from "../../utils/sortTask"
import { useState } from "react"

export const HistoryPage = () => {
    const { state } = useTaskContext();
    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            field: 'startDate',
            direction: 'desc'
        }
    });

    function handleSortTask({ field }: Pick<SortTasksOptions, 'field'>) {
        const newDirectioon = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

        setSortTasksOptions({
            tasks: sortTasks({ direction: newDirectioon, tasks: sortTasksOptions.tasks, field }),
            direction: newDirectioon,
            field
        });
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles['buttonContainer']}>
                        <DefaultButton
                            icon={<TrashIcon />}
                            color='red'
                            aria-label='Apagar todo o historico'
                            title='Apagar historico'
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles['responsiveTable']}>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => handleSortTask({ field: 'name' })} className={styles.thSort}>Tarefa ↕</th>
                                <th onClick={() => handleSortTask({ field: 'duration' })} className={styles.thSort}>Duracao ↕</th>
                                <th onClick={() => handleSortTask({ field: 'startDate' })} className={styles.thSort}>Data ↕</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortTasksOptions.tasks.map(task => {
                                const taskTypeDicionary = {
                                    workTime: 'Foco',
                                    shortBreakTime: 'Descanso curto',
                                    longBreakTime: 'Descanso longo'
                                }

                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{taskTypeDicionary[task.type]}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    )
}