import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormularioRegistro() {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    alert('Formulario enviado con éxito');
    console.log(data); // Aquí puedes enviar los datos al servidor o realizar cualquier otra acción
    reset() // Resetear el formulario después de enviarlo
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombres:</label>
          <Controller
            control={control}
            name="nombres"
            rules={{ required: 'Los nombres son obligatorios' }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
              />
            )}
          />
          <span style={{ color: 'red' }}>{errors.nombres && errors.nombres.message}</span>
        </div>

        <div>
          <label>Apellidos:</label>
          <Controller
            control={control}
            name="apellidos"
            rules={{ required: 'Los apellidos son obligatorios' }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
              />
            )}
          />
          <span style={{ color: 'red' }}>{errors.apellidos && errors.apellidos.message}</span>
        </div>

        <div>
          <label>Correo electrónico:</label>
          <Controller
            control={control}
            name="email"
            rules={{ 
              required: 'El correo electrónico es obligatorio',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Ingrese un formato de correo electrónico válido'
              }
            }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
              />
            )}
          />
          <span style={{ color: 'red' }}>{errors.email && errors.email.message}</span>
        </div>

        <div>
          <label>Contraseña:</label>
          <Controller
            control={control}
            name="password"
            rules={{ 
              required: 'La contraseña es obligatoria',
              minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' }
            }}
            render={({ field }) => (
              <input
                type="password"
                {...field}
              />
            )}
          />
          <span style={{ color: 'red' }}>{errors.password && errors.password.message}</span>
        </div>

        {/* Agregar más campos de entrada utilizando Controller si es necesario */}

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default FormularioRegistro;
