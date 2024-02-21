# T2 SPRINT 2 (REACT) <img src="public/IMAGES//logoReact.png" alt="Logito" width="60" allign="left" padding="20">

 ## ANÁLISIS DEL PROBLEMA <img src="public/IMAGES/lapiz.png" alt="Logito" width="60" allign="left">


### Ejercicio 1: Navegación con Parámetros de Ruta

#### Objetivo:
Crear una aplicación simple de perfil de usuario que utilice React Router para la navegación, donde cada perfil tenga su propia URL basada en el ID del usuario.

#### Tareas:
1. **Configurar React Router en tu aplicación:**
   - Asegúrate de que React Router esté instalado usando `npm install react-router-dom`.
   - Envuelve tu componente App con `<BrowserRouter>` en el punto de entrada de tu aplicación.

2. **Crear dos componentes: Inicio y PerfilUsuario:**
   - El componente Inicio debe mostrar un mensaje de bienvenida y enlaces a perfiles de usuario ficticios.
   - El componente PerfilUsuario debe extraer el ID del usuario de los parámetros de ruta y mostrar un mensaje simple, como "Perfil del Usuario: [ID]".

3. **Configurar las rutas en tu componente App:**
   - Utiliza `<Switch>` y `<Route>` para configurar tus rutas. Debes tener una ruta para el componente Inicio (por ejemplo, /) y otra para PerfilUsuario (por ejemplo, /usuario/:id).

4. **Usar `<Link>` para la navegación:**
   - En el componente Inicio, crea enlaces (`<Link>`) que lleven al usuario a diferentes perfiles, modificando el ID en la URL.

5. **Extracción de parámetros de ruta en PerfilUsuario:**
   - En PerfilUsuario, utiliza `useParams` para obtener el ID del usuario de la URL y mostrarlo en la página.

#### Prueba:
- Navega a la página de inicio y verifica que los enlaces a los perfiles de usuario se muestran correctamente.
- Haz clic en los enlaces para asegurarte de que la URL cambia y que el componente PerfilUsuario muestra el ID correcto del usuario.

### Ejercicio 2: Gestión de Formularios y Validaciones con React Hook Form

#### Objetivo:
Crear un formulario de contacto simple que valide la entrada del usuario antes de mostrar un mensaje de éxito, utilizando React Hook Form.

#### Tareas:
1. **Instalar React Hook Form:**
   - Ejecuta `npm install react-hook-form` para añadir React Hook Form a tu proyecto.

2. **Crear un componente FormularioContacto:**
   - Este componente debe contener un formulario con campos para el nombre, email, y un mensaje. Utiliza `useForm` de React Hook Form para gestionar el formulario.

3. **Agregar validaciones a los campos del formulario:**
   - Utiliza las opciones de validación de React Hook Form para requerir todos los campos. Añade validación específica para el campo de email, asegurándote de que tenga un formato de correo electrónico válido.

4. **Mostrar mensajes de error para validaciones fallidas:**
   - Utiliza `<span>` o cualquier otro elemento HTML para mostrar mensajes de error debajo de cada campo si no pasa la validación.

5. **Manejar el envío del formulario:**
   - En el evento onSubmit, simplemente muestra un mensaje de alerta que diga "Formulario enviado con éxito" si el formulario es válido.

6. **Integrar el componente FormularioContacto en tu aplicación:**
   - Asegúrate de que el componente FormularioContacto se muestre correctamente en tu aplicación.

#### Prueba:
- Intenta enviar el formulario sin completar todos los campos para ver los mensajes de error.
- Completa el formulario con datos inválidos (como un correo electrónico incorrecto) para verificar las validaciones específicas.
- Envía el formulario con todos los campos válidos para asegurarte de que se muestra el mensaje de éxito.


### Ejercicio 3: Buscador de Películas con API Externa

#### Objetivo:
Crear una aplicación que permita a los usuarios buscar películas por nombre usando la API de OMDB (Open Movie Database) y mostrar los resultados en la página.

#### Tareas:
1. **Configuración inicial:**
   - Obtén una API key gratuita registrándote en OMDB API.
   - Crea un nuevo componente llamado `BuscadorPeliculas`.

2. **Crear un formulario de búsqueda:**
   - Incluye un input de texto para el término de búsqueda y un botón para enviar la búsqueda.
   - Maneja el estado del término de búsqueda en el componente.

3. **Realizar la petición a la API de OMDB:**
   - Utiliza fetch para realizar una petición a la API de OMDB cuando el usuario envíe el formulario. Usa el término de búsqueda del estado para buscar películas por nombre.
   - Ejemplo de URL de petición: `https://www.omdbapi.com/?s={termino_de_busqueda}&apikey={tu_api_key}`

