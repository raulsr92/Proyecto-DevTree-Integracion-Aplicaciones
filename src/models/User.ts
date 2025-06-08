import mongoose, {Schema} from "mongoose";

interface IUser{
    name:String
    email:String
    password:String
}

const userSchema = new Schema({
    //Atributos
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match: [/^\S+@\S+\.\S+$/, "Por favor ingresa un email válido"]
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
}
)

// Crear el modelo 

const UserModel = mongoose.model<IUser>("User",userSchema)

export default UserModel