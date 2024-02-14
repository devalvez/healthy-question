'use client'
import React from 'react'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconTargetArrow, IconCircleCheckFilled } from '@tabler/icons-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { SideBar } from '@/components/sidebar/sidebar'


const Dashboard = () => {
  
  return (
    <main className="flex flex-col bg-slate-200 w-screen h-screen">
      <div className="flex flex-row">
      

      <SideBar />

      <aside className="flex flex-column w-full md:w-5/6 h-screen lg:w-4/5 lx:w-4/5">
      <ScrollArea className="flex w-screen m-h-screen p-10">
        <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-10 w-full h-fit">
          
          <div className="grid grid-rows-4 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 w-full h-fit">
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
                <CardDescription className="text-neutral-50">No intention</CardDescription>
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

          <div className="grid grid-rows-1 grid-flow-col w-full h-fit">
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
                    <Progress value={33} className="mt-3" />
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>


        

        </ScrollArea>
      </aside>
     </div>
    </main>
  )
}

export default Dashboard;