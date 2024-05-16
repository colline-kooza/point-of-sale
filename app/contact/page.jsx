import { ContactForm } from '@/components/Contact'
import Head from '@/components/Head'
import { SidebarNav } from '@/components/SideBarContact'
import { Separator } from '@/components/ui/separator'
import { MailPlus, Phone } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function page() {
  const sidebarNavItems = [
    {
      title: "Contact-us",
      href: "/contact-us",
    },
  
  ]
  
  return (
    <div className="space-y-6 p-10 mt-8  md:block">
    <div className="space-y-2">
      <h2 className="text-3xl lg:text-2xl font-bold tracking-tight mb-2">Request-Site</h2>
      <p className="text-muted-foreground flex gap-3 items-center mt-3 flex-wrap">
      <div className='text-xs flex gap-2 items-center whitespace-nowrap'><Phone size={20}/>  +256700774018</div>
      <div className='flex gap-2 items-center text-xs'><MailPlus size={20}/>koozacollinz1@gmail.com</div>
      <div className='flex gap-2 items-center text-xs whitespace-nowrap'><FaWhatsapp size={20}/>+256700774018</div>
      </p>
    </div>
    <Separator className="my-6" />
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside>
     <div className="flex flex-col gap-3 w-full">
     <Head/>
      <div className="flex-1 lg:max-w-2xl w-full mt-3">
        <ContactForm/>
      </div>
     </div>
    </div>
  </div>
  )
}
