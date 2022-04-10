const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

module.exports.connect = () => {
    mongoose
        .connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Application connectée à base de données.");
        })
        .catch((error) => {
            console.log("Erreur de connexion à base de données: " + error);
            process.exit(1);
        });
};