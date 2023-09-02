// 1. Realice una concatenación entre dos cadenas literales para que devuelva su edad en un console.log( “” )
const mi_edad = 20

console.log(`Mi edad es: ${mi_edad}`)

//2. Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos números.
const num1 = 12
const num2 = 8

console.log(`Suma: ${num1 + num2}`)
console.log(`Resta: ${num1 - num2}`)
console.log(`Divición: ${num1 / num2}`)
console.log(`Multiplicación: ${num1 * num2}`)

//3. Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de una persona.
//4. Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre es de 65 años y la Mujer a los 60 años.
const edad_persona = 82
const genero = 'Mujer'

if (genero === 'Mujer' && edad_persona >= 60) {
    console.log('Edad de jubilación valida')
} else if (genero === 'Hombre' && edad_persona >= 65) {
    console.log('Edad de jubilación valida')
} else {
    console.log('Edad de jubilación invalida')
}

//5. En el siguiente ejemplo se ven los BUCLES de interacción.
// a-) Realiza los cambios para generar un contador hasta el numero 10.

var cuenta, edad
for (cuenta = 1; cuenta <= 10; cuenta++) {
    edad = prompt('Introduzca su edad (en cifras).', '')
    edad = parseInt(edad)

    if (edad < 18) {
        alert('Es usted menor de edad.')
    } else {
        alert('Es usted mayor de edad.')
    }
}
