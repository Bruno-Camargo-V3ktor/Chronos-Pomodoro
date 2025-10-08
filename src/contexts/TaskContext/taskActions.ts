import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETE_TASK = 'COMPLETE_TASK',
    RESET_STATE = 'RESET_STATE'
};

export type TaskActionModel =
    | {
        type: TaskActionTypes.START_TASK,
        playload: TaskModel
    }
    | {
        type: TaskActionTypes.INTERRUPT_TASK,
    }
    | {
        type: TaskActionTypes.COUNT_DOWN,
        playload: { secondsRemaining: number }
    }
    | {
        type: TaskActionTypes.COMPLETE_TASK,
    } | {
        type: TaskActionTypes.RESET_STATE,
    };