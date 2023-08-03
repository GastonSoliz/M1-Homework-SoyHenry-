

'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

//CON RECURSION
function nFactorial(n) {
  if(n==1 || n==0){
    return(1);
  }else{
    return(n * nFactorial(n-1));
  }
}

//SIN RECURSION
// function nFactorial(n){
//   let multF=1;
//   for(let i=1;i<=n;i++){
//     multF*=i;
//   }
//   return(multF);

// }
// console.log(nFactorial(5));

//CON RECURSION

function recursivo(n,a){
  if(n==2){
    arr.push(arr[arr.length-1]+arr[arr.length-2])
  }else{
    recursivo(n-1,a);
  }
}

function nFibonacci(n){
  const arr=[];
  arr.push(0);
  arr.push(1);
  recursivo(n,arr);
  return(arr[n]);
}

// OTRA SOLUCION
function nFibonacci(n){
  if(n==0||n==1){
    return n;
  }else {
    return(nFibonacci(n-1)+nFibonacci(n-2));
  }
}




//SIN RECURSION
// function nFibonacci(n) {
//   const arr=[];
//   arr.push(0);
//   arr.push(1);
//   for(let i=2;i<=n;i++){
//     arr.push(arr[i-1]+arr[i-2]);
//   }
//   return(arr[n]);
// }
// console.log(nFibonacci(7));


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue{
  constructor(){
    this.arr=[];
  }
};

// function Queue{
//   this.arr=[];
// }

Queue.prototype.enqueue = function(arg){
  this.arr.push(arg);
}

Queue.prototype.dequeue = function(){
  return(this.arr.shift());
}

Queue.prototype.size = function(){
  return(this.arr.length);
}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
