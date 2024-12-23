import JobPost from "../models/jobpost.model.js"


const JobPostController={

    create: async (req, res) => {
        try {
            const newjobpost = await JobPost.create(req.body)
            res.json(newjobpost)
            console.log(newjobpost);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveAll: async (req, res) => {
        try {
            const Alljobposts = await JobPost.find()
            res.json(Alljobposts)
            console.log(Alljobposts);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveOne: async (req, res) => {
        try {
            const onejobpost = await JobPost.findById(req.params.id)
            res.json(onejobpost)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    update: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const updatejobpost = await JobPost.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updatejobpost)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const onepost = await JobPost.findByIdAndDelete(req.params.id)
            res.json({ response: " ok " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }

}



export default JobPostController