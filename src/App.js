// App.js
import React, { useState } from 'react';
import axios from 'axios';
import api from './services/api';


function App() {
  const [rainfallData, setRainfallData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ device: '', measurement: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/rainfall', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Enviar Dados de Volumetria de Chuva</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dispositivo:</label>
          <input type="text" name="device" value={formData.device} onChange={handleChange} />
        </div>
        <div>
          <label>Medição:</label>
          <input type="number" name="measurement" value={formData.measurement} onChange={handleChange} />
        </div>
        <button type="submit" disabled={loading}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
