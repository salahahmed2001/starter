 
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"


const navigationLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forget Password", href: "/forget-password" },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [input,setInput]=useState('')
  return (
    <div className="flex flex-col min-h-screen"> 
    <div>

     <input className=" border p-3 bg-gray-500 w-72"  type="text" value={input} onChange={e=>setInput(e.target.value)}></input>
    </div>
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-6">
          {navigationLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-lg ${isActive ? "text-red-900" : "text-gray-700"} hover:text-red-500`}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      
      <div className="flex-grow p-6">
        <h2 className="text-xl mb-4">Inner Auth Layout</h2>
        {children}
      </div>
    </div>
  )
}
