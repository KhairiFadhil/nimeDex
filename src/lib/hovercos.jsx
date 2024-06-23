"use client"
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import cn from "./utils";

const HoverCardContent = React.forwardRef(({className, align = "center", sideOffset = 4, ...props}, ref) => (
    <HoverCardPrimitive.Content
      ref={ref}
      align={props.align || "center"}
      sideOffset={sideOffset}
      className={
        cn("HoverCardPrimitive z-[9999] w-[400px] rounded-md border drop-shadow-lg p-4 shadow-md outline-none",
        className)}
      {...props}
    />
  ));
  HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
  
  export { HoverCardContent };