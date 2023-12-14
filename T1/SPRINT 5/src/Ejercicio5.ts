// main.ts

interface Pokemon {
  name: string;
  id: number;
  sprites: {
      front_default: string;
  };
  types: {
      type: {
          name: string;
      };
  }[];
  stats: {
      base_stat: number;
      stat: {
          name: string;
      };
  }[];
  moves: {
      move: {
          name: string;
      };
  }[];
  species: {
      name: string;
      url: string;
  };
}

async function buscarPokemon() {
  const inputElement = document.getElementById('pokemonInput') as HTMLInputElement;
  const pokemonNameOrId = inputElement.value.toLowerCase();

  try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
      const data: Pokemon = await response.json();

      mostrarInfoPokemon(data);
  } catch (error) {
      console.error('Error al buscar Pokémon:', error);
      mostrarError();
  }
}


async function mostrarInfoPokemon(data: Pokemon) {
  const pokemonInfoElement = document.getElementById('pokemonInfo');

  if (!pokemonInfoElement) {
      console.error('Elemento de información del Pokémon no encontrado.');
      return;
  }

  const evolutionInfoElement = document.createElement('div');
  evolutionInfoElement.id = 'evolutionInfo';

  pokemonInfoElement.innerHTML = `
      <h2>${data.name} (ID: ${data.id})</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
      <p><strong>Estadísticas:</strong></p>
      <ul>
          ${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
      </ul>
      <p><strong>Movimientos:</strong></p>
      <ul>
          ${data.moves.map(move => `<li>${move.move.name}</li>`).join('')}
      </ul>
      <p><strong>Evoluciones:</strong></p>
  `;

  pokemonInfoElement.appendChild(evolutionInfoElement);

  try {
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();
      const evolutionChainUrl = speciesData.evolution_chain.url;

      if (evolutionChainUrl) {
          const evolutionResponse = await fetch(evolutionChainUrl);
          const evolutionData = await evolutionResponse.json();
          mostrarInfoEvoluciones(evolutionData, evolutionInfoElement);
      }
  } catch (error) {
      console.error('Error al obtener información de evoluciones:', error);
      mostrarError();
  }

  pokemonInfoElement.classList.remove('hidden');
}

function mostrarInfoEvoluciones(evolutionData: any, evolutionInfoElement: HTMLElement) {
  if (!evolutionInfoElement) {
      console.error('Elemento de información de evoluciones no encontrado.');
      return;
  }

  function mostrarEvolucionesRecursivo(chain: any) {
      evolutionInfoElement.innerHTML += `
          <p>${chain.species.name}</p>
      `;

      if (chain.evolves_to && chain.evolves_to.length > 0) {
          evolutionInfoElement.innerHTML += '<ul>';
          for (const evolution of chain.evolves_to) {
              mostrarEvolucionesRecursivo(evolution);
          }
          evolutionInfoElement.innerHTML += '</ul>';
      }
  }

  mostrarEvolucionesRecursivo(evolutionData.chain);
}

function mostrarError() {
  const pokemonInfoElement = document.getElementById('pokemonInfo');
  const evolutionInfoElement = document.getElementById('evolutionInfo');

  if (pokemonInfoElement) {
      pokemonInfoElement.innerHTML = '<p class="warning">Error: Pokémon no encontrado.</p>';
      pokemonInfoElement.classList.remove('hidden');
  }

  if (evolutionInfoElement) {
      evolutionInfoElement.innerHTML = '';
  }
}

