/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'
import Footer from './Footer'
import mad from './img/mad.png'


export default function Example() {
  return (
    <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

<Navbar/>
          {/* <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-60 text-white bg-white transform translate-x-60"
            fill="currentColor"
            viewBox="-100 -100 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-s-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-900 xl:inline"> Mobil Tua</span>{' '}
                <span className="block text-indigo-900 xl:inline">Incaran Anak Muda</span>
              </h1>
              <p className="mt-3 text-base text-black-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              . "Aku melihatnya, aku menyukainya, aku menginginkannya, aku mendapatkannya. Siap memulai petualangan baru dengan mobil baruku."
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://i.pinimg.com/564x/d4/18/f0/d418f09017af9a8f13bc4939574624fb.jpg"/>
          alt=""
        /> 
      </div>
    </div>
    <section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/fa/4e/73/fa4e73d9acb3e2b5997599e813a27380.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/6a/f5/93/6af593039a613d6a6b014f8875bef337.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/564x/96/3f/23/963f239afc4dec5063f1c68bf77a6e15.jpg"/>
        </div>
      </div>
     
    </div>
  </div>
</section>
    <Footer/>
    </>
    
  )
}
