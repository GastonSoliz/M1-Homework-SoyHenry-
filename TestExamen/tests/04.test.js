const { contarPacientes } = require('../checkpoint/04');

describe('Ejercicio 04 - contarPacientes', () => {
   test("Debe devolver el string 'No hay pacientes en la planta' cuando se recibe un array vacío.", () => {
      const hasForLoop = /for\s*\(/.test(contarPacientes.toString());
      const hasWhileLoop = /while\s*\(/.test(contarPacientes.toString());
      expect(hasForLoop).toBe(false);
      expect(hasWhileLoop).toBe(false);
      const pacientes = [];
      const resultado = contarPacientes(pacientes);
      expect(resultado).toBe('No hay pacientes en la planta');
   });

   test("Debe devolver 'La cantidad de pacientes en la planta son: 1' cuando se recibe un array con un paciente.", () => {
      const hasForLoop = /for\s*\(/.test(contarPacientes.toString());
      const hasWhileLoop = /while\s*\(/.test(contarPacientes.toString());
      expect(hasForLoop).toBe(false);
      expect(hasWhileLoop).toBe(false);
      const pacientes = ['Juan'];
      const resultado = contarPacientes(pacientes);
      expect(resultado).toBe('La cantidad de pacientes en la planta son: 1');
   });

   test("Debe devolver 'La cantidad de pacientes en la planta son: 3' cuando se recibe un array con tres pacientes.", () => {
      const hasForLoop = /for\s*\(/.test(contarPacientes.toString());
      const hasWhileLoop = /while\s*\(/.test(contarPacientes.toString());
      expect(hasForLoop).toBe(false);
      expect(hasWhileLoop).toBe(false);
      const pacientes = ['Juan', 'Ana', 'Pedro'];
      const resultado = contarPacientes(pacientes);
      expect(resultado).toBe('La cantidad de pacientes en la planta son: 3');
   });
});
