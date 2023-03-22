import mongoose from "mongoose";
 const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,

    },
    ders: {
        type : String, 
    },
    statur :{
        typr: Boolean,
    }
 })
 export default mongoose.model('Product',productSchema)