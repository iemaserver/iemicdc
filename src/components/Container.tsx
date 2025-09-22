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
        <div className={twMerge("w-[100vw] md:min-h-[86vh] min-h-[90vh] overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16", className)} {...otherProps}>
            {children}
        </div>
    )

}