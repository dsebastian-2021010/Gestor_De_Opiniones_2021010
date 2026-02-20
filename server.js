// server.js

import { buildApp } from './src/app.js'
import { env } from './src/config/env.js'

const start = async () => {
  try {
    const app = await buildApp()

    await app.listen({ port: env.port })
    console.log(`🚀 Servidor corriendo en puerto ${env.port}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()