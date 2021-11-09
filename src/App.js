import React from "react";
import {Header} from "./components/Header/Header";
import {MainForm} from "./components/Form/MainForm";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Grid} from "@mui/material";

function App() {
  return (
    // <div style={{backgroundColor: 'deeppink', minHeight: '100% !important'}}>
    <div>
        {/*<Header/>*/}
        {/*<MainForm/>*/}
        <Dashboard/>
    </div>
  );
}

export default App;
