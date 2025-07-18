import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { dark, setDark } = useTheme();

  return (
    <button
      className="ml-auto bg-gray-200 dark:bg-gray-700 text-sm px-4 py-1 rounded"
      onClick={() => setDark(prev => !prev)}
    >
      {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
