#!/bin/bash

if docker ps | grep -q 'chat-db'; then
    rm -rf ./dist && npm run start
else
    docker-compose up -d && rm -rf ./dist && npm run start
fi
