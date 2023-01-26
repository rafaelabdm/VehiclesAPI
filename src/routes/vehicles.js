// routes/costumers.js

const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehicles.js");

// Create a resource
router.post("/", controller.createOne);

// Retrieve all resources
router.get("/", controller.getAll);

// Retrieve a resources
router.get("/:id", controller.getOne);

// Update a resource (complete)
router.patch("/:id", controller.changeOne);

// Delete a resource
router.delete("/:id", controller.removeOne);

module.exports = router;