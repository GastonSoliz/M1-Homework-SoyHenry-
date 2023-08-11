const { sumarCostos } = require('../checkpoint/03');

describe('Ejercicio 03 - sumarCostos', () => {
   test('La función debe obtener el precio total de forma recursiva.', () => {
      const suma1 = sumarCostos(10);
      expect(suma1(5)).toEqual(15);
      const suma2 = sumarCostos(25);
      expect(suma2(5)).toEqual(30);
      const suma3 = sumarCostos(45);
      expect(suma3(15)).toEqual(60);
   });
   test('Si no tiene ningún número devuelve false.', () => {
      const suma1 = sumarCostos(0);
      expect(suma1(0)).toEqual(false);
   });
});
