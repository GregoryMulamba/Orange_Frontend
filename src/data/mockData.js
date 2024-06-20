// src/data/mockData.js

export const employeurs = [
  { value: "Orange", label: "ORANGE" },
  { value: "Itm", label: "ITM" },
  { value: "Bnw", label: "BENSIZWE" },
];

export const directions = [
  { value: "DG", label: "Direction Générale" },
  { value: "DAF", label: "Direction Financière" },
  { value: "DST", label: "Direction Stratégie et transformation" },
  { value: "DRH", label: "Direction des Ressources Humaines" },
  { value: "DEC", label: "Direction Expérience Client" },
  { value: "DAL", label: "Direction Achats et Logistique" },
  { value: "DJAR", label: "Direction Juridique & Affaires Réglementaire" },
  { value: "B2C", label: "Direction Marketing & Communication B2C" },
  { value: "DVD", label: "Direction de Ventes & Distribution" },
  { value: "B2B", label: "Direction Commercial et Marketing B2B" },
  { value: "OM", label: "Orange Money" },
  { value: "DRSI", label: "DRSI" },
  { value: "GKAT", label: "GRAND KATANGA" },
  { value: "GKAS", label: "GRAND KASAI" },
  { value: "GKIVU", label: "GRAND KIVU" },
  { value: "GNORD", label: "GRAND NORD" },
  { value: "KC", label: "KONGO CENTRAL" },
  { value: "KIN", label: "KINSHASA" },
];

export const agePyramid = [
  { ageRange: '20-25', male: 40, female: 45 },
  { ageRange: '26-30', male: 60, female: 55 },
  { ageRange: '31-35', male: 70, female: 65 },
  { ageRange: '36-40', male: 50, female: 55 },
  { ageRange: '41-45', male: 30, female: 35 },
  { ageRange: '46-50', male: 20, female: 25 },
  { ageRange: '51-55', male: 10, female: 15 },
  { ageRange: '56-60', male: 5, female: 10 },
];

export const agentsByDirection = [
  { direction: 'Direction Générale', count: 15 },
  { direction: 'Direction Financière', count: 30 },
  { direction: 'Direction Stratégie et transformation', count: 25 },
  { direction: 'Direction des Ressources Humaines', count: 20 },
  { direction: 'Direction Expérience Client', count: 40 },
  { direction: 'Direction Achats et Logistique', count: 35 },
  { direction: 'Direction Juridique & Affaires Réglementaire', count: 10 },
  { direction: 'Direction Marketing & Communication B2C', count: 50 },
  { direction: 'Direction de Ventes & Distribution', count: 45 },
  { direction: 'Direction Commercial et Marketing B2B', count: 15 },
  { direction: 'Orange Money', count: 5 },
  { direction: 'DRSI', count: 25 },
  { direction: 'GRAND KATANGA', count: 20 },
  { direction: 'GRAND KASAI', count: 30 },
  { direction: 'GRAND KIVU', count: 35 },
  { direction: 'GRAND NORD', count: 10 },
  { direction: 'KONGO CENTRAL', count: 15 },
  { direction: 'KINSHASA', count: 60 },
];

export const trainingData = [
  {
    id: 1,
    title: 'Formation Leadership',
    type: 'En ligne',
    startDate: '2024-07-01',
    endDate: '2024-07-15',
    duration: 15,
    evaluationDate: '2024-07-16',
  },
  {
    id: 2,
    title: 'Gestion de Projet',
    type: 'En présentiel',
    startDate: '2024-08-01',
    endDate: '2024-08-10',
    duration: 10,
    evaluationDate: '2024-08-11',
  },
  {
    id: 3,
    title: 'Développement Web',
    type: 'En ligne',
    startDate: '2024-09-01',
    endDate: '2024-09-20',
    duration: 20,
    evaluationDate: '2024-09-21',
  },
  {
    id: 4,
    title: 'Marketing Digital',
    type: 'En présentiel',
    startDate: '2024-10-01',
    endDate: '2024-10-07',
    duration: 7,
    evaluationDate: '2024-10-08',
  },
];

export const trainingProgressData = [
  {
    agent: 'John Doe',
    training: 'Formation Leadership',
    progress: 80,
    satisfaction: 4,
  },
  {
    agent: 'Jane Smith',
    training: 'Gestion de Projet',
    progress: 100,
    satisfaction: 5,
  },
  {
    agent: 'Peter Johnson',
    training: 'Développement Web',
    progress: 60,
    satisfaction: 3,
  },
  {
    agent: 'Mary Williams',
    training: 'Marketing Digital',
    progress: 90,
    satisfaction: 4,
  },
];
