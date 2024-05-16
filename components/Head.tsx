import React from 'react'
import { Separator } from './ui/separator'

export default function Head() {
  return (
    <div >
        <h3 className="text-lg font-medium">Send Your Request</h3>
        <p className="text-sm text-muted-foreground">
        Your Message will Be replied After A successfully request
        </p>
        <Separator className='mt-8'/>
      </div>
  )
}
