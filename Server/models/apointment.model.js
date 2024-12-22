import {model ,Schema} from 'mongoose'

const apointement= new Schema({
    clientID:{
        type:String,
        required:[true,"Please Enter A valid Client ID"]
        },
    workerID:{
        type:String,
        required:[true,"Please Enter A valid Worker ID"]
        },
    date:{
        type:Date,
        required:[true," Please enter a valid Date"]
    },
    jobstatus:{
        type:String,
        validate:{
                    validator:(t)=>["In Progress","Pending","Done"].includes(t),
                    message:(props)=>props.value+ " is not valid Job Status"
            }
        }
    
},
{ timestamps: true }
)
const Apointement=model("Apointement",apointement)

export default Apointement