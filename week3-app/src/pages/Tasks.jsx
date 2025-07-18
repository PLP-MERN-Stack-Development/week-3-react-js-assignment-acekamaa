import React from 'react';
import TaskManager from '../components/TaskManager';
import ThemeToggle from '../components/ThemeToggle';

const Tasks = () => {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">📝 Task Manager</h2>
      <TaskManager />
    </div>
  );
};

export default Tasks;
