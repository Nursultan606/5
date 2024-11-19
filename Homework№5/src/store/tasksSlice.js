import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    activeTask: null,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                title: action.payload,
                timeSpent: 0,
                status: 'pending',
            });
        },
        setActiveTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.status = 'active';
            }
            state.activeTask = action.payload;
        },
        pauseTask: (state) => {

            if (state.activeTask) {
                const task = state.tasks.find((task) => task.id === state.activeTask);
                if (task) {
                    task.status = 'paused';
                }
                state.activeTask = null;
            }
        },
        completeTask: (state) => {


            if (state.activeTask) {
                const task = state.tasks.find((task) => task.id === state.activeTask);
                if (task) {
                    task.status = 'completed';
                }
                state.activeTask = null;
            }

        },

        incrementTimeSpent: (state) => {
            if (state.activeTask) {
                const task = state.tasks.find((task) => task.id === state.activeTask);
                if (task) {
                    task.timeSpent += 1;
                }
            }
        },
    },
});

export const { addTask, completeTask, incrementTimeSpent, setActiveTask, pauseTask } = tasksSlice.actions;

export default tasksSlice.reducer;