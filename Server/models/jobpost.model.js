import {model ,Schema} from 'mongoose'
import Worker from "./worker.model.js"
const donjobSchema= new Schema({
    worker:{
        type:String,
        required:true
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
        type:String,
        required:[true,"Please Enter image"],
    },
},
{ timestamps: true }
)
const JobPost=model("JobPost",donjobSchema)

export default JobPost