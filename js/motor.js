const PESOS = { I: 0.35, P: 0.20, T: 0.20, C: 0.15, H: 0.10 };

function normalizar(texto) {
  return texto.toLowerCase().trim().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function palabras(texto) {
  return normalizar(texto).split(/[\s,]+/).filter(Boolean);
}

function variantes(palabra) {
  const lista = [palabra];
  if (palabra.length > 3 && palabra.endsWith("s")) lista.push(palabra.slice(0, -1));
  if (palabra.length > 3 && palabra.endsWith("es")) lista.push(palabra.slice(0, -2));
  return lista;
}

const GRUPOS_SINONIMOS = [
  ["tomate", "jitomate", "pasta de tomate", "pure de tomate", "salsa de tomate"],
  ["pollo", "pechuga", "pechuga de pollo"],
  ["carne", "res", "bistec", "carne de res", "carne molida", "molida", "cerdo", "puerco", "chuleta", "costilla", "carnitas"],
  ["pasta", "espagueti", "espaguetin", "fideo", "fideos", "macarron", "macarrones", "lasana"],
  ["atun"],
  ["queso", "quesillo"],
  ["crema", "media crema", "crema de leche"],
  ["limon", "lima"],
  ["chile", "pimiento", "jalapeno", "chile verde"],
  ["frijol", "frijoles", "frijol refrito", "frijoles refritos"],
  ["papa", "patata"],
  ["platano", "banana", "guineo"],
  ["maiz", "elote", "choclo"],
  ["camarones", "camaron", "mariscos"],
  ["pescado", "filete de pescado", "tilapia", "salmon"],
  ["masa", "masa de maiz"],
  ["harina", "harina de trigo"],
  ["yogurt", "yogur"],
  ["champinon", "champinones", "hongo", "hongos"],
  ["nopal", "nopales"],
  ["jugo", "zumo"],
  ["aceite", "aceite de oliva", "oliva"],
  ["chocolate", "cacao"]
];

const MAPA_CANON = {};
GRUPOS_SINONIMOS.forEach(([canon, ...alias]) => {
  [canon, ...alias].forEach(a => { MAPA_CANON[normalizar(a)] = canon; });
});

const SINONIMOS_STOP = new Set(["de", "del", "la", "el", "y", "con", "en", "un", "una", "al"]);

function canonizar(texto) {
  const completo = normalizar(texto).replace(/[\s,]+/g, " ").trim();
  if (MAPA_CANON[completo]) return new Set([MAPA_CANON[completo]]);

  const tokens = new Set();
  palabras(texto)
    .filter(p => !SINONIMOS_STOP.has(p))
    .forEach(p => {
      const v = variantes(p);
      const sinonimo = v.find(x => MAPA_CANON[x]);
      if (sinonimo) tokens.add(MAPA_CANON[sinonimo]);
      else v.forEach(x => tokens.add(x));
    });
  return tokens;
}

function ingredientesCoinciden(recetaIng, usuarioIng) {
  const a = canonizar(recetaIng);
  const b = canonizar(usuarioIng);
  for (const t of a) {
    if (b.has(t)) return true;
  }
  return false;
}

function ingredienteDisponible(recetaIng, ingredientesUsuario) {
  return ingredientesUsuario.some(u => ingredientesCoinciden(recetaIng, u));
}

function ingredientesFaltantes(receta, ingredientesUsuario) {
  return receta.ingredientes.filter(i => !ingredienteDisponible(i, ingredientesUsuario));
}

function calcularI(receta, ingredientesUsuario) {
  const total = receta.ingredientes.length;
  if (total === 0) return 0;
  const disponibles = receta.ingredientes.filter(i =>
    ingredienteDisponible(i, ingredientesUsuario)
  ).length;
  return disponibles / total;
}

function aptaPorRestricciones(receta, restricciones) {
  return restricciones.every(r => receta.etiquetas.includes(r));
}

function calcularP(receta, tipoComida, restricciones) {
  if (!aptaPorRestricciones(receta, restricciones)) return -1;
  if (tipoComida && tipoComida !== "all" && receta.tipo !== tipoComida) return -1;
  if (!tipoComida || tipoComida === "all") return 0.7;
  return 1;
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
