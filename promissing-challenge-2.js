require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5eaacdbc7a9bb91ec42d66d6').then((task)=>{
//     console.log(task);
//     return Task.find({completed:false})
// }).then((result)=>{
//     console.log(result);
//     return Task.countDocuments({completed:false})
// }).then((a)=>{
//     console.log(a);
// }).catch((e)=>{console.log(e)})

const delete_count = async(id,completed)=>{
    const del = await Task.findByIdAndDelete(id)
    const CD = await Task.countDocuments({completed})
    return CD
}
delete_count("5ea9f2b4975bec1a73cd668f",false).then((CD)=>{console.log(CD)}).catch((e)=>{console.log(e)})