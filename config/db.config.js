const config = {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME
};

config.URL = `mongodb+srv://${config.USER}:${config.PASSWORD}@cluster0.mun28.mongodb.net/${config.DB}?retryWrites=true&w=majority`;
//config.URL = `mongodb://${config.USER}:${config.PASSWORD}@cluster0.mun28.mongodb.net/${config.DB}?retryWrites=true&w=majority`;
module.exports = config;