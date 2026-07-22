const inventarioCompuestos = [
  {
    nombre: "Agua Destilada",
    componentes: [
      { simbolo: "H", gramos: 2.0 },
      { simbolo: "O", gramos: 16.0 }
    ]
  },
  {
    nombre: "Cloruro de Sodio Incompleto",
    componentes: [
      { simbolo: "Na", gramos: 23.0 },
      { simbolo: "Cl", gramos: 0.0 }
    ]
  },
  {
    nombre: "Ácido Sulfúrico",
    componentes: [
      { simbolo: "H", gramos: 2.0 },
      { simbolo: "S", gramos: 32.1 },
      { simbolo: "O", gramos: 64.0 }
    ]
  },
  {
    nombre: "Etanol Defectuoso",
    componentes: [
      { simbolo: "C", gramos: 24.0 },
      { simbolo: "H", gramos: -1.5 },
      { simbolo: "O", gramos: 16.0 }
    ]
  }
];

function procesarLaboratorio(compuestos) {
  return compuestos
    .map(compuesto => {
      const masaTotal = compuesto.componentes.reduce((acc, comp) => acc + comp.gramos, 0);
      const esValido = compuesto.componentes.every(comp => comp.gramos > 0);
      
      return {
        ...compuesto,
        masaTotal: Number(masaTotal.toFixed(2)),
        esValido: esValido
      };
    })
    .filter(compuesto => compuesto.esValido)
    .map(({ esValido, ...resto }) => resto);
}

function imprimirReporte(compuestosAprobados) {
  console.log("=== REPORTE DE COMPUESTOS VALIDADOS ===");
  compuestosAprobados.forEach(compuesto => {
    console.log(`\nCompuesto: ${compuesto.nombre}`);
    console.log(`Masa Total: ${compuesto.masaTotal}g`);
    console.log("Componentes:");
    compuesto.componentes.forEach(c => {
      console.log(`  - [${c.simbolo}]: ${c.gramos}g`);
    });
  });
}

const compuestosValidos = procesarLaboratorio(inventarioCompuestos);
imprimirReporte(compuestosValidos);