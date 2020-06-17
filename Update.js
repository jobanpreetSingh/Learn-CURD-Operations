const {MongoClient,ObjectID}= require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'  //url where it will run in browser
const database = 'Task-AppADB' // Database name define here 
const id = new ObjectID(); //creating id OBJECTID

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
if(error){

    return console.log('unable to connect to rhe internet');
}
console.log(client);

const db=client.db(database)

//  db.collection('users').updateOne({
// _id: new ObjectID("5ea72f7ae8c4710e12b25e4f")
// },{

// // $set:{
// //     name: 'Rohan'
// // }
// $inc:{
//     age:-5
// }

// }).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})

db.collection('users').updateMany({
    status: true
},{
$set: {
status: false
}
}).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
})