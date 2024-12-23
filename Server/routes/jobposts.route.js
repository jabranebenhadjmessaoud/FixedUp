import JobPostController from "../controllers/jobpost.controller.js";
import { Router } from "express";

const router=Router()

router.route("/createjobpost")
    .post(JobPostController.create)

router.route("/alljobposts")
    .get(JobPostController.retrieveAll)

router.route("/jobpost/:id")
    .get(JobPostController.retrieveOne)
    .put(JobPostController.update)
    .delete(JobPostController.DeleteOne)

    

    


export default router
