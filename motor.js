const PESOS = { I: 0.35, P: 0.20, T: 0.20, C: 0.15, H: 0.10 };

function normalizar(texto) {
  return texto.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function ingredientesFaltantes(receta, ingredientesUsuario) {
  const conjunto = new Set(ingredientesUsuario.map(normalizar));
  return receta.ingredientes.filter(i => !conjunto.has(normalizar(i)));
}

function calcularI(receta, ingredientesUsuario) {
  const conjunto = new Set(ingredientesUsuario.map(normalizar));
  const total = receta.ingredientes.length;
  let disponibles = 0;
  receta.ingredientes.forEach(i => {
    if (conjunto.has(normalizar(i))) disponibles++;
  });
  return total > 0 ? disponibles / total : 0;
}

function aptaPorRestricciones(receta, restricciones) {
  return restricciones.every(r => receta.etiquetas.includes(r));
}

function calcularP(receta, tipoComida, restricciones) {
  if (!aptaPorRestricciones(receta, restricciones)) return -1;
  if (!tipoComida) return 0.7;
  return receta.tipo === tipoComida ? 1 : 0.4;
}

function calcularT(receta, minutosDisponibles) {
  if (receta.minutos <= minutosDisponibles) return 1;
  return Math.max(0, 1 - (receta.minutos - minutosDisponibles) / 60);
}

function calcularC(receta, presupuesto) {
  if (receta.costo <= presupuesto) return 1;
  return Math.max(0, 1 - (receta.costo - presupuesto) / receta.costo);
}

function calcularH(receta, historial) {
  if (historial[receta.id]) return historial[receta.id] / 5;

  const afines = Object.keys(historial).filter(id => {
    const otra = RECETAS.find(r => r.id === Number(id));
    if (!otra) return false;
    const comunes = receta.ingredientes.filter(i => otra.ingredientes.includes(i)).length;
    return comunes >= 2 || otra.tipo === receta.tipo;
  });

  if (afines.length === 0) return 0.5;

  const suma = afines.reduce((acc, id) => acc + historial[id], 0);
  return (suma / afines.length) / 5;
}

function recomendar(ingredientesUsuario, minutos, presupuesto, tipoComida, restricciones, historial) {
  const resultados = [];

  RECETAS.forEach(receta => {
    const P = calcularP(receta, tipoComida, restricciones);
    if (P < 0) return;

    const I = calcularI(receta, ingredientesUsuario);
    const T = calcularT(receta, minutos);
    const C = calcularC(receta, presupuesto);
    const H = calcularH(receta, historial);

    const puntaje = I * PESOS.I + P * PESOS.P + T * PESOS.T + C * PESOS.C + H * PESOS.H;

    resultados.push({
      receta,
      puntaje,
      porcentaje: Math.round(puntaje * 100),
      faltantes: ingredientesFaltantes(receta, ingredientesUsuario),
      factores: { I, P, T, C, H }
    });
  });

  return resultados.sort((a, b) => b.puntaje - a.puntaje);
}
