function agregarALista() {
    var nuevoElemento = document.getElementById('nuevoElemento').value;

    var listItem = document.createElement('li');
    
    listItem.textContent = nuevoElemento;
    

    document.getElementById('miLista').appendChild(listItem);
    
    document.getElementById('nuevoElemento').value = '';
}