import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : {
        type: String,
        required : true ,
        unique : true
    },
    password : {
        type: String ,
        required : true
    },
    email: {
        type: String, 
    }
});

export default mongoose.model.Users || mongoose.model("User", schema);
