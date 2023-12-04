
// // const mongoose = require('mongoose');

// const mongoose = require('mongoose');
 
// const Schema = mongoose.Schema;

// // let dataSchema = new mongoose.Schema({
    
// // id :{type: String , require:true},
// // test :{type: String ,default:''}
// //   });

// const dataSchema = new Schema(
//     {
//         id :{type:Number,require:true},
//         test:{type:String,default:''}
//     }
// );


// module.exports= mongoose.model('test', dataSchema)

// // const User = mongoose.model('test',dataSchema)
// // module.exports = User;

const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const userSchema = new Schema(  
    {
        Emp_id: { type: Number, required: true },
        Emp_First_name: { type: String, required: true },
        Emp_Last_name: { type: String, default: '' },
        Emp_Image:{type:String,default: ''}
    }
);
 
const User = mongoose.model('users', userSchema);
 
module.exports = User;