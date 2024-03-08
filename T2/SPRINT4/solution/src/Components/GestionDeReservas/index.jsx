import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth.js'; // Importa la función de cierre de sesión
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './GestionReservas.css';
import { db } from '../../firebase/firebase.js'; // Verifica la ruta
import { collection, doc, addDoc, deleteDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';

function GestionReservas() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const horariosDisponibles = ['9:00', '10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  useEffect(() => {
    cargarReservas(formatDate(selectedDate));
  }, [selectedDate]);

  const cargarReservas = async (fecha) => {
    setCargando(true);
    try {
      const q = query(collection(db, "reservas"), where("fecha", "==", fecha));
      const querySnapshot = await getDocs(q);
      const reservasCargadas = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReservas(reservasCargadas);
    } catch (err) {
      setError(err);
    } finally {
      setCargando(false);
    }
  };

  const hacerReserva = async (horario) => {
    setCargando(true);
    try {
      await addDoc(collection(db, "reservas"), {
        fecha: formatDate(selectedDate),
        horario
      });
      cargarReservas(formatDate(selectedDate));
    } catch (err) {
      setError(err);
    } finally {
      setCargando(false);
    }
  };

  const cancelarReserva = async (idReserva) => {
    setCargando(true);
    try {
      await deleteDoc(doc(db, "reservas", idReserva));
      cargarReservas(formatDate(selectedDate));
    } catch (err) {
      setError(err);
    } finally {
      setCargando(false);
    }
  };

  const modificarReserva = async (idReserva, nuevoHorario) => {
    setCargando(true);
    try {
      await updateDoc(doc(db, "reservas", idReserva), {
        horario: nuevoHorario
      });
      cargarReservas(formatDate(selectedDate));
    } catch (err) {
      setError(err);
    } finally {
      setCargando(false);
    }
  };


  const handleLogout = async () => {
    try {
      await doSignOut(); // Llama a la función de cierre de sesión
      navigate('/login'); // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
      // Aquí manejarías cualquier error que ocurra durante el cierre de sesión
      console.error('Error al cerrar la sesión:', error);
      setError('Error al cerrar sesión');
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Filtra los horarios disponibles para quitar los ya reservados
  const horariosDisponiblesParaFecha = horariosDisponibles.filter(horario => 
    !reservas.some(reserva => reserva.horario === horario));
  // El resto del código de UI sigue igual
// Asumiendo que has implementado las funciones y estados previamente descritos
return (
  <div className="gestion-reservas">
    <h2>Calendario de Reservas</h2>
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        minDate={new Date()}
      />
    </div>
    <div className="reservas-container">
      {cargando ? (
        <p>Cargando reservas...</p>
      ) : error ? (
        <p>Error al cargar reservas: {error.message}</p>
      ) : (
        <>
          <h3>Reservas para {formatDate(selectedDate)}</h3>
          <ul className="reservas-lista">
            {reservas.map(({ id, horario }) => (
              <li key={id} className="reserva-item">
                {horario}
                <button onClick={() => cancelarReserva(id)} className="btn btn-cancelar">Cancelar</button>
                <button onClick={() => {
                  const nuevoHorario = prompt("Ingrese el nuevo horario (HH:MM)", horario);
                  if (nuevoHorario) modificarReserva(id, nuevoHorario);
                }} className="btn btn-modificar">Modificar</button>
              </li>
            ))}
          </ul>
          <h4>Añadir Nueva Reserva</h4>
          <div className="horarios-disponibles">
            {horariosDisponiblesParaFecha.length > 0 ? (
              horariosDisponiblesParaFecha.map((horario) => (
                <button key={horario} onClick={() => hacerReserva(horario)} className="btn btn-reservar">
                  Reservar {horario}
                </button>
              ))
              ) : (
                <p>No hay horarios disponibles para esta fecha.</p>
                )}
          </div>
          <button onClick={handleLogout} className="btn btn-logout">Cerrar Sesión</button>
        </>
      )}
    </div>
  </div>
);
}

export default GestionReservas;


