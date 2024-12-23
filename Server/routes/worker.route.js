import WorkerController from "../controllers/worker.controller";
import { Router } from "express";

const router4=Router()

router4.route("/createworker")
    .post(WorkerController.createWorker)

router4.route("/allworker")
    .get(WorkerController.retrieveAll)

router4.route("/worker/:id")
    .get(WorkerController.retrieveOne)
    .put(WorkerController.update)
    .delete(WorkerController.DeleteOne)

export default router4
