import Client from "../models/client.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const ClientController={
    createClient: async(req,res)=>{
        try {
            const newclient = await Client.create(req.body)
            res.json(newclient)
            console.log(newclient);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveAll: async (req, res) => {
        try {
            const AllClients = await Client.find()
            res.json(AllClients)
            console.log(AllClients);
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    retrieveOne: async (req, res) => {
        try {
            const OneClient = await Client.findById(req.params.id)
            res.json(OneClient)
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
            const updateClient = await Client.findByIdAndUpdate(req.params.id, req.body, options)
            res.json(updateClient)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    DeleteOne: async (req, res) => {
        try {
            const one = await Client.findByIdAndDelete(req.params.id)
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
            const client = await Client.findOne({ email: req.body.email });
    
            if (client === null) {
                return res.status(400).json({ msg: "Email not found" });
            }
    
            const correctPassword = await bcrypt.compare(req.body.password, client.password);
    
            console.log(correctPassword);
            if (!correctPassword) {
                
                return res.status(400).json({ msg: "Incorrect password" });
            }
    
            const clientToken = jwt.sign(
                { id: client._id },
                process.env.SECRET_KEY,
                { expiresIn: '24h' } 
            );
                res.cookie("clienttoken", clientToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                })
                .json({ msg: "success!", client: { firstName: client.firstName, lastName: client.lastName, id: client._id,acctype:client.acctype},token:clientToken });
    
        } catch (err) {
            console.error(err);
            return res.status(500).json({ msg: "Server error", error: err.message });
        }
    },
        register : async (req, res) => {
        try {
            const { firstName, lastName,phone,address,acctype, email, password, confirmPassword } = req.body;
    
            // Check if the password matches the confirmation password
            
    
            // Check if the email already exists
            const existingClient = await Client.findOne({ email });
    
            if (existingClient) return res.status(400).json({errors:{ email: {message:'Email already in use' }}});
    
            // Create a new Client
            const newClient = new Client({ firstName, lastName,phone,address,acctype, email, password,confirmPassword});
            await newClient.save();
    
            res.status(201).json({ message: 'Client registered successfully' });
        } catch (err) {
            res.status(500).json(err );
            console.log(err)
        }
    },
    // register: async (req, res) => {
    //     const client = await Client.findOne({ email: req.body.email });
    
    //     if (client != null) {
    //         return res.status(500).json({  email: {message:"Email is used"} });
    //     }
    //     Client.create(req.body)
    //         .then(client => {
    //             const clientToken = jwt.sign({
    //                 id: client._id
    //             }, process.env.SECRET_KEY);
        
    //             return res .status(200)
    //                 .cookie("clienttoken", clientToken, secret, {
    //                     httpOnly: true
    //                 })
    //                 .json({ msg: "success!", client: client,token:clientToken });
    //         })
    //         .catch(err => res.status(500).json(err));
    //     },
    logout: (req, res) => {
        res.clearCookie('clienttoken');
        res.sendStatus(200);
    }
}

export default ClientController