'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {useState} from 'react'
import {usePathname} from 'next/navigation'
import {AnimatePresence, motion} from 'framer-motion'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="text-center md:pt-7 pb-12 uppercase tracking-widest pt-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{height: 0}}
            animate={{height: 'auto'}}
            exit={{height: 0}}
            transition={{duration: 0.75}}
            className="md:hidden flex flex-col items-center gap-3 justify-center text-stone-400 overflow-hidden"
          >
            {navLinks.map(({href, label}) => (
              <Link
                key={label}
                className="hover:text-stone-500 transition-colors duration-200 ease-in-out"
                href={href}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          'md:hidden block tracking-widest uppercase text-stone-400 text-center w-full py-3 mb-7 border-y-2 transition-transform duration-200 ease-in-out transform',
          isOpen ? 'translate-y-3' : 'translate-y-0'
        )}
      >
        Menu
      </button>
      <Link
        className="font-bold text-xl text-stone-700"
        href="/"
      >
        Sean O'Reilly
      </Link>

      <ul className="mb-4 md:mb-8 mt-4 flex text-[12px] gap-4 text-stone-200 justify-center">
        <li>Web Developer</li>
        <li>Photographer</li>
        <li>World Traveler</li>
      </ul>

      <nav className="flex justify-between items-center text-stone-500 text-[12px]">
        <span className="bg-stone-300 h-[1px] rounded flex-1 hidden lg:inline-block" />
        <div className="hidden md:flex gap-10 lg:px-10 justify-center w-full lg:w-auto">
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
