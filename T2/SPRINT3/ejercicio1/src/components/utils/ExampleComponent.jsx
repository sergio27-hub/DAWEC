import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/Api';

function ExampleComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchData('data');
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>Error al cargar datos: {error.message}</p>;
  }

  return (
    <div>
      <h2>Datos Recibidos:</h2>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExampleComponent;
