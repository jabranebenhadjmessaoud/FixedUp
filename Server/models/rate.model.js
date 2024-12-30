import {model ,Schema} from 'mongoose'

const rate= new Schema({
    client:{
        type:String,
        required:true
        },
    worker:{
        type:String,
        required:true
        },
    rate:{
        type:Number,
        required:[true," Please enter a rate"],
        min:[0,"please enter a number from 1 to 10"],
        max:[10,"please enter a number from 1 to 10"]
    },
},
{ timestamps: true }
)
const Rate=model("Rate",rate)

export default Rate