# Photo API with Redis Caching

## Description

This project is a simple Node.js application using Express that fetches photos from an external API and caches the responses in Redis using the ioredis package. The application is structured following the MVC (Model-View-Controller) pattern.

## Features

- Fetches photos from an external API
- Caches responses in Redis
- Structured using MVC pattern

## Project Structure

redis-nodejs/
│
├── config/
│ ├── redisClient.js
│
├── controllers/
│ ├── photoController.js
│
├── middlewares/
│ ├── logger.js
│
├── models/
│ ├── photo.js
│
├── routes/
│ ├── photoRoutes.js
│ ├── routes.js
│
├── services/
│ ├── cacheService.js
│ ├── photoService.js
│
├── tests/
│ ├── photoService.test.js
│
├── utils/
│ ├── formatDate.js
│
├── .gitignore
├── app.js
├── index.js
├── package-lock.json
├── package.json
├── README.md

## Requirements

- Node.js (version 12.x or higher)
- npm (version 6.x or higher)
- Redis (running on localhost:6379 or modify `config/redisClient.js` for your configuration)

## Installation

1. Clone the repository

```bash
git clone https://github.com/frankhokevinho/redis-nodejs.git
```

2. Install dependencies

```bash
cd redis-nodejs
npm install
```

## Running the Application

1. Start the server

```bash
node app.js
```

## Testing the Application

1. Fetch all photos

```bash
curl http://localhost:3000/photos
```

2. Fetch a photo by ID

```bash
curl http://localhost:3000/photos/1
```

### More Tips :

- **Requirements**: You can use Docker to setup redis. You should only expose the port.
- **Running the Application**: You can use `bash npm run watch` to livereload.
- **Testing performace**: You can use **postman** to test cache efficiency. First call should be longer than the other one for the api call.
