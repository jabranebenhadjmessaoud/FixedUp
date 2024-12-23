import {model ,Schema} from 'mongoose'

const donjobSchema= new Schema({
    workerID:{
        type:String,
        required:[true,"Worker Id not Valid"]
    },
    title:{
        type:String,
        required:[true,"Please Enter A valid Tittle"],
        minlength:[2,"The tittle must be at least 3 characters"],
        maxlength:[255,"the tittle cannot be more than 255 caracters"]
        },
    description:{
        type:String,
        required:[true,"Please Enter A valid Job Description"],
        minlength:[2,"The Description must be at least 3 characters"],
        maxlength:[255,"the Description cannot be more than 255 caracters"]
        },
    img:{
        type:String
    },
    workername:{
        type:String,
        required:[true,"Please Enter A valid worker name"],
        minlength:[2,"The worker name must be at least 3 characters"],
        maxlength:[255,"the worker name cannot be more than 255 caracters"]
    }
    
},
{ timestamps: true }
)
const JobPost=model("JobPost",donjobSchema)

export default JobPost