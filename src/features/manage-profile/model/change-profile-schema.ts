import z from 'zod'

export const changeProfileSchema = z.object({
  nickname: z
    .string()
    .min(3, { error: 'Никнейм должен содержать > 3 символа' })
    .max(16, { error: 'Никнейм должен содержать < 16 символова' })
    .optional(),
  about: z.string().max(120, { error: 'Описание не может содержать > 120 символов' }).optional(),
})

export type ChangeProfileFormValues = z.infer<typeof changeProfileSchema>
