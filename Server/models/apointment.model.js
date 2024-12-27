import {model ,Schema} from 'mongoose'

const apointement= new Schema({
    client:{
        type:{ type: Schema.Types.ObjectId, ref: 'Client' }
        },
    worker:{
        type:{ type: Schema.Types.ObjectId, ref: 'Worker' }
        },
    date:{
        type:Date,
        required:[true," Please enter a valid Date"]
    },
    description:{
        type:String,
        required:[true,"Please enter the job description"],
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