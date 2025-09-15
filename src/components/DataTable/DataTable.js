import React, { useState, useMemo } from 'react';
import './DataTable.css';
import UserCard from '../UserCard';

const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Правильная сортировка данных
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      let valueA = a[sortConfig.key];
      let valueB = b[sortConfig.key];
      
      // Для числовых значений
      if (sortConfig.key === 'id' || sortConfig.key === 'age') {
        valueA = Number(valueA);
        valueB = Number(valueB);
      }
      
      // Для строковых значений (регистронезависимо)
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

  // Обработчик фильтрации по статусу
  const handleStatusFilter = () => {
    const statusOrder = [null, 'Активен', 'В обработке', 'Неактивен'];
    const currentIndex = statusOrder.indexOf(statusFilter);
    const nextIndex = (currentIndex + 1) % statusOrder.length;
    setStatusFilter(statusOrder[nextIndex]);
  };

  // Комбинированная фильтрация (статус + поиск по ФИО)
  const filteredData = useMemo(() => {
    let result = sortedData;
    
    // Фильтр по статусу
    if (statusFilter) {
      result = result.filter(item => item.status === statusFilter);
    }
    
    // Фильтр по ФИО
    if (filter) {
      const searchTerm = filter.toLowerCase();
      result = result.filter(item =>
        item.fullName.toLowerCase().includes(searchTerm)
      );
    }
    
    return result;
  }, [sortedData, statusFilter, filter]);

  // Обработчик сортировки для других колонок
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
  <div className="data-table-container">
    <div className="table-header">
      <h2>Картотека граждан</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Поиск по ФИО..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
        <span className="total-count">
          Всего записей: {filteredData.length}
        </span>
      </div>
    </div>

    <div className="table-wrapper">
      <table className="data-table">
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
                <span className={`status-badge status-${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <button className="view-btn" onClick={() => setSelectedUser(item)}>
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