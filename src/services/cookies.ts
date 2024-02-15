'use server'
 
import { cookies } from 'next/headers'
 
export async function setCookie(name: string, data: any, options: object) {
 cookies().set(name, data, options)
}

export async function getCookie(name: string) {
  return cookies().get(name)
}

export async function deleteCookie(name: string) {
  return cookies().delete(name)
}
