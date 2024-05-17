const express = require("express");
const router = express.Router();
const photoRoutes = require("./photoRoutes");

// Routes pour les photos
router.use("/photos", photoRoutes);

module.exports = router;
