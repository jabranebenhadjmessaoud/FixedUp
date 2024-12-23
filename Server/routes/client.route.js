import ClientController from "../controllers/client.controller.js";

import { Router } from "express";

const router3=Router()

router3.route("/createclient")
    .post(ClientController.createClient)

router3.route("/allclient")
    .get(ClientController.retrieveAll)

router3.route("/client/:id")
    .get(ClientController.retrieveOne)
    .put(ClientController.update)
    .delete(ClientController.DeleteOne)

export default router3
