const dbConfig = require('../config/db.config.js');

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URL;

(async () => {
    try {
        await db.mongoose.connect(db.url,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
        console.log("Connected to the database!");
    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
})();

db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;