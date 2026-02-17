import z from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'prod', 'test']).default('dev'),

  PORT: z.coerce.number().default(3030),

  // DB CONNECTION
  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().default(3306),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  DB_NAME: z.string().min(1),

  // JWT SECRET
  JWT_SECRET: z.string().min(10),
});

export type Env = z.infer<typeof envSchema>;