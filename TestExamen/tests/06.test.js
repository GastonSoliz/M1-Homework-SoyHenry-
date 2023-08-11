const numHabitaciones = require('../checkpoint/06');

describe('EJERCICIO 6 - numHabitaciones', () => {
   const spy = jest.spyOn(Math, 'ceil');
   const spy2 = jest.spyOn(Math, 'floor');
   test('Si hay 30 pacientes y capacidad para 4, debe devolver 8.', () =>
      expect(numHabitaciones(30, 4)).toBe(8));
   test('Si hay 35 pacientes y capacidad para 5, debe devolver 7.', () =>
      expect(numHabitaciones(35, 5)).toBe(7));
   test('Si hay 90 pacientes y capacidad para 6, debe devolver 15.', () =>
      expect(numHabitaciones(90, 6)).toBe(15));
   test('Si hay 0 pacientes y cualquier capacidad, debe devolver 0.', () =>
      expect(numHabitaciones(0, 5)).toBe(0));
   test('Debe utilizar RECURSIÓN.', () => {
      expect(spy).not.toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalled();
      const functionString = numHabitaciones.toString();
      expect(functionString.includes('while')).toBe(false);
      const functionString2 = numHabitaciones.toString();
      expect(functionString2.includes('for')).toBe(false);
   });
});
