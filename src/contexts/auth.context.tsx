"use client"
import React, { createContext, useState, useEffect } from 'react'
import key from '@/keys/secret.json'
import { jwtVerify, JWTPayload, decodeJwt } from 'jose';
import * as cookie from '@/services/cookies'

type ProfileProps = {
  birthday: string,
  cpf: string
  created_at: string,
  email: string,
  gender: string,
  id: string,
  name: string,
  password: string,
  phone: string,
  role: string,
  updated_at: string
}

type credentialsProps = {
  email: string,
  password: string,
  remember: boolean,
}

type AuthContextProps = {
  signed: boolean,
  profile: ProfileProps | null | undefined,
  logoutSession: () => void,
  resolveToken: (token: string) => any,
  handleUserSession: (credendials: credentialsProps) => any,
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

 const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  interface DecodedToken {
    payload: {
      exp: number,
      iat: number,
      sub : ProfileProps,
    },
    protectedHeader: {
      alg: string,
      typ: string,
    }
  }

  

  const [signed, setSigned] = useState<boolean>(false)
  const [profile, setProfile] = useState<ProfileProps | null>()
  const [storagedToken, setStoragedToken] = useState<any>(null)

  async function resolveToken(sessionToken: any) {
    try {
      let token: string = sessionToken.value; 
      const enc: any = new TextEncoder().encode(key.secret)
      const payload = await jwtVerify(token, enc)
      return payload;
    } catch (error) {
      return null;
    }
  }

  const getTokenSession = async (credentials: credentialsProps) => {
    const res = await fetch("/api/company/auth/signin", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify( credentials ),
    });
    const data = await res.json()

    if(res.status === 200 && data.token) {
      if(credentials.remember) {
        const expireDate = new Date()
        const cookieLife = expireDate.setMonth(expireDate.getMonth() + 1);
        cookie.setCookie('user_session', data.token, { maxAge: cookieLife, secure: true, sameSite: true, httpOnly: true });
      } else {
        cookie.setCookie('user_session', data.token, { secure: true, sameSite: true, httpOnly: true, })
      }
      return res
    }
    else {
      cookie.deleteCookie('user_session');
      setSigned(false)
      return res
    }
  }

  const handleUserSession = async ( credentials: credentialsProps ) => {
    const signInFeedback = await getTokenSession(credentials);
    return signInFeedback;
  }

  const checkSessionExists = async () => {
    const currentSession = await cookie.getCookie('user_session')
    if(currentSession) {
      setStoragedToken(currentSession);
      setSigned(true)
    } else {
      setStoragedToken(null)
      setSigned(false)
    }
  }

  const logoutSession = async () => {
    cookie.deleteCookie('user_session');
    setSigned(false)
  }

  useEffect(() => {
    checkSessionExists();
  }, [signed])

  useEffect(() => {
    const handleProfile = async () => {
      const token = cookie.getCookie('user_session');
      
      if(storagedToken) {
        const decoded = await resolveToken(storagedToken) as unknown as DecodedToken | undefined
        setProfile(decoded?.payload?.sub);
        
      } else {
        setProfile(null)
        setSigned(false)
      }
    }

    handleProfile()
  }, [storagedToken])

  return (
    <AuthContext.Provider
      value={{
        signed: signed,
        profile: profile,
        logoutSession: logoutSession,
        resolveToken: resolveToken,
        handleUserSession: handleUserSession,
      }}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider