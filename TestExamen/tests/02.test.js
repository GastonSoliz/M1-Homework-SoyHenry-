const { BuscandoError } = require("../checkpoint/02");

describe("Ejercicio 02 - BuscandoError", () => {
  test("Si los valores son correctos, devolver true", () => {
    expect(BuscandoError("{[()()]}")).toEqual(true);
    expect(BuscandoError("{[[()()()]]}")).toEqual(true);
    expect(BuscandoError("{{}[[()()()]]}")).toEqual(true);
  });

  test("Si los valores no son los correctos, devolver false", () => {
    expect(BuscandoError("([)]")).toEqual(false);
    expect(BuscandoError("{([)]{")).toEqual(false);
    expect(BuscandoError(")([)[{")).toEqual(false);
  });
});
