import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <Link href="/">
            Portofolio Website
        </Link>
        <div>
            <Link href='/'>Home</Link>
            <Link href="/contact">Conatct</Link>
            <Link href="/about">About</Link>
            <Link href="/logAdmin/login">Login</Link>
            <Link href="/logAdmin/logout">Logout</Link>
        </div>
    </nav>
  )
}

export default Navbar