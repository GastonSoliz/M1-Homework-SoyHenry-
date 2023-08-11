const BinarySearchTree = require('../checkpoint/09');

const miArbol1 = new BinarySearchTree({
   id: 13,
   nombre: 'Dr. Juan',
   edad: 40,
   especialidad: 'Cardiología',
});
let doctores = [
   { id: 7, nombre: 'Dr. Ana', edad: 45, especialidad: 'Pediatría' },
   { id: 24, nombre: 'Dr. Luis', edad: 50, especialidad: 'Neurología' },
   { id: 27, nombre: 'Dra. Marta', edad: 38, especialidad: 'Ginecología' },
   { id: 16, nombre: 'Dr. Diego', edad: 42, especialidad: 'Oftalmología' },
   { id: 6, nombre: 'Dra. Laura', edad: 37, especialidad: 'Dermatología' },
   { id: 3, nombre: 'Dr. Ricardo', edad: 55, especialidad: 'Oncología' },
   { id: 4, nombre: 'Dra. Patricia', edad: 48, especialidad: 'Psiquiatría' },
   { id: 45, nombre: 'Dr. Sergio', edad: 43, especialidad: 'Traumatología' },
];
for (const doctor of doctores) miArbol1.insert2(doctor);
// Este árbol equivale a:
//             13
//          /      \
//        7         24
//      /          /   \
//     6         16     27
//   /                    \
//  3                     45
//   \
//    4

const miArbol2 = new BinarySearchTree({
   id: 20,
   nombre: 'Dr. Carlos',
   edad: 35,
   especialidad: 'Cardiología',
});

const doctores2 = [
   { id: 30, nombre: 'Dr. María', edad: 42, especialidad: 'Pediatría' },
   { id: 35, nombre: 'Dr. Andrés', edad: 50, especialidad: 'Neurología' },
   { id: 25, nombre: 'Dra. Ana', edad: 38, especialidad: 'Ginecología' },
   { id: 15, nombre: 'Dr. Felipe', edad: 46, especialidad: 'Oftalmología' },
   { id: 18, nombre: 'Dra. Gabriela', edad: 33, especialidad: 'Dermatología' },
   { id: 6, nombre: 'Dr. Ricardo', edad: 55, especialidad: 'Oncología' },
   { id: 3, nombre: 'Dra. Patricia', edad: 48, especialidad: 'Psiquiatría' },
   { id: 4, nombre: 'Dr. Antonio', edad: 43, especialidad: 'Traumatología' },
   { id: 8, nombre: 'Dra. Camila', edad: 39, especialidad: 'Endocrinología' },
];
for (const doctor of doctores2) miArbol2.insert2(doctor);
// Este otro equivale a:
//                 20
//              /      \
//            15         30
//          /   \       /  \
//         6    18     25   35
//       /   \
//      3     8
//       \
//        4

const miArbol3 = new BinarySearchTree({
   id: 30,
   nombre: 'Dr. Giovanna',
   edad: 37,
   especialidad: 'Cardiología',
});
const doctores3 = [
   { id: 14, nombre: 'Dr. José', edad: 44, especialidad: 'Pediatría' },
   { id: 11, nombre: 'Dr. Gabriel', edad: 49, especialidad: 'Neurología' },
   { id: 9, nombre: 'Dra. Andrea', edad: 36, especialidad: 'Ginecología' },
   { id: 6, nombre: 'Dr. Sebastián', edad: 41, especialidad: 'Oftalmología' },
   { id: 3, nombre: 'Dra. Valentina', edad: 34, especialidad: 'Dermatología' },
   { id: 1, nombre: 'Dr. Daniel', edad: 57, especialidad: 'Oncología' },
   { id: 38, nombre: 'Dra. Paola', edad: 50, especialidad: 'Psiquiatría' },
   { id: 56, nombre: 'Dr. Francisco', edad: 45, especialidad: 'Traumatología' },
   { id: 78, nombre: 'Dra. Laura', edad: 40, especialidad: 'Endocrinología' },
   { id: 89, nombre: 'Dr. David', edad: 38, especialidad: 'Cardiología' },
];
for (const doctor of doctores3) miArbol3.insert2(doctor);

// y este último equivale a:
//                   30
//                /      \
//              14        38
//             /            \
//           11              56
//          /                 \
//         9                   78
//        /                      \
//       6                        89
//      /
//     3
//    /
//   1

describe('Ejercicio 09 - buscandoAlDoctor', () => {
   test('Debe retornar el nodo que contiene al doctor.', () => {
      expect(miArbol1.buscandoAlDoctor(4).value.nombre).toEqual(
         'Dra. Patricia'
      );
      expect(miArbol1.buscandoAlDoctor(16).value.especialidad).toEqual(
         'Oftalmología'
      );

      expect(miArbol2.buscandoAlDoctor(35).value.edad).toEqual(50);
      expect(miArbol2.buscandoAlDoctor(35).value.nombre).toEqual('Dr. Andrés');

      expect(miArbol3.buscandoAlDoctor(89).value.especialidad).toEqual(
         'Cardiología'
      );
      expect(miArbol3.buscandoAlDoctor(1).value.edad).toEqual(57);
   });
   test('Debe retornar null si no encuentra al doctor.', () => {
      expect(miArbol1.buscandoAlDoctor(4000)).toBeNull();
      expect(miArbol1.buscandoAlDoctor(100)).toBeNull();

      expect(miArbol2.buscandoAlDoctor(305)).toBeNull();
      expect(miArbol2.buscandoAlDoctor(405)).toBeNull();

      expect(miArbol3.buscandoAlDoctor(900)).toBeNull();
      expect(miArbol3.buscandoAlDoctor(102)).toBeNull();
   });
});
