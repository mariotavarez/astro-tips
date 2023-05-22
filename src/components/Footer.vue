<template>
  <footer aria-label="Site Footer" class="bg-white lg:grid lg:grid-cols-5">
    <div class="relative block h-32 lg:col-span-2 lg:h-full">
      <img
        src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
        class="absolute inset-0 object-cover w-full h-full"
      />
    </div>

    <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p>
            <span class="text-xs tracking-wide text-gray-500 uppercase">
              Call us
            </span>

            <a
              href="#"
              class="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
            >
              0123456789
            </a>
          </p>

          <ul class="mt-8 space-y-1 text-sm text-gray-700">
            <li>Monday to Friday: 10am - 5pm</li>
            <li>Weekend: 10am - 3pm</li>
          </ul>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p class="font-medium text-gray-900">Services</p>

            <nav aria-label="Footer Navigation - Services" class="mt-6">
              <ul class="space-y-4 text-sm">
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    Company Review
                  </a>
                </li>

                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    HR Consulting
                  </a>
                </li>

                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p class="font-medium text-gray-900">Company</p>

            <nav aria-label="Footer Navigation - Company" class="mt-6">
              <ul class="space-y-4 text-sm">
                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a href="#" class="text-gray-700 transition hover:opacity-75">
                    Accounts Review
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="pt-12 mt-12 border-t border-gray-100">
        <div class="sm:flex sm:items-center sm:justify-between">
          <nav aria-label="Footer Navigation - Support">
            <ul class="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>
          </nav>

          <p class="mt-8 text-xs text-gray-500 sm:mt-0">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
