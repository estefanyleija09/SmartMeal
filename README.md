# SmartMeal
Proyecto integrador de la materia sistemas inteligentes

## Instalable como app (PWA)
https://estefanyleija09.github.io/SmartMeal/

## Automatización

| Comando | Qué hace |
|---|---|
| `node tests/tests.js` | Suite completa: sintaxis, IDs, manifiesto, sinónimos, motor (31 checks) |
| `powershell -ExecutionPolicy Bypass -File scripts\deploy.ps1` | Tests → sube versión de caché (`smartmeal-vN`) → commit → push → espera a que Pages quede en línea |
| `scripts\deploy.ps1 -Mensaje "mi mensaje"` | Igual pero con mensaje de commit propio |

- **Hook `pre-push`** (`scripts/githooks/pre-push`): cada `git push` ejecuta los tests automáticamente y cancela el push si algo falla. Se activa con `git config core.hooksPath scripts/githooks` (el deploy lo hace solo).
- **CI en GitHub Actions** (`.github/workflows/tests.yml`): corre los mismos tests en cada push/PR — pestaña *Actions* del repo.

> Al actualizar código, la caché del service worker se debe renovar para que los usuarios vean los cambios. El deploy hace ese bump automáticamente.
