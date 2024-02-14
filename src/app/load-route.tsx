'use client'

import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/auth.context'
import { Preload } from '@/components/custom/preload/preload'

import SignIn from './admin/auth/signin/page'
import Dashboard from './admin/dashboard/page'

export function StartApp() {
  const { signed } = useContext(AuthContext)

  {
    return !signed ?
      <SignIn />
    :
      <Dashboard />
  }
}

export default function LoadRoute () {
  const [isLoading, setIsLoading] = useState(true)
  const { signed } = useContext(AuthContext)

  useEffect(() => {
    setIsLoading(false)
  }, [signed])

  if(!isLoading) {
    return <StartApp />
  }

  return (
    <div className="flex flex-col h-screen w-full bg-slate justify-center items-center bg-neutral-200">
      <Preload />
    </div>
  )

}