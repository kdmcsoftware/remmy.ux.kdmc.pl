import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashboardNext } from "./components/Dashboard/DashboardNext";
import { MainForm } from "./components/Form/MainForm";
import { StepsState } from './components/Form/StepsState'

function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500,
        xxl: 1800,
      },
    },

    typography: {
      "fontFamily": "Montserrat",
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StepsState>
          <Routes>
            <Route path='/' element={<MainForm />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboardNext' element={<DashboardNext />} />
            <Route path='*' element={<MainForm />} />
          </Routes>
        </StepsState>
      </ThemeProvider>
    </div>
  );
}

export default App;
