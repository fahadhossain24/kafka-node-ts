# Kafka Orders App

A simple event-driven Node.js app using Kafka and MongoDB with Docker.

## Features

- REST endpoint to create orders
- Kafka producer to emit order events
- Kafka consumer to process orders and store them in MongoDB

## Run Locally

```bash
docker-compose up -d
npm install
npm run dev
```

## Test

```bash
curl -X POST http://localhost:5000/orders \
  -H "Content-Type: application/json" \
  -d '{"product": "iPhone", "quantity": 2, "price": 1200}'
```
