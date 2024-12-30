import RateController from "../controllers/rate.controller.js";
import { Router } from "express";
import authenticate from "../config/jwt.config.js";

const router5=Router()

router5.post("/addrate",authenticate,RateController.create)

router5.route("/allrates")
    .get(RateController.retrieveAll)

router5.route("/allrates/:id")
    .get(RateController.retrieveByWorker)


export default router5