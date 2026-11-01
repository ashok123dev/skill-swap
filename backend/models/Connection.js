const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema(
    {
        studentId: {
            type: Number,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        tech: {
            type: String,
            required: true
        },

        learn: {
            type: String,
            required: true
        },

        time: {
            type: String,
            required: true
        },

        status: {
            type: String,
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Connection",
    connectionSchema
);