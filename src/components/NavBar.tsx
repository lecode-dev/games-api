/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

import DittoImg from "../assets/ditto.png"


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#', current: false },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-purple">
      {({ open }) => (
        <>
          <header>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            </style>
          </header>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-light-purple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={DittoImg}
                    alt="Ditto Icon"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={DittoImg}
                    alt="Ditto Icon"
                  />
                  <h1 className='px-2 py-0 rounded-md text-lg font-medium text-white font-poppins'>
                    The Game Database
                  </h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-light-purple text-white' : 'text-gray-300 hover:bg-light-purple hover:text-white',
                          'px-4 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden relative pl-3 z-0 flex-1 sm:flex items-center justify-end sm:inset-0">
                  <div className="w-full md:w-64 lg:w-80">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-2.5 flex items-center">
                        <SearchIcon className="h-5 w-5 text-light-purple" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full bg-white border border-transparent rounded-md py-2 pl-9 text-sm placeholder-purple focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-light-purple focus:placeholder-gray-500 sm:text-sm"
                        placeholder="Search a game"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-light-purple text-white' : 'text-gray-300 hover:bg-light-purple hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="relative z-0 flex-1 flex items-center justify-center sm:inset-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon className="h-5 w-5 text-light-purple" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-purple focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-light-purple focus:placeholder-gray-500 sm:text-sm"
                      placeholder="Search a game"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
