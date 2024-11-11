import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from './ui/sidebar'
import { AppSidebar } from './AppSidebar'

const items = [
  { title: 'Moje objednávky', url: '/my-orders' },
  { title: 'Faktury', url: '/invoices' },
  { title: 'Věrnostní program', url: '#' },
  { title: 'Slevové kódy', url: '#' },
  { title: 'Hlídané zboží', url: '#' },
  { title: 'Nastavení účtu', url: '/settings' },
]

const Layout = () => {
  const currentPath = window.location.pathname
  const { title } = items.find((item) => item.url === currentPath)

  return (
    <div className=" px-16  mx-auto flex flex-col justify-around max-w-screen-2xl">
      <h1 className="py-8 font-bold text-4xl">{title}</h1>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Layout
