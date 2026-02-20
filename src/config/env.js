// src/config/env.js

import dotenv from 'dotenv'

dotenv.config()

const requiredEnvVars = ['PORT', 'MONGO_URI', 'JWT_SECRET']

requiredEnvVars.forEach((variable) => {
  if (!process.env[variable]) {
    throw new Error(`❌ La variable de entorno ${variable} es obligatoria`)
  }
})

export const env = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET
}