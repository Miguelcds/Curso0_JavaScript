/**
 * 1. Haz una función llamada "setCapitalUpper" que reciba un string y DEVUELVA el string
 * con la inicial en mayúscula.
 *
 * Ejemplos de uso:
 * setCapitalUpper("hello"); // "Hello"
 * setCapitalUpper("hELLO"); // "Hello"
 * setCapitalUpper("HeLlO"); // "Hello"
 * setCapitalUpper("Hello"); // "Hello"
 */

// Tu respuesta aquí

const setCapitalUpper = (word) => {
  if (typeof word === "string") {
    let s = "";
    for (let i = 0; i < word.length; i++) {
      if (i == 0) {
        s += word[i].toUpperCase();
      } else {
        s += word[i].toLowerCase();
      }
    }
    console.log(s);
  } else {
    console.log("Tiene que ser un string wacho");
  }
};

// setCapitalUpper("HolaPIhght%FG");

/**
 * 2. Haz una función "fizzbuzz" que reciba un número entero y, para cada número desde 1
 * hasta el número recibido MUESTRE POR PANTALLA lo siguiente:
 *  >> "fizz" si ese número es múltiplo de 3
 *  >> "buzz" si ese número es múltiplo de 5
 *  >> "fizzbuzz" si ese número es múltiplo de 3 y de 5 a la vez
 *  >> el mismo número si éste no es múltiplo ni de 3 ni de 5
 *
 * Ejemplo de uso:
 * fizzbuzz(5); // 1 2 "fizz" 4 "buzz"
 */

// Tu respuesta aquí

const fizzbuzz = (num) => {
  let contador = 0;

  if (typeof num === "number") {
    for (let i = 1; i <= num; i++) {
      if (i % 3 == 0) {
        contador += " fizz";
        if (i % 5 == 0) {
          contador += "buzz";
        }
      } else if (i % 5 == 0) {
        contador += " buzz";
      } else {
        contador += " " + i;
      }
    }
     console.log(contador);/* Opto por un console log para que la salida sea por terminal, pero en caso cualquier caso podria simplemente usar un return y usar el log en la funcion cuando la llamo desde fuera*/
  } else {
    console.log("Tiene que se un number loco");
  }
};

fizzbuzz(100);

/**
 * 3. Escribe una función "bmc" que reciba dos números enteros, "height" y "weight",
 * calcule el índice de masa corporal y te devuelva alguna de los siguientes strings
 * según el caso:
 *
 *  >> Si el índice es menor o igual que 18.5, devuelve "underweight"
 *  >> Si es menor o igual que 25, devuelve "normal"
 *  >> Si es menor o igual que 30, "overweight"
 *  >> Si es mayor de 30, "obese"
 *
 * Ejemplo de uso:
 * bmc(186, 90); "overweight"
 */


const bmc = (height,weight) => {

    height /= 100; 
    let result = weight / (height * height);
    result = result.toFixed(2);
    console.log("Tu imc es "+ result);
    if( result <= 18.5 ){
        result = "underweight";
    } else if (result <= 25){
        result = "normal";
    } else if (result <= 30 ){
        result = "overweight";
    } else {
        result = "obese";
    }
    console.log(result)
}

bmc(185,120);




// Tu respuesta aquí

/**
 * 4. Crea una función "max" que reciba 4 números enteros y devuelva el valor
 * del mayor de ellos. NO SE PUEDE USAR Math.max
 *
 * Ejemplo de uso
 * max(10, 15, 100, 40); // 100
 */

// Tu respuesta aquí


const maxPower = (a,b,c,d) => {
    let compare = 0;
    if (compare < a){compare = a;}
    if (compare < b){compare = b;}
    if (compare < c) {compare = c;}
    if (compare < d){compare = d;}
    console.log(compare);  
}


maxPower(12,34,37,23);
