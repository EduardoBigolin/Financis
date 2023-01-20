import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to API",
  });
});

export default routes;