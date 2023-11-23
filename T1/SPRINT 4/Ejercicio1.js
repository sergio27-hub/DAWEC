async function obtenerInfoPokemon() {
    try {
      // Obtener el nombre del Pokémon desde el campo de entrada
      const nombrePokemon = document.getElementById('pokemon').value.trim().toLowerCase();

      if (!nombrePokemon) {
        throw new Error('Por favor, ingresa el nombre de un Pokémon.');
    }
  
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);

      
      if (!respuesta.ok) {
        // Verificar si el error es porque el Pokémon no fue encontrado
        if (respuesta.status === 404) {
            throw new Error('No existe ese Pokémon. Ingresa otro nombre.');
        } else {
            throw new Error(`No se pudo obtener información del Pokémon. Código de estado: ${respuesta.status}`);
        }
    }
  
      // Obtener datos del JSON
      const datosPokemon = await respuesta.json();
  
      const contenidoHTML = `
        <h2>${datosPokemon.name}</h2>
        <p>ID: ${datosPokemon.id}</p>
        <p>Tipos: ${datosPokemon.types.map(type => type.type.name).join(', ')}</p>
        <img src="${datosPokemon.sprites.front_default}" alt="Imagen de ${datosPokemon.name}">
      `;

      const contenedorPokemon = document.getElementById('pokemonInfo');
      contenedorPokemon.innerHTML = contenidoHTML;
    } catch (error) {
      alert(error.message);
  }
  }
  
  