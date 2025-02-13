function processData(input) {
    // Separamos la entrada por el punto y coma
    const parts = input.split(";");
    const operation = parts[0]; // 'S' o 'C'
    const type = parts[1];      // 'M', 'C' o 'V'
    let data = parts[2];        // la cadena a procesar

    // Funcion auxiliar para capitalizar una palabra
    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    if (operation === 'S') { 
        // OPERACIoN: SPLIT (dividir)
        // Si es un metodo, eliminamos los paréntesis finales "()"
        if (type === 'M' && data.endsWith("()")) {
            data = data.slice(0, -2);
        }
        // Insertamos un espacio antes de cada letra mayuscula y luego convertimos toda la cadena a minusculas.
        // Ejemplo: "plasticCup" -> "plastic Cup" -> "plastic cup"
        const result = data.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
        console.log(result);

    } else if (operation === 'C') {
        // OPERACIoN: COMBINE (combinar)
        // Separamos las palabras (están separadas por espacios)
        const words = data.split(" ");
        let result = "";

        if (type === 'V' || type === 'M') {
            // Para variable (V) y metodo (M): 
            // la primera palabra permanece en minusculas y el resto se capitaliza
            result = words[0].toLowerCase();
            for (let i = 1; i < words.length; i++) {
                result += capitalize(words[i]);
            }
            // Para metodos, se añaden parentesis al final
            if (type === 'M') {
                result += "()";
            }
        } else if (type === 'C') {
            // Para clases (C): todas las palabras se capitalizan
            result = words.map(word => capitalize(word)).join('');
        }
        console.log(result);
    }
}

// Algunos ejemplos de prueba:
processData('S;M;plasticCup()');       // Imprime: plastic cup
processData('C;V;mobile phone');         // Imprime: mobilePhone
processData('C;C;coffee machine');       // Imprime: CoffeeMachine
processData('S;C;LargeSoftwareBook');    // Imprime: large software book
processData('C;M;white sheet of paper'); // Imprime: whiteSheetOfPaper()
processData('S;V;pictureFrame');         // Imprime: picture frame
