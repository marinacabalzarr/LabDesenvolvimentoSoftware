import api from './api';

export const getProfessores = async () => {
  try {
    const response = await api.get('/professores');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar professores:', error);
    throw error;
  }
};
