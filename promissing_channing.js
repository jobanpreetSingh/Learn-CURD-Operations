require('../src/db/mongoose');

const User = require('../src/models/user')

// User.findByIdAndUpdate('5ea9e8b77fa4a919e4cc6155',{age:24}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:24})
// }).then((result)=>{
//     console.log(result);
//     return User.create(
//         {
//             name:"Fatima",
//             age:21,
//             email:'fatima@gmail.com',
//             password:'Fatima@123'
//         })
// }).then((user)=>{
//     console.log(user)
// }).catch((e)=>{
//     console.log(e)
// })

const Update_Count = async(id,age)=>{
const user = await User.findByIdAndUpdate(id,{age})
const count = await User.countDocuments({age})
return count
}

Update_Count("5ea9e8b77fa4a919e4cc6155",26).then((count)=>{
    console.log(count);
}).catch((e)=>{console.log(e)})