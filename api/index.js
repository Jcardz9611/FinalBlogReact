import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser"
import { config } from "dotenv"

config();

const app = express();

app.use(express.json());

app.use(cookieParser())
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)


app.listen(process.env.SERVER_PORT, () => {
    console.log("Connected!");
})