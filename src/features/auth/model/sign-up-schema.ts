import { z } from 'zod'

export const signUpSchema = z.object({
  email: z.email(),
  username: z.string(),
  password: z.string().min(6),
})

export type SignUpFormValues = z.infer<typeof signUpSchema>
