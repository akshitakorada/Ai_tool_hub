const mongoose = require('mongoose')
const mongoURI = 'mongodb://Jathin321:12345@ac-ifoxmp3-shard-00-00.1gt1wv3.mongodb.net:27017,ac-ifoxmp3-shard-00-01.1gt1wv3.mongodb.net:27017,ac-ifoxmp3-shard-00-02.1gt1wv3.mongodb.net:27017/Ai_Tool_Hub?ssl=true&replicaSet=atlas-10pbx3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

const mongodb = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("MongoDb connected...");

        const Ai_tools_data = await mongoose.connection.db.collection("tools").find({}).toArray( async (err) => {
            if(err){
                console.log("Data Fetch Error: ",err)
            }
        })

        const Ai_collections_data = await mongoose.connection.db.collection("collection").find({}).toArray( async (err) => {
            if(err){
                console.log("Data Fetch Error: ",err)
            }
        })

        global.Ai_tools = Ai_tools_data;
        global.Ai_collections = Ai_collections_data;

        console.log(Ai_tools_data)
    }
    catch(err){
        console.log("MongoDb connection error : ",err)
    }
}

module.exports = mongodb;


