import React, { useState, useEffect } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ArrowRight,
} from 'lucide-react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const items = [
  { title: 'Moje objednávky', url: '/my-orders', icon: Home },
  { title: 'Faktury', url: '/invoices', icon: Inbox },
  { title: 'Věrnostní program', url: '#', icon: Calendar },
  { title: 'Slevové kódy', url: '#', icon: Search },
  { title: 'Hlídané zboží', url: '#', icon: Settings },
  { title: 'Nastavení účtu', url: '/settings', icon: Settings },
]

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    const currentPath = window.location.pathname
    const active = items.find((item) => item.url === currentPath)
    if (active) {
      setActiveItem(active.url)
    }
  }, [items])

  const navigate = useNavigate()

  function handleClick(item) {
    setActiveItem(item.url)
    navigate(item.url)
  }

  return (
    <Sidebar>
      <SidebarContent className="flex  flex-1">
        <SidebarGroup className="flex ">
          <SidebarGroupContent className="flex flex-col items-center bg-white px-2xl py-4xl rounded-md  gap-2xl ">
            <div className="flex flex-col items-center  gap-sm">
              <p className="text-lg font-semibold">Daniil Filatov</p>
              <p className="text-sm text-gray-600">
                daniil.filatov@newlogic.cz
              </p>
            </div>
            <SidebarMenu className="w-full">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="w-full">
                  <Button
                    className="w-full justify-start block"
                    variant={item.url === activeItem ? 'default' : 'ghost'}
                    onClick={() => handleClick(item)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </div>
                      <ArrowRight className="ml-2" />
                    </div>
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <Button variant={'destructive'} className="mt-4 w-full">
              Odhlásit se
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
