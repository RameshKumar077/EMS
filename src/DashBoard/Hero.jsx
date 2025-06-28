import React from 'react'

const Hero = () => {
  return (

    <div class="h-[580px] flex flex-col items-center justify-center px-4 text-center">
      <div class="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15 pl-4 p-1 text-sm text-gray-800 max-w-full">
        <p>This is our Employee Management System</p>
       
      </div>

      <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800">Solutions to Elevate Your
        Business Growth</h1>
      <p class="max-w-xl text-center mt-6 px-4">Unlock potential with tailored strategies designed for success.
        Simplify challenges, maximize results, and stay ahead in the competitive market.</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
        <button class="px-7 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Get Started Now</button>
        <button class="group px-7 py-2.5 flex items-center gap-2 font-medium">
          Learn more
          <svg class="group-hover:translate-x-1 transition pt-0.5" width="12" height="9" viewBox="0 0 12 9"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5" stroke="#6B7280" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Hero