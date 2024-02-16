'use client'
import React, { useContext, useState, useEffect, useRef } from 'react'

import { ScrollArea } from "@/components/ui/scroll-area"
import { SideBar } from '@/components/custom/sidebar/sidebar'
import { AuthContext } from '@/contexts/auth.context'
import { Navbar } from '../navbar/navbar'

interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {

  return (
    <main className="flex flex-col bg-slate-200 h-full w-full">
      <div className="flex flex-row">
        <SideBar />

        <aside className="flex flex-col h-screen w-full">
          <Navbar />
          

          <ScrollArea className="w-full px-10">
            <div className="py-10">
              {children}
            </div>
          </ScrollArea>
        </aside>
      </div >
    </main >
  )
}
