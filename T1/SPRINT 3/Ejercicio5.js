function ordenarTabla(personas, columna) {
  let ordenAscendente = true;

  if (personas.length === 0) {
    console.log("La tabla está vacía.");
    return;
  }

  if (columna === ordenarTabla.columnaActual) {
    ordenAscendente = !ordenarTabla.ordenAscendente;
  } else {
    ordenarTabla.columnaActual = columna;
    ordenarTabla.ordenAscendente = true;
  }

  personas.sort((a, b) => {
    const valorA = obtenerValorParaOrdenar(a[columna]);
    const valorB = obtenerValorParaOrdenar(b[columna]);

    if (typeof valorA === 'string') {
      // Comparar cadenas de texto de manera insensible
      return ordenAscendente ? valorA.localeCompare(valorB) : valorB.localeCompare(valorA);
    } else {
      // Comparar valores numéricos
      return ordenAscendente ? valorA - valorB : valorB - valorA;
    }
  });

  actualizarTablaHTML(personas);
}

// Función para obtener el valor adecuado para ordenar
function obtenerValorParaOrdenar(valor) {
  const date = new Date(valor);
  
  // Verificar si la conversión a fecha es válida
  if (!isNaN(date.getTime())) {
    return date;
  } else {
    // Si no es una fecha, devolver el valor tal cual
    return valor;
  }
}


// Función para generar la tabla en HTML a partir de un array de personas
function generarTablaHTML(personas) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const encabezado = document.createElement("tr");
  for (const clave in personas[0]) {
    const th = document.createElement("th");
    th.textContent = clave;
    th.addEventListener("click", () => ordenarTabla(personas, clave));
    encabezado.appendChild(th);
  }
  thead.appendChild(encabezado);

  for (const persona of personas) {
    const fila = document.createElement("tr");
    for (const clave in persona) {
      const td = document.createElement("td");
      td.textContent = persona[clave];
      fila.appendChild(td);
    }
    tbody.appendChild(fila);
  }

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

// Función para actualizar la tabla en HTML después de ordenar
function actualizarTablaHTML(personas) {
  const table = document.querySelector("table");
  const tbody = document.createElement("tbody");

  for (const persona of personas) {
    const fila = document.createElement("tr");
    for (const clave in persona) {
      const td = document.createElement("td");
      td.textContent = persona[clave];
      fila.appendChild(td);
    }
    tbody.appendChild(fila);
  }

  // Reemplazar el antiguo tbody con el nuevo
  table.replaceChild(tbody, table.querySelector("tbody"));
}

// Ejemplo de uso
var tablaPersonas = [
  {
    Nombre: "Ana",
    Edad: 25,
    DNI: "45678912B",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "12/05/1998"
  },
  {
    Nombre: "Carlos",
    Edad: 30,
    DNI: "12345678A",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "05/02/1993"
  },
  {
    Nombre: "Berta",
    Edad: 28,
    DNI: "98765432C",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "20/03/1995"
  },
  {
    Nombre: "David",
    Edad: 31,
    DNI: "11223344D",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "18/08/1992"
  },
    {
  Nombre: "Elena",
  Edad: 22,
  DNI: "34567890E",
  "Tiene/No tiene hijos": "No tiene",
  "Fecha de nacimiento": "15/09/2001"
},
{
  Nombre: "Fernando",
  Edad: 35,
  DNI: "56789012F",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "10/12/1988"
},
{
  Nombre: "Gloria",
  Edad: 27,
  DNI: "67890123G",
  "Tiene/No tiene hijos": "No tiene",
  "Fecha de nacimiento": "25/03/1996"
},
{
  Nombre: "Hugo",
  Edad: 29,
  DNI: "78901234H",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "08/07/1994"
},
{
  Nombre: "Irene",
  Edad: 31,
  DNI: "89012345I",
  "Tiene/No tiene hijos": "No tiene",
  "Fecha de nacimiento": "19/02/1992"
},
{
  Nombre: "Juan",
  Edad: 26,
  DNI: "90123456J",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "14/11/1997"
},
{
  Nombre: "Karla",
  Edad: 33,
  DNI: "01234567K",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "30/06/1989"
},
{
  Nombre: "Luisa",
  Edad: 28,
  DNI: "12345678L",
  "Tiene/No tiene hijos": "No tiene",
  "Fecha de nacimiento": "22/04/1995"
},
{
  Nombre: "Mario",
  Edad: 24,
  DNI: "23456789M",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "03/01/1999"
},
{
  Nombre: "Natalia",
  Edad: 32,
  DNI: "34567890N",
  "Tiene/No tiene hijos": "No tiene",
  "Fecha de nacimiento": "11/08/1990"
},
{
  Nombre: "Óscar",
  Edad: 30,
  DNI: "45678901O",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "17/06/1993"
},
{
  Nombre: "Patricia",
  Edad: 29,
  DNI: "56789012P",
  "Tiene/No tiene hijos": "No tiene",
  "Fecha de nacimiento": "09/05/1994"
},
{
  Nombre: "Quintín",
  Edad: 26,
  DNI: "67890123Q",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "26/12/1997"
},
{
  Nombre: "Raquel",
  Edad: 34,
  DNI: "78901234R",
  "Tiene/No tiene hijos": "No tiene",
  "Fecha de nacimiento": "07/03/1989"
},
{
  Nombre: "Santiago",
  Edad: 27,
  DNI: "89012345S",
  "Tiene/No tiene hijos": "Tiene",
  "Fecha de nacimiento": "04/10/1996"
}
];

// Generar la tabla en HTML y agregarla al cuerpo del documento
document.body.appendChild(generarTablaHTML(tablaPersonas));

// Variables adicionales para mantener el estado de la ordenación
ordenarTabla.columnaActual = null;
ordenarTabla.ordenAscendente = true;

  