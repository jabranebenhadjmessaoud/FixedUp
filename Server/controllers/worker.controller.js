import Worker from "../models/worker.model.js";
const WorkerController={
    createWorker: async(req,res)=>{
        try {
            const newWorker = await Worker.create(req.body)
            res.json(newWorker)
            console.log(newWorker);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveAll: async (req, res) => {
        try {
            const AllWorker = await Worker.find()
            res.json(AllWorker)
            console.log(AllWorker);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveOne: async (req, res) => {
        try {
            const OneWorker = await Worker.findById(req.params.id)
            res.json(OneWorker)
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
            const updateWorker = await Worker.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updateWorker)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const one = await Worker.findByIdAndDelete(req.params.id)
            res.json({ response: " ok " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    login: async(req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ msg: "Email and password are required" });
        }
    
        try {
            const worker = await WorkerSchema.findOne({ email: req.body.email });
    
            if (worker === null) {
                return res.status(400).json({ msg: "Email not found" });
            }
    
            const correctPassword = await bcrypt.compare(req.body.password, worker.password);
    
            console.log(correctPassword);
            if (!correctPassword) {
                
                return res.status(400).json({ msg: "Incorrect password" });
            }
    
            const workerToken = jwt.sign(
                { id: worker._id },
                process.env.SECRET_KEY,
                { expiresIn: '24h' } 
            );
                res.cookie("workertoken", workerToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                })
                .json({ msg: "success!", worker: { firstName: worker.firstName, lastName: worker.lastName } });
    
        } catch (err) {
            console.error(err);
            return res.status(500).json({ msg: "Server error", error: err.message });
        }
    },
    register: (req, res) => {
        WorkerSchema  .create(req.body)
            .then(worker => {
                const workerToken = jwt.sign({
                    id: worker._id
                }, process.env.SECRET_KEY);
        
                res
                    .cookie("workertoken", workerToken, secret, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", worker: worker });
            })
            .catch(err => res.json(err));
        },
    logout: (req, res) => {
        res.clearCookie('workertoken');
        res.sendStatus(200);
    }
}

export default WorkerController