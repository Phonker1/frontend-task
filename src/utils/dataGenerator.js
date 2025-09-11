export const generateCitizens = (count = 100000) => {
  const citizens = [];
  
  const maleNames = ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей'];
  const femaleNames = ['Елена', 'Ольга', 'Наталья', 'Ирина', 'Анна', 'Мария'];
  const surnames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов'];
  const patronymics = ['Александрович', 'Дмитриевич', 'Сергеевич', 'Андреевич', 'Иванович'];
  
  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];
  const genders = ['Мужской', 'Женский'];
  const statuses = ['Активен', 'Неактивен', 'В обработке'];
  
  for (let i = 0; i < count; i++) {
    const isMale = Math.random() > 0.5;
    const firstName = isMale ? 
      maleNames[Math.floor(Math.random() * maleNames.length)] : 
      femaleNames[Math.floor(Math.random() * femaleNames.length)];
    
    const birthDate = new Date(
      1950 + Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 30) + 1
    );
    
    const age = new Date().getFullYear() - birthDate.getFullYear();
    
    citizens.push({

      id: i + 1,
      fullName: `${surnames[Math.floor(Math.random() * surnames.length)]} ${firstName} ${patronymics[Math.floor(Math.random() * patronymics.length)]}`,
      birthDate: birthDate.toISOString().split('T')[0],
      age: age,
      gender: isMale ? 'Мужской' : 'Женский',
      
      phone: `+7${Math.floor(9000000000 + Math.random() * 1000000000)}`, //генерация телефона
      email: `citizen${i + 1}@mail.ru`,
      address: `г. ${cities[Math.floor(Math.random() * cities.length)]}, ул. ${['Ленина', 'Пушкина', 'Гагарина'][Math.floor(Math.random() * 3)]}, д. ${Math.floor(Math.random() * 100) + 1}`,
      
      // доп информация
      status: statuses[Math.floor(Math.random() * statuses.length)],
      registrationDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      passportSeries: Math.floor(1000 + Math.random() * 9000),
      passportNumber: Math.floor(100000 + Math.random() * 900000),
      
      // связанных данных
      hasFamily: Math.random() > 0.3,
      hasEducation: Math.random() > 0.2,
      hasWorkExperience: Math.random() > 0.4
    });
  }
  
  return citizens;
};

// создание семейных узлов
export const generateFamilyMembers = (citizenId, count) => {
  const relations = ['Супруг(а)', 'Ребенок', 'Родитель', 'Брат/Сестра'];
  const members = [];
  
  for (let i = 0; i < count; i++) {
    members.push({
      id: `${citizenId}-${i + 1}`,
      citizenId: citizenId,
      fullName: `Член семьи ${i + 1}`,
      relation: relations[Math.floor(Math.random() * relations.length)],
      birthDate: new Date(1980 + Math.floor(Math.random() * 30), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
    });
  }
  
  return members;
};