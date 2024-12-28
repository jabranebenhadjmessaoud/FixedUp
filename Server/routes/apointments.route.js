import authenticate from "../config/jwt.config.js";
import ApointementController from "../controllers/apointment.controller.js";
import { Router } from "express";

const router2=Router()

router2.post("/createapointment",authenticate,ApointementController.create)

router2.route("/allapointments")
    .get(ApointementController.retrieveAll)

router2.route("/apointment/:id")
    .get(ApointementController.retrieveOne)
    .put(ApointementController.update)
    .delete(ApointementController.DeleteOne)

    



export default router2
