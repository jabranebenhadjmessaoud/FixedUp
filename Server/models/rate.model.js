import {model ,Schema} from 'mongoose'

const rate= new Schema({
    client:{
        type:{ type: Schema.Types.ObjectId, ref: 'Client' }
        },
    worker:{
        type:{ type: Schema.Types.ObjectId, ref: 'Worker' }
        },
    rate:{
        type:Number,
        required:[true," Please enter a rate"]
    },
    
},
{ timestamps: true }
)
const Rate=model("Rate",rate)

export default Rate