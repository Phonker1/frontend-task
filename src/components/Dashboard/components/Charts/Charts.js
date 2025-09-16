import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import styles from './Charts.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ data }) => {
  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className={styles.chartsContainer}>
        <h2>Визуальная аналитика</h2>
        <p>Нет данных для отображения</p>
      </div>
    );
  }

  const statusData = {
    labels: ['Активен', 'В обработке', 'Неактивен'],
    datasets: [
      {
        data: [
          data.filter(item => item?.status === 'Активен').length,
          data.filter(item => item?.status === 'В обработке').length,
          data.filter(item => item?.status === 'Неактивен').length
        ],
        backgroundColor: ['#2ecc71', '#f39c12', '#e74c3c'],
        borderWidth: 0
      }
    ]
  };

  const ageGroups = {
    '18-25': data.filter(item => item?.age >= 18 && item?.age <= 25).length,
    '26-35': data.filter(item => item?.age >= 26 && item?.age <= 35).length,
    '36-45': data.filter(item => item?.age >= 36 && item?.age <= 45).length,
    '46-55': data.filter(item => item?.age >= 46 && item?.age <= 55).length,
    '56-65': data.filter(item => item?.age >= 56 && item?.age <= 65).length,
    '65+': data.filter(item => item?.age > 65).length
  };

  const ageData = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: 'Количество человек',
        data: Object.values(ageGroups),
        backgroundColor: '#3498db',
        borderRadius: 5
      }
    ]
  };

  const monthlyData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    datasets: [
      {
        label: 'Регистраций в месяц',
        data: [120, 190, 210, 180, 250, 220, 300, 280, 260, 240, 210, 230],
        borderColor: '#9b59b6',
        backgroundColor: 'rgba(155, 89, 182, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  return (
    <div className={styles.chartsContainer}>
      <h2>Визуальная аналитика</h2>
      
      <div className={styles.chartsGrid}>
        
        <div className={styles.chartCard}>
          <h3>Распределение по статусам</h3>
          <div className={styles.chartWrapper}>
            <Doughnut data={statusData} options={options} />
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>Возрастное распределение</h3>
          <div className={styles.chartWrapper}>
            <Bar data={ageData} options={options} />
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3>Динамика регистраций</h3>
          <div className={styles.chartWrapper}>
            <Line data={monthlyData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;