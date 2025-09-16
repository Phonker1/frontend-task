import React from 'react';
import styles from './Dashboard.module.css';
import StatsCards from './components/StatsCards/StatsCards';
import Charts from './components/Charts/Charts';

const Dashboard = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h1>Дашборд управления гражданами</h1>
          <p>Нет данных для отображения</p>
        </div>
      </div>
    );
  }

  const stats = {
    total: data.length,
    active: data.filter(item => item.status === 'Активен').length,
    inProgress: data.filter(item => item.status === 'В обработке').length,
    inactive: data.filter(item => item.status === 'Неактивен').length
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Дашборд управления гражданами</h1>
        <p>Обзор статистики и ключевых показателей</p>
      </div>

      <StatsCards stats={stats} />
      
      <Charts data={data} />
    </div>
  );
};

export default Dashboard;