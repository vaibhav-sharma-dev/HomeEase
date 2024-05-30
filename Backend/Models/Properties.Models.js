import mongoose from "mongoose";


const propertiesSchema = new mongoose.Schema(
    {
        rent: {
            type: Boolean,
        },

        sell: {
            type: Boolean,
        },

        propertyType: {
            type: String,
            required: true,
        },

        intPrice: {
            type: Number,
        },

        localPrice: {
            type: Number,
        },

        rating: {
            type: Number,
            required: true,
        },

        intSizeSqFt: {
            type: Number,
            required: true,
        },

        intSizeSqYard: {
            type: Number,
            required: true,
        },

        localSize: {
            type: String,
            required: true,
        },

        noOfRooms: {
            type: Number,
            required: true,
        },

        noOfBaths: {
            type: Number,
            required: true,
        },

        personalParking: {
            type: Boolean,
            required: true,
        },

        furnished: {
            type: Boolean,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        imagesUrl: {
            type: Array,
            required: true,
        }
    },

    {timestamps: true},
)

const Property = new mongoose.model("Property", propertiesSchema);


export default Property;