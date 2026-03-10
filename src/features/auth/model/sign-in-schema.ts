import { z } from 'zod'

export const signInSchema = z.object({
  login: z.string(),
  password: z.string().min(6),
})

export type SignInFormValues = z.infer<typeof signInSchema>
