const { photoService } = require("../services/photoService");

const getAllPhotos = async (req, res) => {
  const key = "photos";
  try {
    const photos = await photoService.getAll();
    res.json(photos);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ error: error.message });
  }
};

const getPhotoById = async (req, res) => {
  const { id } = req.params;
  try {
    const photo = await photoService.getById(id);
    res.json(photo);
  } catch (error) {
    console.error("Error fetching photo:", error);
    res.status(500).send(`Error fetching photo : ${error.message}`);
  }
};

module.exports = {
  getAllPhotos,
  getPhotoById,
};
