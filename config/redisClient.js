const Redis = require("ioredis");

const redisClient = new Redis({ maxRetriesPerRequest: 0 });

redisClient.on("connect", () => {
  console.log(`Connected to redis server`);
});

redisClient.on("error", (err) => {
  console.error("Error to connect to redis server", err);
});

module.exports = { redisClient };
