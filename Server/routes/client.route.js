import ClientController from "../controllers/client.controller.js";

import { Router } from "express";

const router3=Router()

router3.route("/client/register")
    .post(ClientController.register)

router3.route("/client/login")
    .post(ClientController.login)

router3.route("/allclient")
    .get(ClientController.retrieveAll)
    .post(ClientController.createClient)

router3.route("/client/:id")
    .get(ClientController.retrieveOne)
    .put(ClientController.update)
    .delete(ClientController.DeleteOne)

export default router3
