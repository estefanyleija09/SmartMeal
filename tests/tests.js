const fs = require("fs");
const path = require("path");
const vm = require("vm");

const base = path.join(__dirname, "..");
const leer = f => fs.readFileSync(path.join(base, f), "utf8");

let fallos = 0;
const reporte = [];
function ok(cond, msg) {
  reporte.push((cond ? "PASS: " : "FAIL: ") + msg);
  if (!cond) fallos++;
}

["js/recetas.js", "js/motor.js", "js/app.js"].forEach(f => {
  try {
    new Function(leer(f));
    ok(true, "sintaxis " + f);
  } catch (e) {
    ok(false, "sintaxis " + f + " -> " + e.message);
  }
});

try {
  const html = leer("index.html");
  const app = leer("js/app.js");
  const ids = [...new Set([...app.matchAll(/getElementById\("([^"]+)"\)/g)].map(m => m[1]))];
  const faltan = ids.filter(id => !html.includes('id="' + id + '"'));
  ok(faltan.length === 0, "IDs de app.js presentes en index.html" + (faltan.length ? " (faltan: " + faltan.join(", ") + ")" : ""));
} catch (e) {
  ok(false, "cross-check IDs -> " + e.message);
}

try {
  const manifiesto = JSON.parse(leer("manifest.json"));
  const iconosOk = manifiesto.icons.every(i => fs.existsSync(path.join(base, i.src)));
  ok(manifiesto.display === "standalone" && iconosOk, "manifest.json valido con " + manifiesto.icons.length + " iconos");
} catch (e) {
  ok(false, "manifest.json -> " + e.message);
}

try {
  const sw = leer("service-worker.js");
  ok(/smartmeal-v\d+/.test(sw), "service-worker.js con version de cache");
} catch (e) {
  ok(false, "service-worker.js -> " + e.message);
}

const codigoPruebas = `
const __reporte = [];
let __fallos = 0;
function ok(c, m) { __reporte.push((c ? "PASS: " : "FAIL: ") + m); if (!c) __fallos++; }

ok(RECETAS.length === 82, "82 recetas (" + RECETAS.length + ")");
const ids = RECETAS.map(r => r.id);
ok(new Set(ids).size === ids.length, "ids sin duplicados");
const nombres = RECETAS.map(r => r.nombre);
ok(new Set(nombres).size === nombres.length, "nombres sin duplicados");
ok(RECETAS.every(r => r.pasos && r.pasos.length >= 4), "todas con >=4 pasos");

ok(ingredientesCoinciden("jitomate", "tomate"), "sinonimo: jitomate <-> tomate");
ok(ingredientesCoinciden("tomate", "puré de tomate"), "sinonimo: puré de tomate");
ok(ingredientesCoinciden("pasta de tomate", "salsa de tomate"), "frase: pasta de tomate <-> salsa de tomate");
ok(!ingredientesCoinciden("pasta de tomate", "pasta"), "frase: pasta de tomate NO es pasta");
ok(ingredientesCoinciden("pechuga", "pollo"), "sinonimo: pechuga <-> pollo");
ok(ingredientesCoinciden("espagueti", "pasta"), "sinonimo: espagueti <-> pasta");
ok(ingredientesCoinciden("cerdo", "carne"), "sinonimo: cerdo <-> carne");
ok(ingredientesCoinciden("frijoles", "frijol"), "plural: frijoles <-> frijol");
ok(ingredientesCoinciden("huevo", "huevos"), "plural: huevo <-> huevos");
ok(!ingredientesCoinciden("sal", "salsa"), "negativo: sal NO es salsa");
ok(ingredientesCoinciden("camarones", "mariscos"), "sinonimo: mariscos <-> camarones");
ok(!ingredientesCoinciden("camarones", "pescado"), "negativo: camarones NO es pescado");
ok(ingredientesCoinciden("carne", "carne molida"), "carne <-> carne molida");

const perfecta = RECETAS.find(r => r.nombre === "Huevos a la mexicana");
const con5 = recomendar(perfecta.ingredientes.slice(), 60, 200, "breakfast", [], { [perfecta.id]: 5 });
const a = con5.find(r => r.receta.id === perfecta.id);
ok(a.porcentaje === 100 && a.factores.H === 1, "calificada 5 estrellas con todo = 100%");
const sinH = recomendar(perfecta.ingredientes.slice(), 60, 200, "breakfast", [], {});
const b = sinH.find(r => r.receta.id === perfecta.id);
ok(b.porcentaje === 95 && b.factores.H === 0.5, "sin calificar = 95% (H neutral)");

const bolo = recomendar(["pasta", "crema", "carne"], 60, 100, "all", [], {});
ok(bolo[0].receta.nombre.includes("boloñesa"), "pasta+crema+carne -> boloñesa #1");
ok(bolo.length > 50, "amplio abanico de opciones (" + bolo.length + " puntuadas)");

const des = recomendar(["huevo"], 30, 100, "breakfast", [], {});
ok(des.length === 17 && des.every(r => r.receta.tipo === "breakfast"), "exclusion desayuno 17/17");

const cen = recomendar(["pollo"], 30, 60, "dinner", [], {});
ok(cen.length === 12, "cena: 12 opciones");

const vegan = recomendar(["fruta"], 30, 100, "all", ["vegan"], []);
ok(vegan.length > 0 && vegan.every(r => r.receta.etiquetas.includes("vegan")), "filtro vegan estricto");

const conJitomate = recomendar(["pasta", "puré de tomate"], 60, 100, "all", [], {});
const fideo = conJitomate.find(r => r.receta.nombre === "Sopa de fideo");
ok(fideo && fideo.factores.I > 0.6, "puré de tomate suma en Sopa de fideo");

globalThis.__SALIDA = { reporte: __reporte, fallos: __fallos };
`;

try {
  const ctx = vm.createContext({ console });
  vm.runInContext(leer("js/recetas.js") + "\n" + leer("js/motor.js") + "\n" + codigoPruebas, ctx);
  ctx.__SALIDA.reporte.forEach(l => reporte.push(l));
  fallos += ctx.__SALIDA.fallos;
} catch (e) {
  ok(false, "ejecucion del motor -> " + e.message);
}

reporte.forEach(l => console.log(l));
console.log(fallos === 0 ? "\nTODO OK" : "\n" + fallos + " FALLOS");
process.exit(fallos === 0 ? 0 : 1);
