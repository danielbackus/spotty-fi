#!/bin/bash
# Cleanup any existing containers
docker-compose down
# Install dependencies and setup
# Setup backend
cd api
npm i
cd ..
# Setup frontend
cd ui
npm i
# Bring up containers
docker-compose up --build --remove-orphans
