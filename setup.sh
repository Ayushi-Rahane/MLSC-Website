#!/usr/bin/env bash
set -e

echo "MLSC setup (macOS / Linux) — checking prerequisites..."

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is not installed."
  echo "Install Node.js from https://nodejs.org/ or use your package manager (brew, apt)."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not available. Install Node.js which includes npm."
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "Installing frontend dependencies..."
cd frontend
npm install

echo "Installing backend dependencies..."
cd ../backend
npm install

# Create .env placeholders if missing
if [ ! -f .env ]; then
  echo "Creating backend/.env placeholder"
  cat > .env <<EOF
# Backend env placeholder
PORT=4000
EOF
fi

if [ ! -f ../frontend/.env ]; then
  echo "Creating frontend/.env placeholder"
  cat > ../frontend/.env <<EOF
# Frontend env placeholder
VITE_API_BASE_URL=http://localhost:4000
EOF
fi

echo "Setup complete. Starting frontend dev server..."
cd ../frontend
npm run dev