4. **Mostrar resultados de búsqueda:**
   - Almacena los resultados de la búsqueda en el estado del componente.
   - Muestra una lista de películas que coincidan con el término de búsqueda. Cada elemento de la lista debe incluir al menos el título de la película y el año de lanzamiento.

5. **Manejo de errores y estados de carga:**
   - Implementa un indicador de carga que se muestre mientras se está realizando la petición a la API.
   - Muestra mensajes adecuados en caso de que la búsqueda no arroje resultados o si ocurre un error en la petición.

#### Prueba:
- Realiza búsquedas de películas para asegurarte de que los resultados se muestran correctamente.
- Prueba el manejo de errores y el indicador de carga para verificar que funcionan como se espera.
### Ejercicio 3: Buscador de Películas con API Externa

#### Objetivo:
Crear una aplicación que permita a los usuarios buscar películas por nombre usando la API de OMDB (Open Movie Database) y mostrar los resultados en la página.

#### Tareas:
1. **Configuración inicial:**
   - Obtén una API key gratuita registrándote en OMDB API.
   - Crea un nuevo componente llamado `BuscadorPeliculas`.

2. **Crear un formulario de búsqueda:**
   - Incluye un input de texto para el término de búsqueda y un botón para enviar la búsqueda.
   - Maneja el estado del término de búsqueda en el componente.

3. **Realizar la petición a la API de OMDB:**
   - Utiliza fetch para realizar una petición a la API de OMDB cuando el usuario envíe el formulario. Usa el término de búsqueda del estado para buscar películas por nombre.
   - Ejemplo de URL de petición: `https://www.omdbapi.com/?s={termino_de_busqueda}&apikey={tu_api_key}`

4. **Mostrar resultados de búsqueda:**
   - Almacena los resultados de la búsqueda en el estado del componente.
   - Muestra una lista de películas que coincidan con el término de búsqueda. Cada elemento de la lista debe incluir al menos el título de la película y el año de lanzamiento.

5. **Manejo de errores y estados de carga:**
   - Implementa un indicador de carga que se muestre mientras se está realizando la petición a la API.
   - Muestra mensajes adecuados en caso de que la búsqueda no arroje resultados o si ocurre un error en la petición.

#### Prueba:
- Realiza búsquedas de películas para asegurarte de que los resultados se muestran correctamente.
- Prueba el manejo de errores y el indicador de carga para verificar que funcionan como se espera.





#### Especificaciones
  **Prueba: Asegúrate de que la aplicación permite añadir, eliminar, filtrar y marcar tareas. Verifica que las tareas persisten al recargar la página.**
  
### Ejercicio 4: Actualización de Perfil de Usuario con Autenticación

#### Objetivo:
Crear una aplicación que permita a los usuarios registrarse, iniciar sesión y actualizar su perfil, incluyendo la carga de una imagen de perfil, interactuando con una API que requiere autenticación.

#### Tareas:
1. **Configuración inicial y elección de API:**
   - Utiliza una API que ofrezca autenticación y operaciones de perfil de usuario, como Firebase Auth para la autenticación y Cloud Storage para las imágenes. Si prefieres una alternativa, puedes simular las operaciones con JSON Placeholder y agregar autenticación ficticia.

2. **Implementación de Autenticación:**
   - Crea componentes para el registro y el inicio de sesión de usuarios.
   - Implementa la lógica de autenticación usando la API seleccionada, gestionando tokens JWT o cualquier mecanismo de autenticación proporcionado por la API.

3. **Interfaz de Usuario para el Perfil:**
   - Desarrolla un componente `PerfilUsuario` donde los usuarios puedan ver y editar su información de perfil, incluido el nombre, correo electrónico y la imagen de perfil.
   - Asegúrate de que solo los usuarios autenticados puedan acceder a esta página.

4. **Carga y Actualización de la Imagen de Perfil:**
   - Incorpora un formulario en el componente `PerfilUsuario` que permita a los usuarios subir o cambiar su imagen de perfil.
   - Utiliza la API para subir la imagen al servidor o almacenamiento en la nube y actualizar la URL de la imagen en el perfil del usuario.

5. **Actualización de Datos del Perfil:**
   - Permite a los usuarios modificar su información de perfil (nombre, correo electrónico) a través de un formulario.
   - Al enviar el formulario, realiza una petición PUT o PATCH a la API para actualizar la información en el servidor, asegurándote de que la solicitud incluya la autenticación del usuario.

