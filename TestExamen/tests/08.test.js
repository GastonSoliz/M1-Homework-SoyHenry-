const LinkedList = require('../checkpoint/08');

describe('Ejercicio 08 - pacienteEnMayorEspera', () => {
   let pacientes = [
      { nombre: 'Juan', espera: 10 },
      { nombre: 'Jorge', espera: 25 },
      { nombre: 'Roberto', espera: 55 },
      { nombre: 'Milagros', espera: 120 },
   ];
   let pacientes2 = [
      { nombre: 'Gero', espera: 10 },
      { nombre: 'Hamat', espera: 259 },
      { nombre: 'Lizz', espera: 550 },
      { nombre: 'Rick', espera: 50 },
   ];
   test('Debe devolver el paciente con mayor espera', () => {
      //Creo una instancia de la lista
      const list = new LinkedList();
      const list2 = new LinkedList();

      //Recorro el array y agrego cada paciente a la lista
      for (const paciente of pacientes) list.add(paciente);
      for (const paciente2 of pacientes2) list2.add(paciente2);

      //Ejecuto la función
      const paciente = list.pacienteEnMayorEspera();
      const paciente2 = list2.pacienteEnMayorEspera();

      //Compruebo el resultado
      expect(paciente.espera).toBe(120);
      expect(list).toBeInstanceOf(LinkedList);
      expect(paciente.nombre).toBe('Milagros');

      expect(paciente2.espera).toBe(550);
      expect(list2).toBeInstanceOf(LinkedList);
      expect(paciente2.nombre).toBe('Lizz');
   });

   test('Debe devolver null si la lista esta vacía', () => {
      const list = new LinkedList();
      const paciente = list.pacienteEnMayorEspera();
      expect(paciente).toBeNull();
   });
});
