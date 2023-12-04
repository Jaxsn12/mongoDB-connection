// // const express = require('express')
// // const mongoose = require('mongoose')

// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('./model')
// // const User = mongoose.model('./model');


// const app = express()

// const port = 3000

// main().catch(err => console.error(err));
 
// async function main() {
//   await mongoose.connect('mongodb+srv://Jackson_123:Jackson123@cluster0.prrbiut.mongodb.net/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   console.log("connected to mongodb"));


// // app.get("/user", (req, res) => {
// //     User.find().then((userdata) =>{
// //       console.log(userdata)
// //       res.send(userdata);
// //     }).catch((err) =>{
// //       console.log(err, "errr")

// //     })
// //   })

// app.get("/user", (req, res) => {
//   User.find().then((userdata) =>{
//     res.send(userdata);
//   })
// })
 
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// }
 
const express = require('express');
const mongoose = require('mongoose');
const User = require('./user'); //connecting the user.js file
 
const app = express();
const port = 4001;
 
main().catch(err => console.error(err));
 
async function main() {
  await mongoose.connect('mongodb+srv://Jackson_123:Jackson123@cluster0.prrbiut.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },console.log("Mongo DB connected "))
 
  // // Trying mongoose connection events
  // mongoose.connection.on('error', err => {
  //   console.error('Mongoose connection error:', err);
  // });
 
  // mongoose.connection.on('connected', () => {
  //   console.log('Mongoose connected to MongoDB');
  // });
 
  // mongoose.connection.on('disconnected', () => {
  //   console.log('Mongoose disconnected from MongoDB');
  // });
 
  app.get("/user", (req, res) => {
    User.find().then((userdata) =>{
      res.send(userdata);
    })
  })
 
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
 
 