// src/config/database.js

import mongoose from 'mongoose'
import { env } from './env.js'

export const connectDB = async () => {
  try {
    await mongoose.connect(env.mongoUri)
    console.log('✅ Base de datos conectada correctamente')
  } catch (error) {
    console.error('❌ Error conectando a la base de datos:', error.message)
    process.exit(1)
  }
}