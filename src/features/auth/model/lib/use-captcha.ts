import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

export const useCaptcha = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const handleVerify = (token: string) => {
    setCaptchaToken(token)
  }

  const handleExpire = () => {
    setCaptchaToken(null)
  }

  const resetCaptcha = () => {
    setCaptchaToken(null)
    captchaRef.current?.resetCaptcha()
  }

  const validateCaptcha = (): boolean => {
    if (!captchaToken) {
      toast.error('Пройдите капчу')
      return false
    }
    return true
  }

  return {
    captchaToken,
    captchaRef,
    handleVerify,
    handleExpire,
    resetCaptcha,
    validateCaptcha,
  }
}
