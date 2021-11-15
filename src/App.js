import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashboardNext } from "./components/Dashboard/DashboardNext";
import { MainForm } from "./components/Form/MainForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboardNext' element={<DashboardNext />} />
        <Route path='*' element={<MainForm />} />
      </Routes>
    </div>
  );
}

export default App;
