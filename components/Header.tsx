'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const navLinks = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/projects',
    label: 'web projects',
  },
  {
    href: 'https://seanoreilly.me',
    label: 'website',
  },
  {
    href: '/stills',
    label: 'stills',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/contact',
    label: 'contact',
  },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="text-center pt-7 pb-12 uppercase tracking-widest">
      <Link
        className="font-bold text-xl text-stone-700"
        href="/"
      >
        Sean O'Reilly
      </Link>

      <ul className="mb-8 mt-4 flex text-[12px] gap-4 text-stone-200 justify-center">
        <li>Web Developer</li>
        <li>Photographer</li>
        <li>World Traveler</li>
      </ul>

      <nav className="flex justify-between items-center text-stone-500 text-[12px]">
        <span className="bg-stone-300 h-[1px] rounded flex-1 hidden lg:inline-block" />
        <div className="flex gap-10 lg:px-10 justify-center w-full lg:w-auto">
          {navLinks.map(({href, label}) => (
            <Link
              className={clsx(
                'hover:text-stone-800 pb-[2px] hover:border-b-2 hover:border-stone-300',
                href === pathname &&
                  'text-stone-800 border-b-2 border-stone-300',
                'transition-all duration-200 ease-in-out'
              )}
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
        <span className="bg-stone-300 h-[1px] rounded flex-1 hidden lg:inline-block" />
      </nav>
    </header>
  )
}
