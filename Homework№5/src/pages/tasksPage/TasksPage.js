import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, incrementTimeSpent, setActiveTask, pauseTask } from "../../store/tasksSlice";

const TasksPage = () => {
    const dispatch = useDispatch();
    const { tasks, activeTask } = useSelector(state => state.tasksReducer);
    const [taskTitle, setTaskTitle] = useState('');

    const handleAddTask = () => {
        dispatch(addTask(taskTitle));
        setTaskTitle('');
    };

    useEffect(() => {
        let interval;
        if (activeTask) {
            interval = setInterval(() => {
                dispatch(incrementTimeSpent());
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [activeTask, dispatch]);



    return (
        <div className="tasksContainer">
            <h1>Task Manager with Timer</h1>

            <div className="task-input">
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className="task-list">
                <h2>Task List</h2>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div>
                                <strong>{task.title}</strong>
                                <span> - Time Spent: {task.timeSpent}</span>
                                <span> - Status: {task.status}</span>
                            </div>
                            <div>
                                <button onClick={() => {
                                    if (task.status === 'pending' || task.status === 'paused') {
                                        dispatch(setActiveTask(task.id));
                                    } else if (task.status === 'active') {
                                        dispatch(pauseTask());
                                    }
                                }}>
                                    {task.status === 'active' ? 'Pause' : 'Start'}
                                </button>
                                {task.status !== 'completed' && (
                                    <button onClick={() => dispatch(completeTask(task.id))}>
                                        Complete
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {activeTask && (
                <div className="active-task">
                    <h2>Active Task</h2>
                    <div>
                        <p>Task: {tasks.find((task) => task.id === activeTask)?.title}</p>
                        <p>
                            Time: {tasks.find((task) => task.id === activeTask)?.timeSpent} seconds
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TasksPage;
