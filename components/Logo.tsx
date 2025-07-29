import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'

const Logo = ({className, spanDesign}: {className?:string, spanDesign?:string}) => {
  return (
    <Link href={'/'}>
    <h2 className={cn('text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEfect group font-sans')}>
        Wallcar<span className={cn("text-shop_light_green group-hover:text-shop_dark_green hoverEffect")} >t</span>
    </h2>
    </Link>
  )
}

export default Logo
