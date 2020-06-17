// //CURD operationd for mongoDB
// //these all things comes from mongosDB so we can destructring it an can reduce the code size
// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const ObjectID = mongodb.ObjectID
// ////---------END--------------------------

// //*****START DESTRUCTURING THE CONTENT IMPORTED FROM MONGO DB**** */
// const { MongoClient, ObjectID } = require('mongodb')

// // ----------------END---------------------------------------------
// const connectionURL = 'mongodb://127.0.0.1:27017'  //url where it will run in browser
// const database = 'Task-AppADB' // Database name define here 
// //creating id OBJECTID----------

// const id = new ObjectID();
// console.log(id)
// console.log(id.getTimestamp);
// console.log(id.id); // to get the hexa value for is

// console.log(id.id.length)// to get the size for id 

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('unable to connect to the database!')

//     }
//     // console.log("connect Successfully :-)")
//     //client.db(database) it will provide a rfeference which we will store in variable as shown in below and use it further to manuplate the database

//     const db = client.db(database);

//     //insertion data to db 

//     //****************/ insertOne document into db********************

//     db.collection('users').insertOne({
//             _id: id,
//             name: 'Sham',
//             age: 23
//         }, (error, result) => {

//             if (error) {
//                 return console.log('unable to insert user')
//             }
//             console.log(result.ops);

//         })

//     //------------------END--------------------------------------------



//     //****************/ insert MANY document into db********************

//     // db.collection('users').insertMany([{

//     // name: 'Parul',
//     // age:26


//     // },
//     // {

//     //     name: "Ram",
//     //     age:90
//     // }],(error,result)=>{

//     // if(error){
//     //     return console.log("unable to insert data")
//     // }
//     // console.log(result.ops)
//     // })
//     //------------------END--------------------------------------------






//     ////********************/ CHALLENGE FOR TO ADD 3 USERS INTO DB************************

//     //   db.collection('users').insertMany([{
//     //     description:'clean the house',
//     //     status: true
//     // },{

//     // description:'clean the office',
//     // status: false

//     // },
//     // {

//     //     description:'clean the roof',
//     //     status: true

//     //     }


//     // ],(erroe,result)=>{
//     // if(error){
//     //  return console.log('unable to insert data into DB')   
//     // }
//     // console.log(result.ops);
//     //  })
//     //------------------END-------------------------------------------------------------




//     /////*****************>*********TOPIC :- OBJECT-ID**********************************
//     // OBJ-ID LOOKS LIKE ;->  5ea73ee6161a330e7074d873 :-> these are gui  ids, automatic incremented, generated automatic
//                     // Returns a new ObjectId value. The 12-byte ObjectId value consists of:
//                     // use binary data 
//                     // a 4-byte timestamp value, representing the ObjectId’s creation, measured in seconds since the Unix epoch
//                     // a 5-byte random value
//                     // a 3-byte incrementing counter, initialized to a random value




//     //-----------END-------------------------------------------------------------------------

// })

