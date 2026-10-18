const CLAVE_HISTORIAL = "smartmeal_historial";

let ingredientes = [];
let historial = JSON.parse(localStorage.getItem(CLAVE_HISTORIAL) || "{}");
let ultimosResultados = [];

const $form = document.getElementById("recipe-form");
const $input = document.getElementById("ingredient-input");
const $btnAdd = document.getElementById("add-ingredient");
const $lista = document.getElementById("ingredient-list");
const $time = document.getElementById("time");
const $timeValue = document.getElementById("time-value");
const $budget = document.getElementById("budget");
const $foodType = document.getElementById("food-type");
const $results = document.getElementById("recipe-results");
const $empty = document.getElementById("empty-state");
const $status = document.querySelector(".agent-status");
const $headerBtn = document.querySelector(".header-button");
const $metrics = document.getElementById("metrics-panel");
const $modal = document.getElementById("recipe-modal");
const $modalBody = document.getElementById("modal-body");
const $modalClose = document.getElementById("modal-close");
const $toast = document.getElementById("toast");

const ETIQUETAS_TIPO = {
  breakfast: "Desayuno",
  lunch: "Comida",
  dinner: "Cena",
  snack: "Merienda"
};

const ICONOS_TIPO = {
  breakfast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3.4 0-6.3 4.1-6.3 8.4a6.3 6.3 0 0 0 12.6 0C18.3 7.1 15.4 3 12 3z"/><circle cx="12" cy="12.4" r="2.3"/></svg>',
  lunch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v20"/><path d="M4 2v5a3 3 0 0 0 6 0V2"/><path d="M21 15V2a4 4 0 0 0-4 4v6a2 2 0 0 0 2 2h2zm0 0v7"/></svg>',
  dinner: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/></svg>',
  snack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5c-1.2-1.8-3.2-2.4-4.8-1.4C5.3 7.3 4.6 10 5.4 13.8c.8 3.7 2.3 7.2 3.8 7.9.9.4 1.8 0 2.8 0s1.9.4 2.8 0c1.5-.7 3-4.2 3.8-7.9.8-3.8.1-6.5-1.8-7.7-1.6-1-3.6-.4-4.8 1.4z"/><path d="M12 7.5V4.8"/><path d="M12 4.8c1.2-1.3 2.8-1.8 4.3-1.5.1 1.9-1 3.4-2.6 3.8"/></svg>'
};

const ICONO_BUSCADOR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>';

function iconoSVG(tipo) {
  return ICONOS_TIPO[tipo] || ICONOS_TIPO.lunch;
}

function toast(mensaje) {
  $toast.textContent = mensaje;
  $toast.hidden = false;
  clearTimeout(toast.temporizador);
  toast.temporizador = setTimeout(() => { $toast.hidden = true; }, 2800);
}

function mayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function claseCompatibilidad(porcentaje) {
  if (porcentaje >= 70) return "alta";
  if (porcentaje >= 45) return "media";
  return "baja";
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

$btnAdd.addEventListener("click", agregarIngrediente);
$input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    agregarIngrediente();
  }
});

$time.addEventListener("input", () => {
  $timeValue.textContent = $time.value + " min";
});

$headerBtn.addEventListener("click", () => {
  $form.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => $input.focus(), 450);
});

function renderizarTarjeta(item) {
  const { receta, porcentaje } = item;
  const clase = claseCompatibilidad(porcentaje);

  const tarjeta = document.createElement("article");
  tarjeta.className = "recipe-card";
  tarjeta.innerHTML = `
    <div class="recipe-photo ${clase}">
      <span class="icon-circle foto-${receta.tipo}">${iconoSVG(receta.tipo)}</span>
      <span class="recipe-percent ${clase}">${porcentaje}%</span>
    </div>
    <div class="recipe-body">
      <span class="recipe-type">${ETIQUETAS_TIPO[receta.tipo]}</span>
      <h3>${receta.nombre}</h3>
      <div class="recipe-meta">
        <span>${receta.minutos} min</span>
        <span>$${receta.costo} MXN</span>
      </div>
      <div class="match-bar"><div class="match-fill ${clase}" style="width:${porcentaje}%"></div></div>
      <button type="button" class="recipe-view" data-ver="${receta.id}">Ver receta →</button>
    </div>
  `;
  return tarjeta;
}

