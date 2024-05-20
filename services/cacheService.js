const { redisClient } = require("../config/redisClient");

const getCached = async (key) => {
  try {
    return await redisClient.get(key);
  } catch (error) {
    console.error(`Error to get data from redis server : ${error.message}`);
    return null;
  }
};

const setCached = async (key, data, expriation = -1) => {
  try {
    await redisClient.set(key, JSON.stringify(data), "EX", expriation);
  } catch (error) {
    console.error(`Error to set data to redis server : ${error.message}`);
    return false;
  }
};

module.exports = { getCached, setCached };
