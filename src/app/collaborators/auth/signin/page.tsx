'use client'

import React, { useContext, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import Link from 'next/link'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { AuthContext } from '@/contexts/auth.context'

import { Button } from "@/components/ui/button"
import { IconLogin, IconEye, IconEyeOff } from '@tabler/icons-react';

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
import { toast } from "sonner"

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
    .email({message: 'Endereço de email inválido'})
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
    }),
  remember: z
  .boolean()
})

const SignIn = () => {
  const { handleUserSession } = useContext(AuthContext)

  const [isShow, setIsShow] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
      remember: false
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const signInFeedback = await handleUserSession(values);
   if(signInFeedback.status === 200) {
    toast("Sucesso!", { description: "Logado com successo.", position: 'top-right', classNames: { toast: "group toast group-[.toaster]:bg-green-600 group-[.toaster]:text-neutral-50 group-[.toaster]:border-green-700", description: "group-[.toast]:text-neutral-100"}, duration: 3000 })
   } else {
    toast("Falha ao tentar logar!",  { description: "Email ou Senha inválidos.", position: 'top-right', classNames: { toast: "group toast group-[.toaster]:bg-red-500 group-[.toaster]:text-neutral-50 group-[.toaster]:border-red-600", description: "group-[.toast]:text-neutral-100"}, duration: 3000 })
   }
  }

  return (
    <main className="flex flex-col h-screen w-full justify-center items-center bg-neutral-200">
      <div className="w-full sm:w-3/4 md:w-2/4 lg:w-1/4 xl:2/4">
      <Card className="shadow-xl rounded-xl flex flex-col justify-center">
        <CardHeader>
          <CardTitle className="text-slate-600">Iniciar Sessão</CardTitle>
          <CardDescription>Informe suas credenciais de acesso</CardDescription>
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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700">Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type={isShow ? 'text' : 'password'} placeholder="********" {...field} />
                        <Link className="absolute top-2 right-3" href="#" onClick={() => setIsShow(isShow => !isShow)}>{ isShow ? <IconEye size={20} className="text-slate-500" /> : <IconEyeOff size={20} className="text-slate-500" /> }</Link>
                      </div>
                    </FormControl>
                    <FormMessage />

                    <p className="text-right">
                      Equeceu a senha? <Link className="text-primary underline" href="/admin/auth/forgot-password">Recuperar senha</Link>
                    </p>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-row">
                        <Checkbox
                          id="remember"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label htmlFor="remember" className="ml-2 align-middle">Lembrar-me</Label>
                      </div>
                    </FormControl>
                    <FormMessage />

                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full shadow-md">
                <IconLogin size={20} className="text-neutral-200 mr-4" /> Entrar
              </Button>
            </form>
          </Form>

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

export default SignIn