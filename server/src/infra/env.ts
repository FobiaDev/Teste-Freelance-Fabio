import { config } from 'dotenv'

import { z } from 'zod'

if (process.env.NODE_ENV === 'test') config({ path: '.env.test' })
else config()

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')
}

type Env = z.infer<typeof envSchema>

export const env = _env.data as Env
