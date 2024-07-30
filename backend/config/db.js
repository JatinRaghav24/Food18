import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://food18:food18@food18.4j1vn2u.mongodb.net/food-del').then(()=>console.log("db connected"));
}