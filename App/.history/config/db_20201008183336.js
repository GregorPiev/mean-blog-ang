module.exports = {
    password: 'piev180457',
    MONGODB_URI: `mongodb+srv://gregpiev:piev180457@cluster0.5piji.mongodb.net/blog?retryWrites=true&w=majority`,
    SESSION_SECRET: 'some secret values',
    SENDGRID_API_KEY: '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',
    EMAIL_FROM: 'gregpiev@gmail.com',
    BASE_URL: 'http://localhost:3000'
}


/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://gregpiev:<password>@cluster0.5piji.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
}); */
