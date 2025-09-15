import React from 'react';
import styles from './UserCard.module.css';

const UserCard = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Карточка гражданина</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        
        <div className={styles.modalBody}>
          {/* Основные данные */}
          <div className={styles.section}>
            <h3>Основные данные</h3>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label>ФИО:</label>
                <span>{user?.fullName || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Возраст:</label>
                <span>{user?.age || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Пол:</label>
                <span>{user?.gender || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Статус:</label>
                <span className={`${styles.status} ${styles['status-' + user?.status?.toLowerCase()?.replace(' ', '-')]}`}>
                  {user?.status || 'Не указано'}
                </span>
              </div>
              <div className={styles.field}>
                <label>Дата рождения:</label>
                <span>{user?.birthDate || 'Не указано'}</span>
              </div>
            </div>
          </div>

          {/* Контактная информация */}
          <div className={styles.section}>
            <h3>Контактная информация</h3>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label>Телефон:</label>
                <span>{user?.phone || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Email:</label>
                <span>{user?.email || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Адрес:</label>
                <span>{user?.address || 'Не указано'}</span>
              </div>
            </div>
          </div>

          {/* Документы */}
          <div className={styles.section}>
            <h3>Документы</h3>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label>Паспорт:</label>
                <span>{user?.passportSeries ? `${user.passportSeries} ${user.passportNumber}` : 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Дата регистрации:</label>
                <span>{user?.registrationDate || 'Не указано'}</span>
              </div>
            </div>
          </div>

          {/* Образование */}
          <div className={styles.section}>
            <h3>Образование</h3>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label>Учебное заведение:</label>
                <span>{user?.education?.institution || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Степень:</label>
                <span>{user?.education?.degree || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Год окончания:</label>
                <span>{user?.education?.graduationYear || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Факультет:</label>
                <span>{user?.education?.faculty || 'Не указано'}</span>
              </div>
            </div>
          </div>

          {/* Опыт работы */}
          <div className={styles.section}>
            <h3>Опыт работы</h3>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label>Компания:</label>
                <span>{user?.workExperience?.company || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Должность:</label>
                <span>{user?.workExperience?.position || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Стаж (лет):</label>
                <span>{user?.workExperience?.years || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Отдел:</label>
                <span>{user?.workExperience?.department || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Навыки:</label>
                <span>{user?.workExperience?.skills?.join(', ') || 'Не указано'}</span>
              </div>
            </div>
          </div>

          {/* Семья */}
          <div className={styles.section}>
            <h3>Семья ({user?.family?.length || 0} человек)</h3>
            {user?.family?.length > 0 ? (
              <table className={styles.subTable}>
                <thead>
                  <tr>
                    <th>ФИО</th>
                    <th>Родство</th>
                    <th>Возраст</th>
                    <th>Пол</th>
                  </tr>
                </thead>
                <tbody>
                  {user.family.map((member) => (
                    <tr key={member.id}>
                      <td>{member.fullName}</td>
                      <td>{member.relation}</td>
                      <td>{member.age}</td>
                      <td>{member.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Нет данных о семье</p>
            )}
          </div>

          {/* Недвижимость */}
          <div className={styles.section}>
            <h3>Недвижимость</h3>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label>Тип недвижимости:</label>
                <span>{user?.property?.type || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Адрес:</label>
                <span>{user?.property?.address || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Площадь (м²):</label>
                <span>{user?.property?.area || 'Не указано'}</span>
              </div>
              <div className={styles.field}>
                <label>Форма собственности:</label>
                <span>{user?.property?.ownershipType || 'Не указано'}</span>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className={styles.section}>
            <h3>Дополнительная информация</h3>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label>Есть дети:</label>
                <span>{user?.hasChildren ? 'Да' : 'Нет'}</span>
              </div>
              <div className={styles.field}>
                <label>Трудоустроен:</label>
                <span>{user?.isEmployed ? 'Да' : 'Нет'}</span>
              </div>
              <div className={styles.field}>
                <label>Медицинская страховка:</label>
                <span>{user?.hasMedicalInsurance ? 'Да' : 'Нет'}</span>
              </div>
              <div className={styles.field}>
                <label>Пенсионер:</label>
                <span>{user?.isPensioner ? 'Да' : 'Нет'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;