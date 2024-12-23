import {model,Schema} from "mongoose"

const ClientSchema=new Schema(
    {
        firstName:{
            type:String,
            required:[true,"First Name is required"],
            minlength:[2,"First Name must be at least 2 characters!"],
            maxlength:[255,"First Name must be less than 255 characters long!"]
        },
        lastName:{
            type:String,
            required:[true,"Last Name is required"],
            minlength:[2,"Last Name must be at least 2 characters!"],
            maxlength:[255,"Last Name must be less than 255 characters long!"]
        },
        email:{
            type:String,
            required:[true,"Email is required"],
        },
        phone:{
            type:String,
            minlength:[8,"please put 8 numbers"],
            maxlength:[8,"please put 8 numbers"]
        },
        address:{
            type:String,
        },
        acctype:{
            type:String,
            validate:{
                validator:(t) => ["Client","Worker"].includes(t),
                message:(props) => props.value+" is not a valid Account type"
            }
        },
        password:{
            type:String,
            minlength:[8,"Password must be at least 8 characters!"],
            maxlength:[40,"Password must be less than 40 characters"]
        }
    },
    {timestamp:true}
)

const Client=model("Client",ClientSchema)
export default Client