import React, { useContext } from 'react'
import { IconTargetArrow, IconCircleCheckFilled, IconDotsVertical, IconLockOpen } from '@tabler/icons-react'
import { Progress } from "@/components/ui/progress"
import { Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { Template } from "@/components/custom/template/template";
import { VoiceSpectrum } from '@/components/custom/voice-spectrum/voice-spectrum'
import { AuthContext } from '@/contexts/auth.context'
import { greetings } from '@/app/utils/greetings'


const Dashboard = () => {

  const { profile } = useContext(AuthContext)

  return (
    <Template>

      <div className="flex flex-col mb-10">
        <h2 className="text-3xl text-slate-800 font-bold">Olá, {profile?.name}</h2>
        <p>É bom vê-lo aqui novamente, desejamos que tenha {greetings()}. Bons estudos!</p>
      </div>

      <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full mb-10">
        <div className="grid grid-rows-4 sm:grid-rows-1 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 w-full">
          <Card className="bg-neutral-50 text-slate-700 hover:bg-primary hover:border-slate-600 hover:text-neutral-50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle>
                <h1 className="text-4xl font-semibold">480</h1>
              </CardTitle>
              <CardDescription className="text-slate-700">Go on</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full">
                <span className="text-slate-400">Finished <strong className="text-slate-700">100%</strong></span>
                <Progress value={33} className="mt-3" />
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-neutral-50 text-slate-700 hover:bg-primary hover:border-slate-600 hover:text-neutral-50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle>
                <h1 className="text-4xl font-semibold">72</h1>
              </CardTitle>
              <CardDescription className="text-slate-700">Intention</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full">
                <span className="text-slate-400">Finished <strong className="text-slate-700">100%</strong></span>
                <Progress value={33} className="mt-3" />
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-neutral-50 text-slate-700 hover:bg-primary hover:border-slate-600 hover:text-neutral-50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle>
                <h1 className="text-4xl font-semibold">72</h1>
              </CardTitle>
              <CardDescription className="text-slate-700">Deal</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full">
                <span className="text-slate-400">Finished <strong className="text-slate-700">48%</strong></span>
                <Progress value={33} className="mt-3" />
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-red-300 text-slate-700 hover:bg-red-400 hover:border-red-600 hover:text-neutral-50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle>
                <h1 className="text-4xl font-semibold">480</h1>
              </CardTitle>
              <CardDescription className="text-slate-700">No intention</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col items-end w-full">
                <IconTargetArrow size={46} className="text-neutral-50" />
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="">
          <Card className="bg-slate-800 text-neutral-50 hover:bg-slate-900 border-slate-900 hover:border-slate-900 hover:text-meutral-50 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="flex flex-row items-baseline">
                <h1 className="text-4xl font-semibold">480</h1>
                <IconCircleCheckFilled size={18} className="text-green-500 ml-2" />
              </CardTitle>
              <CardDescription className="text-neutral-500">Duration</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>
              <div className="grid grid-rows-1 grid-cols-2 w-full">
                <div>
                  <span className="text-slate-400">Finished <strong className="text-neutral-50">100%</strong></span>
                  <Progress value={100} className="mt-3" />
                </div>
                <div className="flex flex-row justify-end">
                  <HoverCard>
                    <HoverCardTrigger>
                      <VoiceSpectrum />
                    </HoverCardTrigger>
                    <HoverCardContent className="mr-5">
                      <div className="flex flex-col justify-center items-center space-y-5">
                        <IconCircleCheckFilled size={48} className="text-green-500" />
                        <p className="text-neutral-500 text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur fuga, dolorem quasi provident in vitae quaerat ratione totam.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      
      <div className="grid grid-cols-[40%_minmax(60%,_1fr)_60%]">
        <div className="flex flex-col space-y-5">
        <Card className="flex flex-row overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/6 flex flex-col h-full justify-center items-center">
                  <img className="w-full" src="https://static.vecteezy.com/system/resources/thumbnails/008/779/492/small/clienting-flat-style-illustration-design-free-vector.jpg" alt="demo.png" />
                </div>
                <div className="w-full md:w-5/6 flex flex-col h-full justify-center px-5 pb-10 md:p-2">
                  <h4 className="text-lx1 font-bold">Lorem Ipsum</h4>
                  <p>
                    Purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae.
                  </p>
                </div>
                <div className="w-full pb-5 md:w-[48px] flex flex-col h-full justify-center items-center">

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <IconDotsVertical size={24} className="text-neutral-500 hidden md:block" />
                      <Button className="bg-blue-400 w-full md:hidden">
                        Opções
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Detalhes</DropdownMenuItem>
                      <DropdownMenuItem>Feedbacks</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
          </Card>

          <Card className="flex flex-row overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/6 flex flex-col h-full justify-center items-center">
                  <img className="w-full" src="https://static.vecteezy.com/system/resources/thumbnails/008/779/492/small/clienting-flat-style-illustration-design-free-vector.jpg" alt="demo.png" />
                </div>
                <div className="w-full md:w-5/6 flex flex-col h-full justify-center px-5 pb-10 md:p-2">
                  <h4 className="text-lx1 font-bold">Lorem Ipsum</h4>
                  <p>
                    Purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae.
                  </p>
                </div>
                <div className="w-full pb-5 md:w-[48px] flex flex-col h-full justify-center items-center">

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <IconDotsVertical size={24} className="text-neutral-500 hidden md:block" />
                      <Button className="bg-blue-400 w-full md:hidden">
                        Opções
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Detalhes</DropdownMenuItem>
                      <DropdownMenuItem>Feedbacks</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
          </Card>


          <Card className="flex flex-row overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/6 flex flex-col h-full justify-center items-center">
                  <img className="w-full" src="https://static.vecteezy.com/system/resources/thumbnails/008/779/492/small/clienting-flat-style-illustration-design-free-vector.jpg" alt="demo.png" />
                </div>
                <div className="w-full md:w-5/6 flex flex-col h-full justify-center px-5 pb-10 md:p-2">
                  <h4 className="text-lx1 font-bold">Lorem Ipsum</h4>
                  <p>
                    Purus viverra accumsan in nisl nisi, scelerisque eu ultrices vitae.
                  </p>
                </div>
                <div className="w-full pb-5 md:w-[48px] flex flex-col h-full justify-center items-center">

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <IconDotsVertical size={24} className="text-neutral-500 hidden md:block" />
                      <Button className="bg-blue-400 w-full md:hidden">
                        Opções
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Detalhes</DropdownMenuItem>
                      <DropdownMenuItem>Feedbacks</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
          </Card>
        </div>

        <div className="px-5">
          <Card>
            <CardContent>
              <div className="flex flex-col-reverse md:flex-row">
                <div className="p-5 w-full md:w-4/6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-5">Lorem Ipsum</h2>
                  <p className="mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corrupti voluptate quidem adipisci magni quo dolorum autem necessitatibus. Sint, animi voluptas. Veritatis accusantium sequi provident laboriosam maxime non recusandae assumenda.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <Button className="bg-blue-400 space-x-3">
                    <IconLockOpen size={20} />
                    <span>Desbloquear</span>
                  </Button>
                </div>
                <div className="p-3 w-full md:w-2/6 flex flex-col justify-center items-center">
                  <img className="w-full" src="https://static.vecteezy.com/system/resources/thumbnails/004/812/320/small/people-with-disabilities-at-the-park-free-vector.jpg" alt="demo.jpg" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

    </Template>
  )
}

export default Dashboard;
