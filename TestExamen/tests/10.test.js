const { BinarySearchTree } = require("../checkpoint/10");

describe("Ejercicio 10 - agregarEmpleado", () => {
  let arbolDeEmpleados;
  let empleado;

  beforeEach(() => {
    empleado = { nombre: "María", años: 7 };
    arbolDeEmpleados = new BinarySearchTree(empleado);
  });

  test("Debe agregar al empleado con la menor antiguedad de forma correcta.", () => {
    const nuevoEmpleado = { nombre: "Pedro", años: 5 };
    expect(arbolDeEmpleados.agregarEmpleado(nuevoEmpleado)).toEqual(
      arbolDeEmpleados.left
    );
    expect(arbolDeEmpleados.left.value).toEqual(nuevoEmpleado);
  });

  test("Debe agregar al empleado con la mayor antiguedad de forma correcta.", () => {
    const nuevoEmpleado = { nombre: "Luis", años: 9 };
    expect(arbolDeEmpleados.agregarEmpleado(nuevoEmpleado)).toEqual(
      arbolDeEmpleados.right
    );
    expect(arbolDeEmpleados.right.value).toEqual(nuevoEmpleado);
  });

  test("Debe agregar al empleado con igual antiguedad al empleado existente de forma correcta.", () => {
    const nuevoEmpleado = { nombre: "Juan", años: 7 };
    expect(arbolDeEmpleados.agregarEmpleado(nuevoEmpleado)).toEqual(
      arbolDeEmpleados.right
    );
    expect(arbolDeEmpleados.right.value).toEqual(nuevoEmpleado);
  });

  test("Devolver error al agregar el mismo empleado.", () => {
    expect(arbolDeEmpleados.agregarEmpleado(empleado)).toEqual(
      "No se puede agregar el mismo empleado"
    );
    expect(arbolDeEmpleados.value).toEqual({ nombre: "María", años: 7 });
  });
});
