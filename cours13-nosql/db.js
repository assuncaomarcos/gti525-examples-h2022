const { MongoClient } = require('mongodb');
const url = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB;

module.exports = class DBConnection {
    static connection;

    static async connect() {
        const client = new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        let db = await client.connect();
        DBConnection.connection = db.db(databaseName);
    }

    static db() {
        return DBConnection.connection;
    }
};