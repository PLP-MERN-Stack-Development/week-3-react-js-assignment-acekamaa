import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages and Layout
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    // Global theme support
    <ThemeProvider>
      <Router>
        {/* Common Navbar + Footer applied via Layout */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
