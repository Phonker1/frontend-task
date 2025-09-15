import React from 'react';
import './App.css';
import DataTable from './components/DataTable';
import { generateCitizens } from './utils/DataGenerator';

function App() {
  // Генерируем тестовые данные
  const testData = generateCitizens(1000);

  return (
    <div className="App">
      <h1>Портал ППК РЭО - Современная версия</h1>
      <p>Система управления данными граждан</p>
      
      <DataTable data={testData} />
    </div>
  );
}

export default App;