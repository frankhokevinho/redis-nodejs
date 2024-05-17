const express = require("express");
const routes = require("./routes/routes");
const loggerMiddleware = require("./middlewares/logger");

const app = express();

// Middleware for log
app.use(loggerMiddleware);

// Define the middleware to parse the body of JSON requests
app.use(express.json());

// Mount all application routes
app.use("/", routes);

// Listening port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