function renderizarResultados(resultados) {
  $results.innerHTML = "";
  ultimosResultados = resultados;

  if (resultados.length === 0) {
    $empty.hidden = false;
    $empty.innerHTML = `
      <div class="empty-icon">${ICONO_BUSCADOR}</div>
      <h3>Sin recetas para estos filtros</h3>
      <p>Ninguna receta cumple con las condiciones seleccionadas. Prueba ampliar el tiempo o el presupuesto, o desactiva alguna preferencia.</p>
    `;
    return;
  }

  $empty.hidden = true;
  resultados.forEach(item => $results.appendChild(renderizarTarjeta(item)));
}

$results.addEventListener("click", e => {
  const btn = e.target.closest("[data-ver]");
  if (!btn) return;
  const id = Number(btn.dataset.ver);
  const item = ultimosResultados.find(r => r.receta.id === id);
  if (item) abrirModal(item);
});

function abrirModal(item) {
  const { receta, porcentaje, faltantes, factores } = item;
  const clase = claseCompatibilidad(porcentaje);
  const disponibles = receta.ingredientes.filter(i => faltantes.includes(i) === false);
  const estrellasActuales = historial[receta.id] || 0;

  $modalBody.innerHTML = `
    <div class="modal-hero ${clase}">
      <span class="icon-circle modal-icon foto-${receta.tipo}">${iconoSVG(receta.tipo)}</span>
      <div>
        <span class="recipe-type">${ETIQUETAS_TIPO[receta.tipo]}</span>
        <h2 class="modal-title">${receta.nombre}</h2>
        <div class="recipe-meta">
          <span>${receta.minutos} min</span>
          <span>$${receta.costo} MXN</span>
        </div>
      </div>
      <div class="modal-percent ${clase}">
        <strong>${porcentaje}%</strong>
        <span>compatibilidad</span>
      </div>
    </div>

    <p class="modal-desc">${receta.descripcion}</p>

    <div class="modal-cols">
      <div class="modal-col">
        <h4>Tienes</h4>
        ${disponibles.map(i => `<span class="ing ok">✓ ${mayuscula(i)}</span>`).join("") || '<span class="ing falta">Ninguno</span>'}
      </div>
      <div class="modal-col">
        <h4>Faltan</h4>
        ${faltantes.map(i => `<span class="ing falta">✗ ${mayuscula(i)}</span>`).join("") || '<span class="ing ok">¡Ninguno!</span>'}
      </div>
    </div>

    <div class="modal-section">
      <h4>Preparación</h4>
      <ol class="modal-steps">
        ${receta.pasos.map(p => `<li>${p}</li>`).join("")}
      </ol>
    </div>

    <div class="modal-section">
      <h4>Análisis del agente</h4>
      <table class="modal-factors">
        <tr><th>Factor</th><th>Significado</th><th>Valor</th><th>Peso</th></tr>
        <tr><td>I</td><td>Ingredientes disponibles</td><td>${Math.round(factores.I * 100)}%</td><td>0.35</td></tr>
        <tr><td>P</td><td>Preferencias y tipo de comida</td><td>${Math.round(factores.P * 100)}%</td><td>0.20</td></tr>
        <tr><td>T</td><td>Tiempo disponible</td><td>${Math.round(factores.T * 100)}%</td><td>0.20</td></tr>
        <tr><td>C</td><td>Presupuesto</td><td>${Math.round(factores.C * 100)}%</td><td>0.15</td></tr>
        <tr><td>H</td><td>Historial / aprendizaje</td><td>${Math.round(factores.H * 100)}%</td><td>0.10</td></tr>
      </table>
    </div>

    <div class="modal-section modal-stars" data-id="${receta.id}">
      <h4>Califica esta receta</h4>
      <div class="stars-row">
        ${[1, 2, 3, 4, 5].map(n => `<button type="button" class="star ${n <= estrellasActuales ? "active" : ""}" data-valor="${n}">★</button>`).join("")}
      </div>
      <p class="stars-hint">Tu calificación se guarda y mejora las próximas recomendaciones (factor H).</p>
    </div>
  `;

  const contenedor = $modalBody.querySelector(".modal-stars");
  contenedor.querySelectorAll(".star").forEach(btn => {
    btn.addEventListener("click", () => {
      const valor = Number(btn.dataset.valor);
      historial[receta.id] = valor;
      localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(historial));
      contenedor.querySelectorAll(".star").forEach(b => {
        b.classList.toggle("active", Number(b.dataset.valor) <= valor);
      });
      toast('Calificaste "' + receta.nombre + '" con ' + valor + " estrella(s). El agente lo usará pronto.");
      actualizarSatisfaccion();
    });
  });

  $modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  $modal.hidden = true;
  document.body.style.overflow = "";
}

