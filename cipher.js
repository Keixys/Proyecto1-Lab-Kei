/* eslint-disable no-console */
const cipher = {

  encode: function(desplazamiento,ingresoText) {
    if(desplazamiento === undefined || ingresoText === undefined){
     throw new TypeError ("Te falto escribiir un dato")
    }
    else if (desplazamiento === 0 || ingresoText === typeof 0 ) {
      throw new TypeError ("Solo puedes escribir letras")
    }
    else if (desplazamiento === null ||ingresoText === null){
     throw new TypeError ("Ingresa un valor valido")}

    // creamos un resultado vacio
    let resultado = "";

    //recorro letra por letra
    for (let i = 0; i < ingresoText.length; i++) {

      //obtener el valor de cada letra y se transforma a ASCI
         const valorxletra = ingresoText.charCodeAt(i);
  
      //ver silas letras entan dentro del codigo
      if (valorxletra >= 65 && valorxletra <= 90) {

       //entra la formula
        let loquenosale = (valorxletra - 65 + Number(desplazamiento)) % 26 + 65;
        console.log(loquenosale);
        resultado += String.fromCharCode(loquenosale);
      }

      //sino esta la letra
      else {
      resultado += ingresoText[i];
      }
    }

    console.log(resultado)
  return resultado

  
  
  
  },


  decode: function (desplazamiento,ingresoText) {
    if(desplazamiento === undefined || ingresoText === undefined) {
      throw new TypeError ("Te falto escribiir un dato")
     }
     else if (desplazamiento=== 0 || ingresoText=== typeof 0 ) {
       throw new TypeError ("Solo puedes escribir letras")
     }
     else if (desplazamiento === null ||ingresoText === null){
      throw new TypeError ("Ingresa un valor valido")}

    // creamos un resultado vaci
    let resultado = "";

    //recorro letra por letra
    for (let i = 0; i < ingresoText.length; i++) {

      //obtener el valor de cada letra y se transforma a ASCI
      const valorxletra = ingresoText.charCodeAt(i);

      //ver silas letras entan dentro del codigo
      if (valorxletra >= 65 && valorxletra <= 90) {

        //entra la formula
        let loquenosale = (valorxletra - 90 - Number(desplazamiento)) % 26 + 90;
        console.log(loquenosale)
        resultado += String.fromCharCode(loquenosale);
      }


      //sino esta la letra
      else {
        resultado += ingresoText[i];
      }
    }

    console.log(resultado);
    return resultado;

  },
  
};

export default cipher;
