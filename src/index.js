import cipher from './cipher.js';



//boton ingreso de texto
let cifrarboton= document.getElementById("cifrarboton");
cifrarboton.addEventListener("click", () => {
    const ingresoText= document.getElementById("ingresoText").value.toUpperCase();
    let desplazamiento=document.getElementById("desplazamiento").value;
   cipher.encode(ingresoText, desplazamiento);
 
});

//boton descifro texto
let descifrarboton0 = document.getElementById("descifrarboton0");
descifrarboton0.addEventListener("click" , () => {
    const ingresoText= document.getElementById("ingresoText").value.toUpperCase();
    let desplazamiento=document.getElementById("desplazamiento").value;
    cipher.decode(ingresoText,desplazamiento)
});






