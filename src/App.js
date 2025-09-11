import React from 'react';
import './App.css';
import { generateCitizens } from './utils/dataGenerator';

function App() {
  // Временно: генерируем данные и выводим количество
  const testData = generateCitizens(10); // 10 записей для теста
  console.log('Сгенерировано записей:', testData.length);
  console.log('Первая запись:', testData[0]);

  return (
    <div className="App">
      <h1>Портал ППК РЭО - Современная версия</h1>
      <p>Система управления данными граждан</p>
    </div>
  );
}

export default App;