import Link from 'next/link'

const navLinks = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/',
    label: 'web projects',
  },
  {
    href: '/',
    label: 'stills',
  },
  {
    href: '/about',
    label: 'contact',
  },
  {
    href: '/latest',
    label: 'contact',
  },
]

export default function Header() {
  return (
    <header className="text-center pt-7 pb-12 uppercase tracking-widest">
      <Link
        className="font-bold text-xl text-stone-700"
        href="/"
      >
        Sean O'Reilly
      </Link>

      <ul className="mb-8 mt-5 flex text-[13px] gap-4 text-stone-200 justify-center">
        <li>Web Developer</li>
        <li>Photographer</li>
        <li>World Traveler</li>
      </ul>

      <nav className="flex justify-between items-center text-stone-500 text-[13px]">
        <span className="w-2 h-[1px] bg-stone-500 rounded" />
        {navLinks.map(({href, label}) => (
          <Link
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
        <span className="w-2 h-[1px] bg-stone-500 rounded" />
      </nav>
    </header>
  )
}
