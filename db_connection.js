function connection(){

    console.log('connection process started...')
    const {MongoClient} = require('mongodb')

    const url = 'mongodb:\\localhost:27017'
    const client = new MongoClient(url)

    const dbName = 'user_login_credentials';

    console.log('connection establishing.....')
}