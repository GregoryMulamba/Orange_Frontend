// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import TrainingProgress from './scenes/training/TrainingProgress';
import Evaluation from './scenes/training/Evaluation';
import Main_Training from './scenes/training/main_Training';
import TrainingDetails from './scenes/training/TrainingDetails';
import TrainingList from './scenes/training/TrainingList';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            
              <Route path="/trainingprogress" element={<TrainingProgress />} />
              <Route path="/evaluation" element={<Evaluation />} />
              <Route path="/main_training" element={<Main_Training />} />
              <Route path="/traininglist" element={<TrainingList/>} />
              <Route path="/trainingdetails" element={<TrainingDetails />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
