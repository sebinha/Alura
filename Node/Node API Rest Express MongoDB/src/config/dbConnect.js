import mongoose, { mongo } from "mongoose";
import "dotenv/config";


const dbConnect = async () =>{
    mongoose.connect(process.env.MONGODB_URI);

    return mongoose.connection;
} 

export default dbConnect;