import React from 'react';
import "./App.css";
import { useTranslation } from "react-i18next";
import NavBar from "./common/NavBar";

function App() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header"/>   
      <p>
        {t("welcome")}
        </p>  
    </div>
  );
}

export default App;
