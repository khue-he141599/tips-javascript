const { Schema, model } = require("mongoose");

const ApiKeySchema = new Schema(
    {
        key: { type: String, required: true, unique: true, maxlength: 120, trim: true },
        version: { type: String },
        description: { type: String },
        permissions: { type: String },
        status: { type: String },
    },
    { collection: "apikeys", timestamps: true }
);

const ApiKeyModel = model("apikeys", ApiKeySchema);

module.exports = ApiKeyModel;
