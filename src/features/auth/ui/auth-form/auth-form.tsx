'use client'

import { useState } from 'react'

import { AuthFormContent } from './auth-form-content'

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false)

  const handleToggle = () => setIsLogin(!isLogin)

  return <AuthFormContent isLogin={isLogin} onToggle={handleToggle} />
}
