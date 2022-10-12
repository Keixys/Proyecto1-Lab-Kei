import cipher from './cipher.js';



//boton ingreso de texto
let cifrarboton= document.getElementById("cifrarboton");
cifrarboton.addEventListener("click", () => {
    const ingresoText= document.getElementById("ingresoText").value.toUpperCase();
    let desplazamiento=document.getElementById("desplazamiento").value;
    document.getElementById("textsale").value = cipher.encode(desplazamiento,ingresoText);
 
});

//boton descifro texto
let descifrarboton0 = document.getElementById("descifrarboton0");
descifrarboton0.addEventListener("click" , () => {
    const ingresoText= document.getElementById("textsale").value.toUpperCase();
    let desplazamiento=document.getElementById("desplazamiento").value;
    document.getElementById("ingresoText").value = cipher.decode(desplazamiento,ingresoText);
});






