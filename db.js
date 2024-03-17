import mongoose from "mongoose";
const URI = "mongodb+srv://naderzaman246:nader599@oyo-clone.dcleohv.mongodb.net/OYO"

const connectDb = async()=>{
await mongoose.connect(URI);
console.log("Db Connected ......");
} 
export default connectDb;