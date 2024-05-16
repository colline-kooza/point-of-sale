import { getContactUs } from '@/actions/contact'
import React from 'react'

export default async function page() {
const contacts=await getContactUs()
console.log(contacts)
  return (
    <section id="faq" className="container relative mx-auto py-12 px-2 mt-4 flex flex-col  items-center h-screen">

    <h3 className="lg:mb-8 mb-2 text-teal-900  text-center text-lg font-semibold underline decoration-teal-200/80 lg:text-left ">
        ALL REQUESTS FROM CLIENTS
    </h3>


 <div className='lg:w-[60%] w-full '>
    {
     contacts?.map((contact)=>{
        return(
            <div key={contact.id} className="my-6">
            <div
                className="rounded-t-2xl bg-teal-600/80 w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
                <h4 className="text-sm font-medium">
                    {contact.email}
                </h4>
            </div>
            <div
                className=" w-full rounded-b-2xl border-x-2 border-b-2 border-dashed text-xs border-teal-600/30 bg-teal-100/50 px-4 py-4 text-teal-800 flex justify-between">
                <h5>
                    {contact.message}
                </h5>
                <h5>
                    {contact.phone}
                </h5>
            </div>
        </div>
        )
     })   
    }


    
   
 </div>


  


  


</section>
  )
}
