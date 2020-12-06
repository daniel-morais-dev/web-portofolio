import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSelect from './common/LanguageSelect'

function App() {
  const { t } = useTranslation();
  return (
      <div className="App">
        <header className="App-header">
          <LanguageSelect/>
          {t("welcome")}
        </header>
      </div>
  );
}

export default App;
