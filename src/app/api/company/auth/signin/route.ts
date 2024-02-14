'use server'
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import key from '@/keys/secret.json'
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import * as cookie from '@/services/cookies'

const prisma = new PrismaClient();

const getUserByName = async (email: string) => {
  const username = await prisma.admin.findFirst({
    where: {
      email: email
    }
  });
  
  return username;
}

export async function POST(req: NextRequest) {
  
  if(req.method === "POST") {
    const { login, password } = await req.json()
    const user = await getUserByName(login)
    
    if(!user || !await bcrypt.compare(password, user.password)) {
      return NextResponse.json({message: 'Credenciais inválidas.'}, { status: 401 })
    }

    const token = jwt.sign({ sub: user }, key.secret, { expiresIn: '1h' })
    return NextResponse.json({ token }, { status: 200 })

  } else {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }
}