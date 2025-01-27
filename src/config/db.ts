import mongoose from "mongoose"
import {getEnv} from "../env.js"

async function connectDatabase() {
    try {
        await mongoose.connect(getEnv("MONGO_URI"))
        console.log('DB Connected')
    } catch (error) {
        console.log('DB Connection Error:', error)
        process.exit(1)
    }
}

export {connectDatabase}