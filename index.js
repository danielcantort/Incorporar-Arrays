const misAlumnos = [
  {
    nombre: "Emilio",
    apellido: "Perez",
    nota: 7,
  },
  {
    nombre: "Josue",
    apellido: "Arias",
    nota: 8.5,
  },
  {
    nombre: "Luisa",
    apellido: "Montes",
    nota: 8.2,
  },
  {
    nombre: "Daniel",
    apellido: "Ramirez",
    nota: 7.5,
  },
  {
    nombre: "Juliana",
    apellido: "Gomez",
    nota: 8.1,
  },
];
let total = 0;
for (let i = 0; i < misAlumnos.length; i++) {
  let estudiantes = misAlumnos[i];
  total += estudiantes.nota;
  console.log(`${estudiantes.nombre}:${estudiantes.apellido}`);
}

console.log(total / misAlumnos.length);
