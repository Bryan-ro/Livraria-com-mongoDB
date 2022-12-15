import express  from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

db.on("error", () => {
    console.log('error')
})
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express()
routes(app)

export default app 