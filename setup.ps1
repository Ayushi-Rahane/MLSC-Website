<#
  setup.ps1 — Windows PowerShell setup script
  - Checks Node.js
  - Installs frontend and backend dependencies
  - Creates .env placeholders
  - Starts the frontend dev server
#>

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Error: Node.js is not installed. Download from https://nodejs.org/" -ForegroundColor Red
  exit 1
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptDir

Write-Host "Installing frontend dependencies..."
Set-Location "$scriptDir\frontend"
npm install

Write-Host "Installing backend dependencies..."
Set-Location "$scriptDir\backend"
npm install

if (-not (Test-Path .env)) {
  Write-Host "Creating backend\.env placeholder"
  @"
# Backend env placeholder
PORT=4000
"@ | Out-File -FilePath .env -Encoding utf8
}

if (-not (Test-Path "$scriptDir\frontend\.env")) {
  Write-Host "Creating frontend\.env placeholder"
  @"
# Frontend env placeholder
VITE_API_BASE_URL=http://localhost:4000
"@ | Out-File -FilePath "$scriptDir\frontend\.env" -Encoding utf8
}

Write-Host "Starting frontend dev server..."
Set-Location "$scriptDir\frontend"
npm run dev
