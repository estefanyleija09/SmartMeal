const CLAVE_HISTORIAL = "smartmeal_historial";

let ingredientes = [];
let historial = JSON.parse(localStorage.getItem(CLAVE_HISTORIAL) || "{}");

const $input = document.getElementById("inputIngrediente");
const $btnAgregar = document.getElementById("btnAgregar");
const $lista = document.getElementById("listaIngredientes");
const $vacio = document.getElementById("vacioIngredientes");
const $rango = document.getElementById("rangoTiempo");
const $etiquetaTiempo = document.getElementById("etiquetaTiempo");
const $presupuesto = document.getElementById("inputPresupuesto");
const $tipo = document.getElementById("selectTipo");
const $btnRecomendar = document.getElementById("btnRecomendar");
const $btnHistorial = document.getElementById("btnHistorial");
const $contenedor = document.getElementById("contenedorRecetas");
const $estadoVacio = document.getElementById("estadoVacio");
const $contador = document.getElementById("contadorResultados");
const $toast = document.getElementById("toast");

const datalist = document.getElementById("sugerenciasIng");
INGREDIENTES_COMUNES.forEach(i => {
  const opt = document.createElement("option");
  opt.value = i;
  datalist.appendChild(opt);
});

function toast(mensaje) {
  $toast.textContent = mensaje;
  $toast.hidden = false;
  clearTimeout(toast.temporizador);
  toast.temporizador = setTimeout(() => { $toast.hidden = true; }, 2600);
}

function mayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function renderizarChips() {
  $lista.innerHTML = "";
  ingredientes.forEach((ing, idx) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = mayuscula(ing);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "×";
    btn.title = "Quitar";
    btn.addEventListener("click", () => {
      ingredientes.splice(idx, 1);
      renderizarChips();
    });
    chip.appendChild(btn);
    $lista.appendChild(chip);
  });
  $vacio.hidden = ingredientes.length > 0;
}

function agregarIngrediente() {
  const valor = $input.value.toLowerCase().trim();
  if (!valor) return;
  if (!ingredientes.includes(valor)) {
    ingredientes.push(valor);
    renderizarChips();
  }
  $input.value = "";
  $input.focus();
}

$btnAgregar.addEventListener("click", agregarIngrediente);
$input.addEventListener("keydown", e => {
  if (e.key === "Enter") agregarIngrediente();
});

$rango.addEventListener("input", () => {
  $etiquetaTiempo.textContent = `${$rango.value} min`;
});

$btnHistorial.addEventListener("click", () => {
  historial = {};
  localStorage.removeItem(CLAVE_HISTORIAL);
  toast("Historial de calificaciones reiniciado.");
  $contenedor.innerHTML = "";
  $contador.textContent = "";
  $estadoVacio.hidden = false;
});

function claseCompatibilidad(porcentaje) {
  if (porcentaje >= 70) return "alta";
  if (porcentaje >= 45) return "media";
  return "baja";
}

function etiquetaTipo(tipo) {
  const nombres = { desayuno: "Desayuno", comida: "Comida", cena: "Cena", colacion: "Colación" };
  return nombres[tipo] || tipo;
}

