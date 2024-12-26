import JobPostController from "../controllers/jobpost.controller.js";
import { Router } from "express";
import authenticate from "../config/jwt.config.js"

const router=Router()

// router.route("/createjobpost")
//     .post(authenticate,JobPostController.create)
router.post("/createjobpost",authenticate,JobPostController.create)
router.route("/alljobposts")
    .get(JobPostController.retrieveAll)

router.route("/jobpost/:id")
    .get(JobPostController.retrieveOne)
    .put(JobPostController.update)
    .delete(JobPostController.DeleteOne)

    

    


export default router
