/* eslint-disable no-console */
const cipher = {

  encode: function(ingresoText, desplazamiento) {


    // creamos un resultado vacio
    let resultado = "";

    //recorro letra por letra
    for (let i = 0; i < ingresoText.length; i++) {

      //obtener el valor de cada letra y se transforma a ASCI
      
      const valorxletra = ingresoText.charCodeAt(i);
  
      
      //ver silas letras entan dentro del codigo
      if (valorxletra >= 65 && valorxletra <= 90) {

        //entra la formula
        console.log(((valorxletra - 65 + desplazamiento) % 26 + 65) )
       resultado += String.fromCharCode(((valorxletra - 65 + desplazamiento) % 26 + 65) );
        
      }

      //sino esta la letra
      else {
        return  ingresoText.charAt(i);
      

      }
    }
    console.log(resultado)
  return resultado
  
  }

};

export default cipher;


  
  
  





//Posicion de mi letra
//cantidad de espacios que se va a mover
//eso entre el residuo de 26