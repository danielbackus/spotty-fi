#!/bin/bash
docker-compose up --remove-orphans --detach ui api 
npm run test
docker-compose up --remove-orphans e2e
