'use client'

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navLink = [
    { name : 'Découvrir', href: '/Decouvrir' },
    { name : 'Agir', href: '/Agir' },
    { name : 'Programmes', href : '/Programmes' },
    { name : 'E-shop cafe', href: '/E-shop cafe'},
]

export default function NavLinks() {
    const pathname = usePathname()
  
    return (
      <>

        {navLink.map((link) => {

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex inline-flex justify-center rounded-md px-3 py-2 text-lg font-medium text-gray-400 hover:bg-gray-200 hover:text-orange-400',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}

      </>
    );
  }
