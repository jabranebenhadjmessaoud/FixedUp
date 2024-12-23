import ApointementController from "../controllers/apointment.controller.js";
import { Router } from "express";

const router2=Router()

router2.route("/createapointment")
    .post(ApointementController.create)

router2.route("/allapointments")
    .get(ApointementController.retrieveAll)

router2.route("/apointment/:id")
    .get(ApointementController.retrieveOne)
    .put(ApointementController.update)
    .delete(ApointementController.DeleteOne)

    



export default router2
