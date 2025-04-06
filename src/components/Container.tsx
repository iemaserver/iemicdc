import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
    children: React.ReactNode,
    className?: string,
    otherProps?: object
}

export const Container = (props: Props) => {

    const { children, className, otherProps } = props

    return (
        <div className={twMerge("w-[100vw] md:min-h-[86vh] min-h-[90vh] overflow-x-hidden", className)} {...otherProps}>
            {children}
        </div>
    )

}