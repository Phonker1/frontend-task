import React, { useState, useMemo } from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './DataTable.module.css';

const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      let valueA = a[sortConfig.key];
      let valueB = b[sortConfig.key];
      
      if (sortConfig.key === 'id' || sortConfig.key === 'age') {
        valueA = Number(valueA);
        valueB = Number(valueB);
      }
      
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
      
      if (valueA < valueB) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleStatusFilter = () => {
    const statusOrder = [null, 'Активен', 'В обработке', 'Неактивен'];
    const currentIndex = statusOrder.indexOf(statusFilter);
    const nextIndex = (currentIndex + 1) % statusOrder.length;
    setStatusFilter(statusOrder[nextIndex]);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = useMemo(() => {
    console.time('filtering');
    let result = sortedData;
    if (statusFilter) {
      result = result.filter(item => item.status === statusFilter);
    }
    if (filter) {
      const searchTerm = filter.toLowerCase();
      result = result.filter(item =>
      item.fullName.toLowerCase().includes(searchTerm)
    );
  }
  
  console.timeEnd('filtering');
  return result;
}, [sortedData, statusFilter, filter]);

  return (
    <div className={styles.dataTableContainer}>
      <div className={styles.tableHeader}>
        <h2>Картотека граждан</h2>
        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Поиск по ФИО..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.totalCount}>
            Всего записей: {filteredData.length}
          </span>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>
                ID {sortConfig.key === 'id' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('fullName')}>
                ФИО {sortConfig.key === 'fullName' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('age')}>
                Возраст {sortConfig.key === 'age' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('gender')}>
                Пол {sortConfig.key === 'gender' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
              </th>
              <th onClick={handleStatusFilter}>
                Статус 
              </th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, 50).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fullName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles['status-' + item.status.toLowerCase().replace(' ', '-')]}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button 
                    className={styles.viewBtn}
                    onClick={() => setSelectedUser(item)}
                  >
                    Просмотреть
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserCard 
        user={selectedUser} 
        isOpen={!!selectedUser} 
        onClose={() => setSelectedUser(null)} 
      />
    </div>
  );
};

export default DataTable;