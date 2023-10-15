document.addEventListener("DOMContentLoaded" , function(){

    const color =  document.getElementById("ColorCambio");

    color.addEventListener("click", function(){

        const Randomcolor = CambiarColor();

        color.style.background = Randomcolor;
    });
    
});

function CambiarColor(){

    const letters = "0123456789ABCDEF";
    let Randomcolor = "#";
    for (let i = 0; i < 6; i++) {
        Randomcolor += letters[Math.floor(Math.random() * 16)];
    }
    return Randomcolor;
}