$modalClose.addEventListener("click", cerrarModal);
$modal.addEventListener("click", e => {
  if (e.target === $modal) cerrarModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !$modal.hidden) cerrarModal();
});

function setTexto(id, texto) {
  document.getElementById(id).textContent = texto;
}

function actualizarSatisfaccion() {
  const ids = Object.keys(historial);
  if (ids.length === 0) {
    setTexto("metric-satisfaccion", "Sin datos");
    setTexto("metric-sub-satisfaccion", "Califica recetas para medirla");
    return;
  }
  const suma = ids.reduce((acc, id) => acc + historial[id], 0);
  const promedio = suma / ids.length;
  const aceptadas = ids.filter(id => historial[id] >= 4).length;
  setTexto("metric-satisfaccion", promedio.toFixed(1) + " ★");
  setTexto("metric-sub-satisfaccion", aceptadas + " de " + ids.length + " recetas aceptadas (≥4★)");
}

function actualizarMetricas(resultados, ms) {
  $metrics.hidden = false;

  if (resultados.length > 0) {
    const relevantes = resultados.filter(r => r.porcentaje >= 70).length;
    setTexto("metric-precision", Math.round((relevantes / resultados.length) * 100) + "%");
    setTexto("metric-sub-precision", relevantes + " de " + resultados.length + " recetas con ≥70% de afinidad");

    const promedioI = resultados.reduce((acc, r) => acc + r.factores.I, 0) / resultados.length;
    setTexto("metric-coincidencia", Math.round(promedioI * 100) + "%");
    setTexto("metric-sub-coincidencia", "Promedio de ingredientes disponibles por receta");
  } else {
    setTexto("metric-precision", "0%");
    setTexto("metric-sub-precision", "Sin recetas con estos filtros");
    setTexto("metric-coincidencia", "0%");
    setTexto("metric-sub-coincidencia", "Sin resultados que promediar");
  }

  setTexto("metric-tiempo", ms.toFixed(2) + " ms");
  setTexto("metric-sub-tiempo", "Cálculo del motor de recomendación");
  actualizarSatisfaccion();
}

$form.addEventListener("submit", e => {
  e.preventDefault();

  if (ingredientes.length === 0) {
    toast("Agrega al menos un ingrediente para obtener recomendaciones.");
    $input.focus();
    return;
  }

  $status.textContent = "● Analizando...";
  $status.classList.add("busy");

  setTimeout(() => {
    const t0 = performance.now();
    const resultados = recomendar(
      ingredientes,
      Number($time.value),
      Number($budget.value) || 0,
      $foodType.value,
      Array.from(document.querySelectorAll('input[name="preferences"]:checked')).map(c => c.value),
      historial
    );
    const ms = performance.now() - t0;

    renderizarResultados(resultados);
    actualizarMetricas(resultados, ms);

    $status.textContent = "● Agente listo";
    $status.classList.remove("busy");
  }, 300);
});
