import React from "react";
import { Header } from "./components/Header/Header";
import { MainForm } from "./components/Form/MainForm";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashboardNext } from "./components/Dashboard/DashboardNext";
import { Grid } from "@mui/material";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <MainForm /> */}
      <Dashboard />
      {/* <DashboardNext /> */}
    </div>
  );
}

export default App;
