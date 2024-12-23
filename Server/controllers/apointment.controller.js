import Apointement from "../models/apointment.model.js";


const ApointementController={

    create: async (req, res) => {
        try {
            const newapointment = await Apointement.create(req.body)
            res.json(newapointment)
            console.log(newapointment);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveAll: async (req, res) => {
        try {
            const Allapointments = await Apointement.find()
            res.json(Allapointments)
            console.log(Allapointments);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveOne: async (req, res) => {
        try {
            const Oneapointment = await Apointement.findById(req.params.id)
            res.json(Oneapointment)
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
            const updateapointment = await Apointement.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updateapointment)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const onapp = await Apointement.findByIdAndDelete(req.params.id)
            res.json({ response: " ok " })
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }

}



export default ApointementController