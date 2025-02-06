const cadena = 'Hola Mundo ';
const arr = cadena.toLowerCase().split('');
console.log(`La frase es: ${cadena}`); // 10
console.log(`La longitud de la frase es: ${cadena.length}`); // 10
console.log(`La primera letra es: ${cadena[0]}`); // H
console.log(`La última letra es: ${cadena[cadena.length - 1]}`); // o   

const mitad = Math.floor(cadena.length / 2);
console.log(`La mitad es: ${mitad}`);
console.log(`La letra de la mitad es: ${cadena[mitad]}`); // M

if ("a" < "b") {
  console.log('a es menor que b');
    
}

console.log(cadena.padStart(20, 'ed'));
console.log(cadena.padEnd(20, 'ed'));
console.log(cadena.repeat(3));
console.log(cadena.slice(1));
console.log(cadena.substring(1, 5));
console.log(arr);
const anotherarr = [...arr].reverse();
console.log(anotherarr);
console.log(arr);