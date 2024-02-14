import { SideBar } from '@/components/sidebar/sidebar';
import React from 'react'

const Filter = () => {
  return (
    <main className="flex flex-col bg-slate-200 w-screen h-screen">
      <div className="flex flex-row">
      
      <SideBar />

      <aside className="flex flex-column w-full md:w-5/6 h-screen lg:w-4/5 lx:w-4/5">
      
      <input type="color" />

      </aside>
     </div>
    </main>
  )
}

export default Filter;