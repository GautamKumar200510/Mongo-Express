const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");

// Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// MongoDB Connection
main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(
        "mongodb://127.0.0.1:27017/whatsapp"
    );
}

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();

    console.log(chats);

    res.render("index", { chats });
});

// New Chat Form
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create New Chat
app.post("/chats", async (req, res) => {
    let { from, to, msg } = req.body;

    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });

    await newChat.save();

    console.log("New Chat Saved Successfully");

    res.redirect("/chats");
});

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;

    let chat = await Chat.findById(id);

    res.render("edit.ejs", { chat });
});

// Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );

    console.log(updatedChat);

    res.redirect("/chats");
});

// Delete Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;

    let deletedChat = await Chat.findByIdAndDelete(id);

    console.log(deletedChat);

    res.redirect("/chats");
});

// Root Route
app.get("/", (req, res) => {
    res.redirect("/chats");
});

// Start Server
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});