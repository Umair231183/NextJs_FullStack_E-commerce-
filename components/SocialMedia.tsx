import React from 'react'
import { TooltipProvider, Tooltip } from './ui/tooltip'
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react'
import { TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <Youtube className='w-5 h-5' />,
    },
    {
        title: "Github",
        href: "https://www.github.com/@reactjsBD",
        icon: <Github className='w-5 h-5' />,
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/@reactjsBD",
        icon: <Facebook className='w-5 h-5' />,
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/@reactjsBD",
        icon: <Linkedin className='w-5 h-5' />,
    },
    {
        title: "Slack",
        href: "https://www.slack.com/@reactjsBD",
        icon: <Slack className='w-5 h-5' />,
    },

]







const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5",
                className
            )}>
                {socialLink?.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <Link key={item?.title} href={item?.href}
                                className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", 
                          iconClassName)}>
                            {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn("bg-white text-darkColor font-semibold border border-shop_light_green",
                        tooltipClassName
                    )}>
                        {item?.title}
                    </TooltipContent>
                </Tooltip>
             ))}
        </div>
    </TooltipProvider >
  )
}

export default SocialMedia