6. **Manejo de Sesiones y Protección de Rutas:**
   - Implementa el manejo de sesiones para mantener a los usuarios conectados.
   - Protege las rutas relacionadas con el perfil de usuario para asegurar que solo los usuarios autenticados puedan acceder a ellas.

#### Consideraciones adicionales:
- Implementa validaciones en los formularios de registro, inicio de sesión y actualización de perfil para mejorar la experiencia del usuario.
- Maneja los estados de carga y los mensajes de error o éxito al interactuar con la API.

#### Prueba:
Realiza pruebas de registro e inicio de sesión para verificar la autenticación y el manejo de sesiones.
Prueba la funcionalidad de actualización de perfil, incluida la carga de la imagen, para asegurarte de que los cambios se reflejan correctamente en la interfaz de usuario y en el servidor. Básicamente, cambiar la foto de perfil del usuario y que se refleje en el mismo al cerrar sesión e iniciar de nuevo.



## Solucion del Problema 
## Ejercicio 1: Navegación con Parámetros de Ruta
```javascript
/*components/pages/inicio.jsx*/
import React from 'react';
import '../../App.css';
function Inicio() {
  return (
    <div className='Inicio'>
      <h1>Bienvenido a la aplicación</h1>
      <p>Esta es la página de inicio A continuación introduce : </p>
      <p> "user/id:" y encuentra el Perfil deseado  </p>
    </div>
  );
}

export default Inicio;

/*components/PerfildeUsuario.jsx*/
import React from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';

function PerfilDeUsuario() {
  const { userId } = useParams();

  return (
    <div className='PerfilDeUsuario'>
      <h1>Perfil del Usuario: {userId}</h1>
      {/* Aquí podrías hacer una solicitud a la API para obtener información sobre el usuario */}
    </div>
  );
}

export default PerfilDeUsuario;
```
```javascript
/*App.jsx*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import  Navbar from './components/layouts/navbar.jsx';
import  Inicio from './components/pages/Inicio.jsx';
import  PerfilDeUsuario from './components/pages/PerfildeUsuario.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/user/:userId" component={PerfilDeUsuario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

```
## Ejercicio 2: Ejercicio 2: Gestión de Formularios y Validaciones con React Hook Form
```javascript
// formularioRegistro/index.jsx
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




/*app.jsx*/
import React from 'react';
import FormularioRegistro from './components/formularioRegistro';
import './App.css';

function App() {
  return (
    <div>
      <h1>Registro de Usuario</h1>
      <FormularioRegistro />
    </div>
  );
}

export default App;

```

## Ejercicio 3: Buscador de Películas con API Externa
```javascript
import React, { useState } from 'react';

function BuscadorPeliculas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const apiKey = 'b7079c65';
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError('No se encontraron películas.');
      }
    } catch (error) {
      setError('Hubo un error al buscar películas.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar películas..."
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="poster"
            />
            <div className="title">{movie.Title}</div>
            <div className="year">{movie.Year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscadorPeliculas;


/*app.jsx*/
import React from 'react';
import './App.css';
import BuscadorPeliculas from './components/BuscadorDePeliculas/index.jsx';

function App() {
  return (
    <div>
      <h1>Buscador de Peliculas</h1>
      <BuscadorPeliculas />
    </div>  
  );
}

export default App;

```
## Ejercicio 4: Actualización de Perfil de Usuario con Autenticación
```javascript
/*src/components/auth/login/index.jsx*/
/*src/components/auth/register/index.jsx*/
/*src/components/auth/userProfile/index.jsx*/
/*src/App.jsx*/

```

## Pruebas <img src="Public/lupa.png" alt="Logito" width="60" allign="left">
### -> Plan de Pruebas :

- Ejercicio 1
![excel plan de pruebas](Public/IMAGES/1.png)

- Ejercicio 2
![excel plan de pruebas](Public/IMAGES/2.png)
- Ejercicio 3
![excel plan de pruebas](Public/IMAGES/3.png)
- Ejercicio 4
![excel plan de pruebas](Public/IMAGES/4.png)


### Ejercicio 1 :
![ejercicio 1](Public/GIF/1.gif)
### Ejercicio 2 :
![ejercicio 2](Public/GIF/2.gif)

### Ejercicio 3 :
![ejercicio 3](Public/GIF/3.gif)

### Ejercicio 4 :

![ejercicio 4](Public/GIF/4.gif)
![ejercicio 4.1](Public/GIF/4.1.gif)
