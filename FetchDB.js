const {MongoClient,ObjectID}= require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'  //url where it will run in browser
const database = 'Task-AppADB' // Database name define here 
const id = new ObjectID(); //creating id OBJECTID

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
if(error){
    return console.log('unable to find the cconnection')
}
const db = client.db(database);
db.collection('users').findOne({_id: new ObjectID("5ea784e9d34ad11009a28c50")},(error,user)=>{
    if(error){
        return console.log('unable to find users try again!!!')
    }
console.log('i am from Findone',user)
})


//USE ''FIND----------
// ITS IT SELF POINTER NOT CALL BACK JUST POINT THE INSTRUCTIONS RETURN CURSOR and a cursor has toArray method to fetch the users from database 


db.collection('users').find({age: 23}).toArray((error,users)=>{
if(error){
    return console.log('unable to fetch users from database')
}
console.log("i am from Find",users)
})

db.collection('users').find({age: 23}).count((error,count)=>{
    if(error){
        return console.log('unable to fetch users from database')
    }
    console.log("i am from Count",count)
    })

//fetch task which are not completed yet
db.collection('users').find({status: true}).toArray((error,users)=>{
    if(error){
        return console.log("unable to fetch users i am in status check")

}
console.log('from fetch ',users);
})


})

    ///********TOPIC:- quering document***********************************






    
    ////---------------END-----------------------------------------------------