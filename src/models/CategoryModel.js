import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category:{type:String , required:true},
    productId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ]
})