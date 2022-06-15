module.exports = (mongoose) => {
    const schema = mongoose.Schema(
            {
                title: { type: String, required: [true, 'Why no title?'] },
                description: String,
                published: { type: Boolean, default: false}
            },
            { timestamps: false }
        );
    // creates a new model Tutorial using the defined schema above
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
};