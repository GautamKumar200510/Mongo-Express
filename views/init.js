const Chat = require("../models/chat.js");
const mongoose = require("mongoose");

main()
.then(() => {
  console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let chats = [
    {
        from: "neha",
        to: "preeti",
        message: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        message: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        message: "all the best!",
        created_at: new Date(),
    },
];


Chat.insertMany(chats)
    .then(() => {
        console.log("Chats inserted successfully");
    })
    .catch((err) => {
        console.log(err);
    });

