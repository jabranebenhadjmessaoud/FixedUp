import Rate from "../models/rate.model.js";

const RateController={
    create: async (req, res) => {
        try {
            const newrate = await Rate.create(req.body)
            res.json(newrate)
            console.log(newrate);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveAll: async (req, res) => {
        try {
            const allrates = await Rate.find()
            res.json(allrates)
            console.log(allrates);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }
}

export default RateController