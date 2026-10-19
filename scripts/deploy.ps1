param([string]$Mensaje = "")

$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

Write-Output "== 1/4 Suite de tests =="
node tests/tests.js
if ($LASTEXITCODE -ne 0) {
  Write-Output "ABORTADO: tests fallidos."
  exit 1
}

Write-Output "== 2/4 Bump de cache del service worker =="
$csw = Get-Content "service-worker.js" -Raw
$actual = [regex]::Match($csw, "smartmeal-v(\d+)").Groups[1].Value
$nuevo = [int]$actual + 1
$csw = $csw -replace "smartmeal-v$actual", "smartmeal-v$nuevo"
Set-Content "service-worker.js" $csw -NoNewline
Write-Output "cache: smartmeal-v$actual -> smartmeal-v$nuevo"

Write-Output "== 3/4 Commit y push =="
git config core.hooksPath scripts/githooks
git add -A
$cambios = git status --porcelain
if (-not $cambios) {
  Write-Output "Sin cambios que subir."
  exit 0
}
if (-not $Mensaje) { $Mensaje = "Deploy v$nuevo - $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }
git commit -m $Mensaje
git push
if ($LASTEXITCODE -ne 0) {
  Write-Output "ABORTADO: push fallido."
  exit 1
}

Write-Output "== 4/4 Esperando compilacion de GitHub Pages =="
$estado = ""
for ($i = 1; $i -le 16; $i++) {
  Start-Sleep -Seconds 12
  $estado = gh api repos/estefanyleija09/SmartMeal/pages --jq .status
  Write-Output ("  intento $i : $estado")
  if ($estado -eq "built") { break }
}
if ($estado -eq "built") {
  try {
    $r = Invoke-WebRequest -Uri "https://estefanyleija09.github.io/SmartMeal/" -UseBasicParsing -TimeoutSec 30
    Write-Output "ONLINE: https://estefanyleija09.github.io/SmartMeal/ (HTTP $($r.StatusCode))"
  } catch {
    Write-Output "Pages compilo pero no responde: $($_.Exception.Message)"
  }
} else {
  Write-Output "Pages sigue en '$estado'; revisa despues en el repo."
}
