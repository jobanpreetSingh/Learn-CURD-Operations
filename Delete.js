const {MongoClient,ObjectID}= require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'  //url where it will run in browser
const database = 'Task-AppADB' // Database name define here 
const id = new ObjectID(); //creating id OBJECTID

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
if(error){
    return console.log('unable to get the clients from database')
}
console.log(client)
const db = client.db(database);
// db.collection('users').deleteMany({
//     status: false    
// }).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})

//DELETEONE ///////////////////
db.collection('users').deleteOne({

age:23

}).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})


})