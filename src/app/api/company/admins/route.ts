import { prisma } from '@/database/prisma'
import { NextRequest, NextResponse } from 'next/server'

import * as bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds)
  
  try {
    const data = await prisma.admin.create({
      data: {
        name: body.name,
        birthday: body.birthday,
        gender: body.gender,
        cpf: body.cpf,
        email: body.email,
        phone: body.phone,
        password: hashedPassword,
        role: body.role,
      }
    })

    return NextResponse.json({ data }, { status: 201 })
  } catch(error) {

    return NextResponse.json({ error }, { status: 400 })
    
  }
}

export async function GET(req: NextRequest) {
  try {

    const params = req.nextUrl.searchParams
    const adminUID = params.get("id")

    if(adminUID) {
      let data = await prisma.admin.findUnique({
        where: {
          id: adminUID,
        }
      })

      return NextResponse.json({ data }, { status: 200 })
    }    

    let data = await prisma.admin.findMany();
    return NextResponse.json({ data }, { status: 200 })

  } catch(error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}