import axios from 'axios';

const API_URL = 'https://url-da-sua-api-da-CIoTD.com';

// Função para listar dispositivos
export const listDevices = async () => {
  try {
    const response = await axios.get(`${API_URL}/device`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de dispositivos:', error);
    throw error;
  }
};

// Função para cadastrar um novo dispositivo
export const createDevice = async (deviceData) => {
  try {
    const response = await axios.post(`${API_URL}/device`, deviceData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar dispositivo:', error);
    throw error;
  }
};

// Outras funções para obter detalhes de dispositivo, atualizar dispositivo, remover dispositivo, etc.

export default api;