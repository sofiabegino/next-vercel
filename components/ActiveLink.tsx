
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { CSSProperties, FC, PropsWithChildren } from 'react'

const style:CSSProperties = {
    color:"#0070f3",
    textDecoration: "underline"
}

interface Props{
    text:string,
    href:string
}

export const ActiveLink:FC<PropsWithChildren<Props>> = ({ text,href }) => {
    
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link>
    )
}
