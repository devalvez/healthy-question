'use client'
import React, { useContext } from 'react'

import { AuthContext } from '@/contexts/auth.context';

import Link from 'next/link';

import {
  IconSettingsFilled,
  IconUser,
  IconCoins,
  IconLogout,
  IconSearch,
  IconBuildingSkyscraper,
} from '@tabler/icons-react';

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/ui/toggle-mode';

export const Navbar = () => {

  const { logoutSession, profile } = useContext(AuthContext)

  return (
    <div className="flex z-10 w-full[+10] justify-end py-5 -ml-10">
    <div className="flex flex-row space-x-10 px-10">
      <div className="relative mr-48">
        <IconSearch size={24} className="text-neutral-500 absolute top-2 left-2" />
        <Input type="search" placeholder="Buscar..." className="rounded-xl pl-10" />
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/collaborators/settings">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}><IconSettingsFilled size={24} className="text-neutral-500" /></NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-slate-600">
          <DropdownMenuLabel>{profile?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="space-x-4">Perfil</DropdownMenuItem>
          <DropdownMenuItem className="space-x-4">Empresas</DropdownMenuItem>
          <DropdownMenuItem className="space-x-4">Financeiro</DropdownMenuItem>
          <DropdownMenuItem className="space-x-4 text-red-500 hover:text-red-400">
            <Link href="" onClick={() => logoutSession()}>
              Sair
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  )
}
