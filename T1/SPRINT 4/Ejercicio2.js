async function compararPokemon() {
    try {
      const nombrePokemon1 = document.getElementById('pokemon1').value;
      const nombrePokemon2 = document.getElementById('pokemon2').value;
  
      const datosPokemon1 = await obtenerDatosPokemon(nombrePokemon1);
      const datosPokemon2 = await obtenerDatosPokemon(nombrePokemon2);

      const tablaHTML = `
        <table border="1">
          <tr>
            <th></th>
            <th>${datosPokemon1.name}</th>
            <th>${datosPokemon2.name}</th>
          </tr>
          <tr>
            <td>ID</td>
            <td>${datosPokemon1.id}</td>
            <td>${datosPokemon2.id}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>${datosPokemon1.stats[0].base_stat}</td>
            <td>${datosPokemon2.stats[0].base_stat}</td>
          </tr>
          <tr>
            <td>Ataque</td>
            <td>${datosPokemon1.stats[1].base_stat}</td>
            <td>${datosPokemon2.stats[1].base_stat}</td>
          </tr>
          <tr>
            <td>Defensa</td>
            <td>${datosPokemon1.stats[2].base_stat}</td>
            <td>${datosPokemon2.stats[2].base_stat}</td>
          </tr>
          <tr>
            <td></td>
            <td><img src="${datosPokemon1.sprites.front_default}" alt="Imagen de ${datosPokemon1.name}"></td>
            <td><img src="${datosPokemon2.sprites.front_default}" alt="Imagen de ${datosPokemon2.name}"></td>
          </tr>
          <tr>
          <td>Velocidad</td>
          <td>${datosPokemon1.stats[5].base_stat}</td>
          <td>${datosPokemon2.stats[5].base_stat}</td>
        </tr>
        <tr>
          <td>Habilidad 1</td>
          <td>${datosPokemon1.abilities[0].ability.name}</td>
          <td>${datosPokemon2.abilities[0].ability.name}</td>
        </tr>
        <tr>
          <td>Habilidad 2</td>
          <td>${datosPokemon1.abilities[1] ? datosPokemon1.abilities[1].ability.name : 'N/A'}</td>
          <td>${datosPokemon2.abilities[1] ? datosPokemon2.abilities[1].ability.name : 'N/A'}</td>
        </tr>
      </table>
      <p>${calcularGanador(datosPokemon1, datosPokemon2)}</p>
    `;
  
      const contenedorComparativa = document.getElementById('comparativaInfo');
      contenedorComparativa.innerHTML = tablaHTML;
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  

  
function calcularGanador(pokemon1, pokemon2) {
  const statsPokemon1 = pokemon1.stats.reduce((total, stat) => total + stat.base_stat, 0);
  const statsPokemon2 = pokemon2.stats.reduce((total, stat) => total + stat.base_stat, 0);

  if (statsPokemon1 > statsPokemon2) {
      return `${pokemon1.name} es el ganador en estadísticas.`;
  } else if (statsPokemon1 < statsPokemon2) {
      return `${pokemon2.name} es el ganador en estadísticas.`;
  } else {
      return 'Ambos Pokémon tienen estadísticas iguales.';
  }
}

async function obtenerDatosPokemon(nombrePokemon) {
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
      
      if (!respuesta.ok) {
        throw new Error(`No se pudo obtener información del Pokémon. Código de estado: ${respuesta.status}`);
      }
  
      const datosPokemon = await respuesta.json();
  
      return datosPokemon;
    } catch (error) {
      throw new Error(`Error al obtener datos del Pokémon: ${error.message}`);
    }
  }
  