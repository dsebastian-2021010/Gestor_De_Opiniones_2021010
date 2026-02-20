// src/plugins/jwt.plugin.js

import fp from 'fastify-plugin'
import fastifyJwt from '@fastify/jwt'
import { env } from '../config/env.js'

export default fp(async function (fastify) {
  fastify.register(fastifyJwt, {
    secret: env.jwtSecret,
    sign: {
      expiresIn: '1h'
    }
  })
})