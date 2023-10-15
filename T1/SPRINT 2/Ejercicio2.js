function calcularArea() {
    var ancho = parseFloat(document.getElementById('ancho').value);
    var alto = parseFloat(document.getElementById('alto').value);
    
    if (isNaN(ancho) || isNaN(alto)) {
        alert('Por favor, ingrese valores numéricos para el ancho y el alto.');
        return;
    }
    
    var area = ancho * alto;
    
    document.getElementById('resultado').innerHTML = 'El área del rectángulo es: ' + area;
}