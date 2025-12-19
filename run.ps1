<# run.ps1 — start frontend and backend on Windows #>
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

Write-Host "Starting frontend (and backend if available)..."
Start-Process -NoNewWindow -FilePath npm -ArgumentList 'run','dev' -WorkingDirectory "$scriptDir\frontend"

if (Test-Path "$scriptDir\backend\package.json") {
  Start-Process -NoNewWindow -FilePath npm -ArgumentList 'run','dev' -WorkingDirectory "$scriptDir\backend" -ErrorAction SilentlyContinue
}
