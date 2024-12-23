import Client from "../models/client.model.js";

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
            const client = await clientSchema.findOne({ email: req.body.email });
    
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
                .json({ msg: "success!", client: { firstName: client.firstName, lastName: client.lastName } });
    
        } catch (err) {
            console.error(err);
            return res.status(500).json({ msg: "Server error", error: err.message });
        }
    },
    register: (req, res) => {
        clientSchema  .create(req.body)
            .then(client => {
                const clientToken = jwt.sign({
                    id: client._id
                }, process.env.SECRET_KEY);
        
                res
                    .cookie("clienttoken", clientToken, secret, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", client: client });
            })
            .catch(err => res.json(err));
        },
    logout: (req, res) => {
        res.clearCookie('clienttoken');
        res.sendStatus(200);
    }
}

export default ClientController