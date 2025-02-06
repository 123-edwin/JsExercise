class Pila {
    //Crea la pila
    constructor (maxLength = Infinity){
        this.items = [];
        this.maxLength = maxLength;
    }
    //Ingresamos elemento
    push(element){
        if (this.items.length >= this.maxLength){
            console.log('La pila esta llena'); 
            return       
        }
        this.items.push(element);
    }
    //Eliminar el elemento en la cima
    pop(){
        if(this.isEmpty()){
            return "La pila esta vacia"
        }
        const elemento = this.items.pop();
        return `Fuera ${elemento}`
    }
    //Imprimir el ultimo elemento
    peek(){
        if(this.isEmpty()){
            return "La pila esta vacia"
        }
        return this.items[this.items.length - 1];
    }
    //Verificar si esta vacia
    isEmpty(){
        return this.items.length === 0
    }
    //Verificar el tamaño
    size(){
        return this.items.length
    }
    //Limpiar
    clear(){
        this.items = [];
    }
    //Imprimir los elementos
    print(){
        console.log(this.items.toString());
    }
}

// Ejemplo de uso
const pilaUno = new Pila(4);
pilaUno.push('azul');
pilaUno.push('azul');
pilaUno.push('verde');
pilaUno.push('verde')

console.log(pilaUno.peek()); 

pilaUno.print(); 

const pilaDos = new Pila (4);
pilaDos.push('verde');
pilaDos.push('verde');
pilaDos.push('azul');
pilaDos.push('azul');
console.log(pilaDos.peek());
pilaDos.print();

const pilaTres = new Pila(4);


