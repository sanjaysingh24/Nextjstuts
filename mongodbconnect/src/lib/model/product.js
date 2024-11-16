import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    price: {
        type: String,
    },
    color: {
        type: String,
    },
    category: {
        type: String,
    },
});

// Check for `Product` in `mongoose.models` instead of `Products`
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
