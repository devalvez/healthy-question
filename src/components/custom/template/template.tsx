'use client'
import React, { useContext } from 'react'

import { ScrollArea } from "@/components/ui/scroll-area"
import { SideBar } from '@/components/custom/sidebar/sidebar'
import { AuthContext } from '@/contexts/auth.context'
import { Navbar } from '../navbar/navbar'

interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {

  const { profile } = useContext(AuthContext);

  return (
    <main className="flex flex-col bg-slate-200 h-full w-full">
      <div className="flex flex-row">
        <SideBar />

        <aside className="flex flex-col px-10 h-full w-full">
          
          <div className="flex justify-end py-10">
            <Navbar />
          </div>

          <ScrollArea className="w-full min-h-full">
            
            {children}
            
          </ScrollArea>
        </aside>
      </div>
    </main>
    )
  }