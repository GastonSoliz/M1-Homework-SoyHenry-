const { ordenarInstrumentos } = require('../checkpoint/05');

describe('Ejercicio 05 - ordenarInstrumentos', () => {
   test('Debe ordenar correctamente un array de instrumentos', () => {
      const instrumentos = ['bisturí', 'espéculos', 'abrebocas', 'diapasones'];
      const resultado = ordenarInstrumentos(instrumentos);
      expect(resultado).toEqual([
         'abrebocas',
         'bisturí',
         'diapasones',
         'espéculos',
      ]);
   });

   test('Debe retornar el mensaje de error si el parámetro no es un array.', () => {
      const resultado = ordenarInstrumentos('no soy un array');
      expect(resultado).toEqual('Debe recibir un array de strings');
   });

   test('Debe retornar el mensaje de error si el array está vacío.', () => {
      const resultado = ordenarInstrumentos([]);
      expect(resultado).toEqual('El array no debe estar vacio');
   });

   test('No debe utilizar el método SORT.', () => {
      const instrumentos = ['bisturí', 'abrebocas', 'diapasones'];
      instrumentos.sort = jest.fn();
      ordenarInstrumentos(instrumentos);
      expect(instrumentos.sort).not.toHaveBeenCalled();
   });
});
