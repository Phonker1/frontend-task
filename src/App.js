import React, { useState } from 'react';
import './App.css';
import { generateCitizens } from './utils/DataGenerator';
import DataTable from './components/DataTable/DataTable';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const testData = generateCitizens(100000); 

  return (
    <div className="App">
      <nav className="app-nav">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className={currentView === 'dashboard' ? 'active' : ''}
        >
          📊 Дашборд
        </button>
        <button 
          onClick={() => setCurrentView('table')}
          className={currentView === 'table' ? 'active' : ''}
        >
          📋 Картотека
        </button>
      </nav>

      {currentView === 'dashboard' ? (
        <Dashboard data={testData} />
      ) : (
        <DataTable data={testData} />
      )}
    </div>
  );
}

export default App;