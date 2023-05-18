import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div className="flex justify-center p-4 gap-x-4">
             <Link href='/'>Home</Link>
             <Link href='/blog'>Blog</Link>
        </div>
    )
}
