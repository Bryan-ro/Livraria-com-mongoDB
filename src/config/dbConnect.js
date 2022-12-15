import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bryan_ro:0624@cluster0.cfdci1b.mongodb.net/livraria-alura");

const db = mongoose.connection;

export default db;