#!/bin/bash
# Install dependencies and setup
# Setup backend
cd api
npm i
cd ..
# Setup frontend
# Bring up containers
docker-compose up --build