function renderizarTarjeta(item) {
  const { receta, porcentaje, faltantes, factores } = item;
  const disponibles = receta.ingredientes.filter(i => faltantes.every(f => f !== i));
  const estrellasActuales = historial[receta.id] || 0;

  const tarjeta = document.createElement("article");
  tarjeta.className = `tarjeta ${claseCompatibilidad(porcentaje)}`;

  const etiquetas = receta.etiquetas
    .filter(e => e !== "rapido" || receta.minutos <= 15)
    .map(e => {
      const texto = { vegetariano: "Vegetariano", sinGluten: "Sin gluten", ligero: "Ligero", rapido: "Rápido" }[e] || e;
      return `<span class="badge">${texto}</span>`;
    }).join("");

  tarjeta.innerHTML = `
    <div class="tarjetaSuperior">
      <div>
        <div class="nombreReceta">${receta.nombre}</div>
        <div class="meta">
          <span class="badge tipo">${etiquetaTipo(receta.tipo)}</span>
          <span class="badge">${receta.minutos} min</span>
          <span class="badge">$${receta.costo} MXN</span>
          ${etiquetas}
        </div>
      </div>
      <div class="porcentaje">
        <div class="porcentajeValor">${porcentaje}%</div>
        <div class="porcentajeTexto">compatibilidad</div>
      </div>
    </div>
    <div class="barra"><div class="barraRelleno" style="width:${porcentaje}%"></div></div>
    <p class="descripcion">${receta.descripcion}</p>
    <div class="ingredientesLista">
      <strong>Tienes:</strong><br>
      ${disponibles.map(i => `<span class="ing ok">✓ ${mayuscula(i)}</span>`).join("") || '<span class="ing falta">Ninguno de tus ingredientes coincide</span>'}
      <br><strong>Faltan:</strong><br>
      ${faltantes.map(i => `<span class="ing falta">✗ ${mayuscula(i)}</span>`).join("") || '<span class="ing ok">¡Ninguno! Puedes prepararla tal cual</span>'}
    </div>
    <details class="desglose">
      <summary>¿Por qué el agente eligió esta receta? (desglose de factores)</summary>
      <table class="tablaFactores">
        <tr><th>Factor</th><th>Significado</th><th>Valor</th><th>Peso</th></tr>
        <tr><td>I</td><td>Ingredientes disponibles</td><td>${(factores.I * 100).toFixed(0)}%</td><td>0.35</td></tr>
        <tr><td>P</td><td>Preferencias y restricciones</td><td>${(factores.P * 100).toFixed(0)}%</td><td>0.20</td></tr>
        <tr><td>T</td><td>Tiempo disponible</td><td>${(factores.T * 100).toFixed(0)}%</td><td>0.20</td></tr>
        <tr><td>C</td><td>Presupuesto</td><td>${(factores.C * 100).toFixed(0)}%</td><td>0.15</td></tr>
        <tr><td>H</td><td>Historial / aprendizaje</td><td>${(factores.H * 100).toFixed(0)}%</td><td>0.10</td></tr>
      </table>
    </details>
    <div class="estrellas" data-id="${receta.id}">
      <span>Califica esta receta:</span>
      ${[1, 2, 3, 4, 5].map(n => `<button type="button" class="estrella ${n <= estrellasActuales ? "activa" : ""}" data-valor="${n}">★</button>`).join("")}
    </div>
  `;

  const contenedorEstrellas = tarjeta.querySelector(".estrellas");
  contenedorEstrellas.querySelectorAll(".estrella").forEach(btn => {
    btn.addEventListener("click", () => {
      const valor = Number(btn.dataset.valor);
      historial[receta.id] = valor;
      localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(historial));
      contenedorEstrellas.querySelectorAll(".estrella").forEach(b => {
        b.classList.toggle("activa", Number(b.dataset.valor) <= valor);
      });
      toast(`Calificaste "${receta.nombre}" con ${valor} estrella(s). El sistema usará esto en futuras recomendaciones.`);
    });
  });

  return tarjeta;
}

$btnRecomendar.addEventListener("click", () => {
  if (ingredientes.length === 0) {
    toast("Agrega al menos un ingrediente para obtener recomendaciones.");
    return;
  }

  const restricciones = Array.from(document.querySelectorAll(".chkDieta:checked")).map(c => c.value);
  const resultados = recomendar(
    ingredientes,
    Number($rango.value),
    Number($presupuesto.value) || 0,
    $tipo.value,
    restricciones,
    historial
  );

  $contenedor.innerHTML = "";
  $estadoVacio.hidden = true;
  $contador.textContent = `${resultados.length} receta(s)`;

  if (resultados.length === 0) {
    $contenedor.innerHTML = '<div class="estadoVacio"><p>Ninguna receta cumple con las restricciones seleccionadas.</p><p class="ayuda">Prueba desactivar algún filtro o ampliar tu presupuesto/tiempo.</p></div>';
    return;
  }

  resultados.forEach(item => {
    $contenedor.appendChild(renderizarTarjeta(item));
  });
});
