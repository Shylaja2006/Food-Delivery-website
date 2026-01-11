import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/food_delivery').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string in .env file as MONGODB_URI
// Do not use '@' symbol in your database user's password else it will show an error.