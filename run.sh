#!/usr/bin/env bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "Starting frontend (and backend if present)..."

cd frontend
npm run dev &
FRONTEND_PID=$!

cd ../backend || exit 0
if [ -f package.json ]; then
  npm run dev || npm start &
fi

wait $FRONTEND_PID
