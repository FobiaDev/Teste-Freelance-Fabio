import express from 'express'
import cors from 'cors'

import { router } from './routes'

export const app = express()

const allowedOrigins = ['http://localhost:3000']
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        const message =
          'The CORS policy for this site does not allow access from the specified origin'
        return callback(new Error(message), false)
      }
      return callback(null, true)
    },
  }),
)

app.use('/api', router)
