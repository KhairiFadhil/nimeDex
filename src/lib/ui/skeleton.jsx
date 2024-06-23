import cn from "../utils"

function Skeleton({className, ...props}) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-600", className)}
      {...props}
    />
    
  )
}

export{ Skeleton }