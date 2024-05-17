const { Photo } = require("../model/photo.js");
const axios = require("axios");
const { getCached, setCached } = require("./cacheService.js");
const photoApiUrl = "https://jsonplaceholder.typicode.com/photos";

class PhotoService {
  async getAll() {
    try {
      // check if there is data on cache
      const cachedData = await getCached("photos");
      if (cachedData !== null) {
        console.log("from cache");
        return JSON.parse(cachedData);
      }

      // If not cached data load from api
      const response = await axios.get(photoApiUrl);
      const photosData = response.data;
      const photos = photosData.map(
        (photoData) =>
          new Photo(
            photoData.albumId,
            photoData.id,
            photoData.title,
            photoData.url,
            photoData.thumbnailUrl
          )
      );

      // set data to the cache for 1hour
      await setCached("photos", photos, 3600);
      console.log("from api");
      return photos;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    const key = `photos:${id}`;
    try {
      const cachedData = await getCached(key);
      if (cachedData !== null) {
        console.log("from cache");
        return JSON.parse(cachedData);
      }
      const response = await axios.get(`${photoApiUrl}/${id}`);
      const photoData = response.data;
      const photo = new Photo(
        photoData.albumId,
        photoData.id,
        photoData.title,
        photoData.url,
        photoData.thumbnailUrl
      );
      await setCached(key, photo, 300);
      console.log("from api");
      return photo;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const photoService = new PhotoService();

module.exports = { photoService };
