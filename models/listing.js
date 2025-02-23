const mongoose =  require("mongoose");
const listingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image: {
        filename: {
            type: String,
            // required: true, // Ensures a filename is always provided
            default: "default-image" // Optional: Provide a default filename
        },
        url: {
            type: String,
            // required: true, // Ensures a URL is always provided
            default: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            set: (v) => v === " " 
                    ? "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    : v
            
        },
    },
    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    }
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;