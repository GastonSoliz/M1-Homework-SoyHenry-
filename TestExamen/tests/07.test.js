const LinkedList = require("../checkpoint/07");

const pacientes = [
  { id: 1, nombre: "Juan", enfermedad: ["Gripe"] },
  { id: 2, nombre: "María", enfermedad: ["Dolor de cabeza"] },
  { id: 3, nombre: "Pedro", enfermedad: ["Fiebre"] },
  {
    id: 4,
    nombre: "Ana",
    enfermedad: ["Dolor de cabeza", "Hipertensión", "Fiebre"],
  },
  { id: 5, nombre: "Carlos", enfermedad: ["Diabetes"] },
  { id: 6, nombre: "Laura", enfermedad: ["Asma"] },
  { id: 7, nombre: "Jorge", enfermedad: ["Artritis"] },
  {
    id: 8,
    nombre: "Sofía",
    enfermedad: ["Infección urinaria", "Insuficiencia cardíaca"],
  },
  { id: 9, nombre: "Luis", enfermedad: ["Cáncer"] },
  {
    id: 10,
    nombre: "Lucía",
    enfermedad: ["Insuficiencia cardíaca", "Cáncer", "Artritis"],
  },
];

const list = new LinkedList();
for (const paciente of pacientes) list.add(paciente);

describe("Ejercicio 07 - pacientesConMasDeUnaEnfermedad", () => {
  test("Debe retornar a los pacientes con más de una enfermedad.", () => {
    const pacientesConMasDeUnaEnfermedad =
      list.pacientesConMasDeUnaEnfermedad(list);
    expect(pacientesConMasDeUnaEnfermedad.head.value).toEqual({
      id: 4,
      nombre: "Ana",
      enfermedad: ["Dolor de cabeza", "Hipertensión", "Fiebre"],
    });
    expect(pacientesConMasDeUnaEnfermedad.head.next.value).toEqual({
      id: 8,
      nombre: "Sofía",
      enfermedad: ["Infección urinaria", "Insuficiencia cardíaca"],
    });
    expect(pacientesConMasDeUnaEnfermedad.head.next.next.value).toEqual({
      id: 10,
      nombre: "Lucía",
      enfermedad: ["Insuficiencia cardíaca", "Cáncer", "Artritis"],
    });
  });

  test("Debe retornar una lista vacía si no hay pacientes con más de una enfermedad.", () => {
    const list2 = new LinkedList();
    list2.add({ id: 1, nombre: "Juan", enfermedad: ["Gripe"] });
    list2.add({ id: 9, nombre: "Luis", enfermedad: ["Cáncer"] });
    const pacientesConMasDeUnaEnfermedad =
      list2.pacientesConMasDeUnaEnfermedad(list2);
    expect(pacientesConMasDeUnaEnfermedad.head).toBeNull();
  });
});
