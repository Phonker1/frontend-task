const generateEducationData = () => {
  const institutions = [
    'МГУ им. Ломоносова',
    'СПбГУ', 
    'МГТУ им. Баумана',
    'НГУ',
    'КФУ',
    'МФТИ',
    'ВШЭ',
    'МГИМО'
  ];
  
  const degrees = ['Бакалавр', 'Магистр', 'Специалист', 'Аспирант', 'Кандидат наук', 'Доктор наук'];
  
  return {
    institution: institutions[Math.floor(Math.random() * institutions.length)],
    degree: degrees[Math.floor(Math.random() * degrees.length)],
    graduationYear: 2000 + Math.floor(Math.random() * 24),
    faculty: ['Экономический', 'Юридический', 'Технический', 'Гуманитарный', 'Медицинский'][Math.floor(Math.random() * 5)]
  };
};
 
const generateWorkExperience = () => {
  const companies = [
    'Яндекс',
    'Сбер',
    'Газпром',
    'Ростелеком',
    'Тинькофф',
    'ВТБ',
    'Росатом',
    'Лукойл',
    'РЖД',
    'МТС'
  ];
  
  const positions = [
    'Разработчик',
    'Аналитик',
    'Менеджер',
    'Дизайнер',
    'Тестировщик',
    'Архитектор',
    'Инженер',
    'Консультант',
    'Специалист',
    'Руководитель'
  ];
  
  const departments = [
    'IT-департамент',
    'Финансовый отдел',
    'Отдел продаж',
    'Маркетинг',
    'Производство',
    'Логистика',
    'HR',
    'Юридический отдел'
  ];
  
  return {
    company: companies[Math.floor(Math.random() * companies.length)],
    position: positions[Math.floor(Math.random() * positions.length)],
    years: Math.floor(1 + Math.random() * 20),
    department: departments[Math.floor(Math.random() * departments.length)],
    skills: ['JavaScript', 'Python', 'Java', 'C++', 'SQL', 'React', 'Node.js', 'Angular'].slice(0, 3 + Math.floor(Math.random() * 3))
  };
};

const generateFamilyData = () => {
  const relations = ['Супруг(а)', 'Ребенок', 'Родитель', 'Брат', 'Сестра', 'Дедушка', 'Бабушка'];
  const genders = ['Мужской', 'Женский'];
  
  const familyMembers = [];
  const memberCount = Math.floor(Math.random() * 5); 
  
  for (let i = 0; i < memberCount; i++) {
    const isMale = Math.random() > 0.5;
    const age = Math.floor(1 + Math.random() * 70);
    
    familyMembers.push({
      id: i + 1,
      fullName: `Член семьи ${i + 1}`,
      relation: relations[Math.floor(Math.random() * relations.length)],
      gender: isMale ? 'Мужской' : 'Женский',
      age: age,
      birthDate: new Date(new Date().getFullYear() - age, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0]
    });
  }
  
  return familyMembers;
};

const generatePropertyData = () => {
  const propertyTypes = ['Квартира', 'Дом', 'Дача', 'Земельный участок', 'Гараж'];
  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Краснодар'];
  
  return {
    type: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
    address: `г. ${cities[Math.floor(Math.random() * cities.length)]}, ул. ${['Центральная', 'Ленина', 'Гагарина', 'Советская', 'Мира'][Math.floor(Math.random() * 5)]}, д. ${Math.floor(1 + Math.random() * 100)}`,
    area: Math.floor(30 + Math.random() * 200),
    ownershipType: ['Собственность', 'Ипотека', 'Аренда', 'Социальный найм'][Math.floor(Math.random() * 4)]
  };
};

export const generateCitizens = (count = 100000) => {
  const citizens = [];
  
  const maleNames = ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Иван', 'Михаил', 'Артем', 'Кирилл'];
  const femaleNames = ['Елена', 'Ольга', 'Наталья', 'Ирина', 'Анна', 'Мария', 'Светлана', 'Екатерина', 'Татьяна', 'Юлия'];
  
  const maleSurnames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Михайлов', 'Новиков', 'Федоров'];
  const femaleSurnames = ['Иванова', 'Петрова', 'Сидорова', 'Смирнова', 'Кузнецова', 'Попова', 'Васильева', 'Михайлова', 'Новикова', 'Федорова'];
  
  const malePatronymics = ['Александрович', 'Дмитриевич', 'Сергеевич', 'Андреевич', 'Иванович', 'Михайлович', 'Алексеевич', 'Артемович', 'Кириллович'];
  const femalePatronymics = ['Александровна', 'Дмитриевна', 'Сергеевна', 'Андреевна', 'Ивановна', 'Михайловна', 'Алексеевна', 'Артемовна', 'Кирилловна'];
  
  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Краснодар', 'Воронеж', 'Самара'];
  const genders = ['Мужской', 'Женский'];
  const statuses = ['Активен', 'Неактивен', 'В обработке'];
  
  for (let i = 0; i < count; i++) {
    const isMale = Math.random() > 0.5;
    
    const firstName = isMale ? 
      maleNames[Math.floor(Math.random() * maleNames.length)] : 
      femaleNames[Math.floor(Math.random() * femaleNames.length)];
    
    const surname = isMale ?
      maleSurnames[Math.floor(Math.random() * maleSurnames.length)] :
      femaleSurnames[Math.floor(Math.random() * femaleSurnames.length)];
    
    const patronymic = isMale ?
      malePatronymics[Math.floor(Math.random() * malePatronymics.length)] :
      femalePatronymics[Math.floor(Math.random() * femalePatronymics.length)];
    
    const birthDate = new Date(
      2024 - (20 + Math.floor(Math.random() * 40)), 
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    );
    
    const age = new Date().getFullYear() - birthDate.getFullYear();
    
    citizens.push({
      
      id: i + 1,
      fullName: `${surname} ${firstName} ${patronymic}`,
      birthDate: birthDate.toISOString().split('T')[0],
      age: age,
      gender: isMale ? 'Мужской' : 'Женский',
      
      phone: `+7${Math.floor(9000000000 + Math.random() * 1000000000)}`,
      email: `citizen${i + 1}@mail.ru`,
      address: `г. ${cities[Math.floor(Math.random() * cities.length)]}, ул. ${['Ленина', 'Пушкина', 'Гагарина', 'Советская', 'Мира'][Math.floor(Math.random() * 5)]}, д. ${Math.floor(Math.random() * 100) + 1}`,
      
      status: statuses[Math.floor(Math.random() * statuses.length)],
      registrationDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      passportSeries: Math.floor(1000 + Math.random() * 9000),
      passportNumber: Math.floor(100000 + Math.random() * 900000),
      
      education: generateEducationData(),
      
      workExperience: generateWorkExperience(),
      
      family: generateFamilyData(),
      
      property: generatePropertyData(),
      
      hasChildren: Math.random() > 0.5,
      isEmployed: Math.random() > 0.3,
      hasMedicalInsurance: Math.random() > 0.4,
      isPensioner: age > 60
    });
  }
  
  return citizens;
};

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