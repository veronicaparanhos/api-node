const { Router } = require("express");

const SessionController = require("../controllers/SessionController");
const sessionsController = new SessionController();

const sessionRoutes = Router();
sessionRoutes.post("/", sessionsController.create);

module.exports = sessionRoutes;
