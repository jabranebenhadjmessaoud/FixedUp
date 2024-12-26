import {model ,Schema} from 'mongoose'

const donjobSchema= new Schema({
    worker:{
        type:{ type: Schema.Types.ObjectId, ref: 'Worker' },
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
},
{ timestamps: true }
)
const JobPost=model("JobPost",donjobSchema)

export default JobPost