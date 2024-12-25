import {model,Schema} from "mongoose"
import bcrypt from 'bcrypt'
const WorkerSchema=new Schema(
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
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }
        },
        phone:{
            type:Number,
            required:[true,"phone number is required"],
            validate:{
                validator:(v)=>v.toString().length==8,
                message:"phone number must be 8 numbers"
            }
        },
        address:{
            type:String,
        },
        acctype:{
            type:String,
            default:"Worker"
        },
        category:{
            type:String,
            required:[true,"Category is required"]
        },
        description:{
            type:String,
            required:[true,"description is required"],
            minlength:[10,"Description must be at least 10 characters"]
        },
        skills:{
            type:String,
            required:[true,"skills are required"]
        },
        password:{
            type:String,
            minlength:[8,"Password must be at least 8 characters!"],
            maxlength:[40,"Password must be less than 40 characters"]
        }
    },
    {timestamp:true}   
)

WorkerSchema.virtual('confirmPassword')
.get(function () { return this._confirmPassword })
.set( function (value)   { return this._confirmPassword = value });

WorkerSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });

    WorkerSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
    });
});

const Worker=model("Worker",WorkerSchema)
export default Worker