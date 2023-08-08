'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let arrP = [2,3,5,7,9,11,13,17,23,29,31];

  let res = num;
  let i=0;

  while(res>1){
    while(res%arrP[i]===0){
      res=res/arrP[i];
      arr.push(arrP[i]);
    }
    i++;
  }

  return arr;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let ordenado = false;
  while(!ordenado){
    let cambio=false;
    for(let i=0;i<array.length-1;i++){
      if(array[i]>array[i+1]){
        let aux=array[i];
        array[i]=array[i+1];
        array[i+1]=aux;
        cambio=true;
      }
    }
    if(!cambio) ordenado=true;
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0;i<array.length-1;i++){
    let j=i+1;
    while(array[j]<array[j-1] && j>0){
      let aux = array[j-1];
      array[j-1]=array[j];
      array[j]=aux;
      j--;
    }
  }
  return(array)
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i=0;i<array.length;i++){
    let min=i;
    for(let j=i+1;j<array.length;j++){
      if(array[min]>array[j]) min=j;
    }
    let aux=array[i];
    array[i]=array[min];
    array[min]=aux;

  }
  return(array);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
