import {model,Schema} from "mongoose"

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
                validator:(v)=v.toString().length==8,
                message:"phone number must be 8 numbers"
            }
        },
        address:{
            type:String,
        },
        acctype:{
            type:String,
            default:"Client"
        },
        password:{
            type:String,
            required:[true,"password is required"],
            minlength:[8,"Password must be at least 8 characters!"]
        },
        category:{
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
            required:[true,"password is required"],
            minlength:[8,"Password must be at least 8 characters!"]
        },
    },
    {timestamp:true}   
)

WorkerSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );

WorkerSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });
    const bcrypt = require('bcrypt');

    WorkerSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
    });
});

const Worker=model("Worker",WorkerSchema)
export default Worker