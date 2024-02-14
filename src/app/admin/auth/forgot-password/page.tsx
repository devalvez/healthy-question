'use client'

import React, { useContext } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { IconMailForward } from '@tabler/icons-react';

import Link from 'next/link'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const formSchema = z.object({
  email: z
    .string()
    .email()
    .min(10, {
      message: "No mínimo 10 caracteres",
  }),
  password: z
    .string()
    .min(8, {
      message: "No mínimo 8 caracteres."
    })
    .max(32, {
      message: "No máximo de 32 caracteres."
    })
})

export const ForgotPassword = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <main className="flex flex-col h-screen w-full justify-center items-center bg-neutral-200">
      <div className="w-full sm:w-3/4 md:w-2/4 lg:w-1/4 xl:2/4">
      <Card className="shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-slate-600">Recuperar Senha</CardTitle>
          <CardDescription>Informe o endereço de email cadastrado.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700">Endereço de Email</FormLabel>
                    <FormControl>
                      <Input placeholder="usuario@dominio.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full shadow-md"><IconMailForward size={20} className="text-neutral-200 mr-4" /> Enviar E-mail</Button>
            </form>
          </Form>

          <p className="text-left mt-10">
            Lembrou a senha? <Link className="text-primary underline" href="/admin/auth/signin">Faça login</Link>
          </p>

        </CardContent>
        <CardFooter className="mt-5">
          <p className="text-sm text-center w-full text-slate-500">
            <span className="text-primary font-bold">Company</span> &copy; 2024. Todos os direitos reservados.
          </p>
        </CardFooter>
      </Card>
      </div>
    </main>
  )
}

export default ForgotPassword;