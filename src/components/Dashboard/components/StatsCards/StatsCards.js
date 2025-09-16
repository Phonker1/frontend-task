import React from 'react';
import styles from './StatsCards.module.css';

const StatsCards = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.icon}>👥</div>
        <h3>Всего граждан</h3>
        <p className={styles.statNumber}>{stats.total}</p>
        <span className={styles.statLabel}>зарегистрировано</span>
      </div>

      <div className={`${styles.statCard} ${styles.active}`}>
        <div className={styles.icon}>✅</div>
        <h3>Активные</h3>
        <p className={styles.statNumber}>{stats.active}</p>
        <span className={styles.statLabel}>
          {Math.round((stats.active / stats.total) * 100)}%
        </span>
      </div>

      <div className={`${styles.statCard} ${styles.inProgress}`}>
        <div className={styles.icon}>⏳</div>
        <h3>В обработке</h3>
        <p className={styles.statNumber}>{stats.inProgress}</p>
        <span className={styles.statLabel}>
          {Math.round((stats.inProgress / stats.total) * 100)}%
        </span>
      </div>

      <div className={`${styles.statCard} ${styles.inactive}`}>
        <div className={styles.icon}>❌</div>
        <h3>Неактивные</h3>
        <p className={styles.statNumber}>{stats.inactive}</p>
        <span className={styles.statLabel}>
          {Math.round((stats.inactive / stats.total) * 100)}%
        </span>
      </div>
    </div>
  );
};

export default StatsCards;