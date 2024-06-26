"use client"
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { HoverCardContent } from "../hovercos";

export default function CostumToolTip({
    openDelay = 500,
    side = 'right',
    content,
    children
}){
    return(
        <HoverCard openDelay={openDelay}>
            <HoverCardTrigger asChild>
                {children}
            </HoverCardTrigger>
            <HoverCardContent side={ side } className=" overflow-hidden w-[100%] hidden lg:block bg-popover/75 backdrop-blur-md">
                 { content }
            </HoverCardContent>

        </HoverCard>
    )
}