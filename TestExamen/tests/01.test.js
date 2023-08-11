const { henryHospital } = require("../checkpoint/01");
const { Queue } = require("../DS");

describe("Ejercicio 01 - henryHospital", () => {
  const personasQueue = new Queue();
  personasQueue.enqueue({
    nombre: "Carol",
    edad: 24,
    altura: 146,
  });
  personasQueue.enqueue({
    nombre: "Gonzalo",
    edad: 24,
    altura: 184,
  });
  personasQueue.enqueue({
    nombre: "Micaias",
    edad: 20,
    altura: 181,
  });
  personasQueue.enqueue({
    nombre: "Coraline",
    edad: 22,
    altura: 165,
  });
  personasQueue.enqueue({
    nombre: "Marcos",
    edad: 19,
    altura: 154,
  });
  personasQueue.enqueue({
    nombre: "Mati",
    edad: 14,
    altura: 175,
  });

  test("Debe retornar un objeto con las propiedades 'Atendidas' y 'EnEspera'. Sus valores serán las QUEUES correspondientes de pacientes.", () => {
    const atendidos = new Queue();
    atendidos.enqueue({ nombre: "Gonzalo", edad: 24, altura: 184 });
    atendidos.enqueue({ nombre: "Micaias", edad: 20, altura: 181 });
    atendidos.enqueue({ nombre: "Coraline", edad: 22, altura: 165 });
    atendidos.enqueue({ nombre: "Marcos", edad: 19, altura: 154 });
    const esperando = new Queue();
    esperando.enqueue({ nombre: "Carol", edad: 24, altura: 146 });
    esperando.enqueue({ nombre: "Mati", edad: 14, altura: 175 });
    expect(henryHospital(personasQueue)).toEqual({
      Atendidas: atendidos,
      EnEspera: esperando,
    });
    const personasQueue2 = new Queue();
    const atendidos2 = new Queue();
    const esperando2 = new Queue();
    personasQueue2.enqueue({ nombre: "Gonza", edad: 14, altura: 169 });
    personasQueue2.enqueue({ nombre: "Matias", edad: 25, altura: 192 });
    personasQueue2.enqueue({ nombre: "Flor", edad: 29, altura: 149 });
    atendidos2.enqueue({ nombre: "Matias", edad: 25, altura: 192 });
    esperando2.enqueue({ nombre: "Gonza", edad: 14, altura: 169 });
    esperando2.enqueue({ nombre: "Flor", edad: 29, altura: 149 });
    expect(henryHospital(personasQueue2)).toEqual({
      Atendidas: atendidos2,
      EnEspera: esperando2,
    });
  });
});
