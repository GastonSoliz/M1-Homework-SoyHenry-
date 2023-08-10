'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<1){
    return([]);
  }else{
    let pivot = array[0];
    let izq = [];
    let der = [];
    for(let i=1;i<array.length;i++){
      if(array[i]>pivot) der.push(array[i])
      else izq.push(array[i])
    }
    return [].concat(quickSort(izq),pivot,quickSort(der));
  }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora

  function dividir(array){
    let mitad = Math.floor(array.length/2);
    let izq = array.slice(0,mitad);
    let der = array.slice(mitad,array.length);
    return{izq,der};
  }

  function merge(izq,der){
    let arrO=[]; //combinacion de ambos arreglos
    while(izq.length>0 && der.length>0){
      if(izq[0]<=der[0]){
        arrO.push(izq.shift());
      }else
        arrO.push(der.shift());
    }
    while(izq.length>0){
      arrO.push(izq.shift());
    }
    while(der.length>0){
      arrO.push(der.shift());
    }
    return arrO;
  }

  if(array.length==1) return array //parar recursion cuando solo sea un elemento

  let obj = dividir(array); 

  return merge(mergeSort(obj.izq),mergeSort(obj.der));  //resuelvo esos arreglos y los junto


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
