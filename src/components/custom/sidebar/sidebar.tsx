'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  IconDotsVertical,
  IconHome,
  IconBooks,
  IconChartBar,
  IconLockOpen,
  IconMapPin,
  IconSearch
} from '@tabler/icons-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from 'next/image'

export const SideBar = () => {

  const pathname = usePathname()

  return (
    <section className="bg-gray-800 rounded-r-3xl hidden md:flex md:w-2/6 h-screen lg:w-1/5 lx:w-2/5  overflow-hidden">
        <div className="flex flex-col m-h-scree md:justify-between w-full px-10 pt-10 ">
        
          <div className="flex flex-row items-center bg-blue-400 p-3 rounded-xl">
            <div className="w-5/6  pl-3 pr-3">
              <Image src="/assets/images/logo.png" alt="logn.png" width={96} height={96} />
            </div>
            <div className="w-1/5 flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-blue-500 pt-2 pb-2 rounded-md">
                <IconDotsVertical size={24} className="text-neutral-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>

          <ul className="flex flex-col w-full justify-center space-y-3">
            <li className="rounded-xl overflow-hidden">
              <Link
                href="/"
                className={pathname === '/' ? 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-50 bg-gray-900' : 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-500  hover:bg-gray-900'}>
                <IconHome size={20} />
                <span>Início</span>
              </Link>
            </li>
            <li className="rounded-xl overflow-hidden">
              <Link
                className={pathname === '/collaborators/filter' ? 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-50 bg-gray-900' : 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-500 hover:bg-gray-900'}
                href="/collaborators/filter">
                <IconBooks size={20} />
                <span>Cursos</span>
              </Link>
            </li>
            <li className="rounded-xl overflow-hidden">
              <Link
                className={pathname === '/collaborators/menagement' ? 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-50 bg-gray-900' : 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-500 hover:bg-gray-900'}
                href="#">
                <IconChartBar size={20} />
                <span>Ranking</span>
              </Link>
            </li>
            <li className="rounded-xl overflow-hidden">
              <Link className={pathname === '/collaborators/unlock' ? 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-50 bg-gray-900' : 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-500 hover:bg-gray-900'}
                href="#">
                <IconLockOpen size={20} />
                <span>Unlock</span>
              </Link>
            </li>
            <li className="rounded-xl overflow-hidden">
              <Link className={pathname === '/collaborators/map' ? 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-50 bg-gray-900' : 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-500 hover:bg-gray-900'}
                href="#">
                <IconMapPin size={20} />
                <span>Map</span>
              </Link>
            </li>
            <li className="rounded-xl overflow-hidden">
              <Link className={pathname === '/collaborators/search' ? 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-50 bg-gray-900' : 'flex flex-row py-3 px-[30%] items-center space-x-2 text-neutral-500 hover:bg-gray-900'}
                href="#">
                <IconSearch size={20} />
                <span>Hitórico</span>
              </Link>
            </li>
          </ul>         

          <div className="flex flex-col items-center justify-center items-base">
          <Image          
           src="assets/images/sidebar-1.svg" alt="" width={280} height={280} quality={100} />
           </div>
        </div>
    </section>
  )
}