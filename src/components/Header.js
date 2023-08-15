/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image';
import { Fragment } from 'react';
import { useAuth } from '@hooks/useAuth';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { LoginIcon, LogoutIcon } from '@heroicons/react/solid';
import logoWhite from '@assets/astro-place-white.png';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Productos', href: '/products', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const auth = useAuth();
  const userData = {
    name: auth?.user?.name,
    email: auth?.user?.email,
    imageUrl: auth.user ? `https://ui-avatars.com/api/?name=${auth?.user?.name}` : `https://ui-avatars.com/api/?name=`,
  };
  // console.log(userData);
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 cursor-pointer">
                    <Image
                      src={logoWhite}
                      width="60px"
                      height="50px"
                      onClick={() => {
                        window.location.href = '/';
                      }}
                      alt="Image"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <Image src={userData.imageUrl} width="32px" height="32px" alt="" className="rounded-full" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {auth.user ? (
                            <button onClick={() => auth.logOut()} className="flex justify-between px-4 py-2 text-md text-gray-700 w-full">
                              <span className="w-full font-semibold">Cerrar sesión</span>
                              <LogoutIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          ) : (
                            <button onClick={() => (window.location.href = '/login')} className="flex justify-between px-4 py-2 text-md text-gray-700 w-full">
                              <LoginIcon className="h-6 w-6" aria-hidden="true" />
                              <span className="w-full font-semibold">Iniciar sesión</span>
                            </button>
                          )}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image src={userData.imageUrl} width="40px" height="40px" alt="" className="rounded-full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{userData.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{userData.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {auth.user ? (
                    <button onClick={() => auth.logOut()} className="flex justify-between px-4 py-2 text-md text-gray-700 w-2/5">
                      <span className="w-full font-semibold text-white">Cerrar sesión</span>
                      <LogoutIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  ) : (
                    <button onClick={() => (window.location.href = '/login')} className="flex justify-between px-4 py-2 text-md text-gray-700 w-2/5">
                      <LoginIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      <span className="w-full font-semibold text-white">Iniciar sesión</span>
                    </button>
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
