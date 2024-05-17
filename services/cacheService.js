const { redisClient } = require("../config/redisClient");

const getCached = async (key) => {
  return await redisClient.get(key);
};

const setCached = async (key, data, expriation = -1) => {
  await redisClient.set(key, JSON.stringify(data), "EX", expriation);
};

module.exports = { getCached, setCached };
