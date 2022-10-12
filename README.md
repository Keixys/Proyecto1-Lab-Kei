# CODIFY

Cree CODIFY para que ayude a aquel que lo necesite, esta dirigida al publico y a empresas que deseen implementar nuevos mensajes y claves encriptadas para mayor seguridad, comodidad y facilidad.

***
 
## SEGURIDAD, COMODIDAD Y FACILIDAD
 
Esta pagina web esta pensada para Maria, les comento su caso. 

Maria es una señora de 50 años que nunca se acuerda de su clave de gmail, siempre que le toca entrar le abren uno nuevo porque nunca se recuerda de la contraseña. Pero su familia consiguio esta pagina para ella, ahora Maria solo entra a nuestra pagina coloca su nombre y el desplazamiento del numero de su cumpleaños. Y listo Maria tiene la facilidad de tener una clave segura y facil en 3 simples pasos:

1.Coloca el numero de desplazamiento que desees
2.Ingresa la frase o palabra a cifrar
3.Pulsa el boton cifrar
Y YA TIENES TU RESULTADO!

Ahora imaginemoslo en una empresa que mueva informacion importante o alguna pareja que no quieren que se enteren de lo que se escriben , o hasta simplemnte tu queriendo aprender y jugar.

CODIFY es aun mas comodo de utilizar en la misma pagina tiene instrucciones de uso rapido que te apoyaran a cifrar y a codificar. Animate a integrarla en tu vida.








## Índice

* [1. Objetivos de aprendizaje generales](#1-objetivos-de-aprendizaje-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#2-resumen-del-proyecto)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Hito 1: Criterios de aceptación mínimos del proyecto](#5-hito-1-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hito 2 (opcional): Agrega soporte para minúsculas y otros caracteres](#6-hito-2-(opcional)-agrega-soporte-para-minúsculas-y-otros-caracteres)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [9. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [10. Para considerar Project Feedback](#10-para-considerar-project-feedback)

***

## 1. Objetivos de aprendizaje generales
Como continuación del proyecto de preadmisión, volverás a trabajar sobre fundamentos de JavaScript, incluyendo conceptos como variables, condicionales, y funciones, así como eventos y manipulación básica del DOM, fundamentos de HTML y CSS.

Mientras desarrollas este proyecto, te familiarizarás con estos nuevos conceptos:

* Un _boilerplate_, la estructura básica de un proyecto en distintas carpetas (a través `modulos` en JS).
* Las herramientas de mantenimiento y mejora del código (linters y pruebas unitarias).
* Objetos en JavaScript, su estructura y métodos.
* Iteración (bucles) en JavaScript.
* Control de versiones con git (y la plataforma github)

## 2. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

