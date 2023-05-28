<template>
<nav class="bg-blue-100 shadow-black">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a href="" class="flex items-center text-center">
  <div><img class="w-12 h-12 bg-blue-100" src="@/static/DMULogo.png" alt="" /></div>
    <div><h1 class="BrandN text-blue-950 pl-3">Debremarkos University</h1></div>
</a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 font-axiforma">
        <li>
          <nuxt-link to="/" class=" text-blue-950 lock py-2 pl-3 pr-4   rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
             Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Register" class="text-blue-950 block py-2 pl-3 pr-4   rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
             Register
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/auth/login" class="text-blue-950 block py-2 pl-3 pr-4   rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
             Login
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/language" class="text-blue-950 block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 dark:text-white " aria-current="page">
             Language
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/help" class="text-blue-950 block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
             Help
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.cdnfonts.com/css/axiforma");
.BrandN {
  font-family: "axiforma";
  font-size: xx-large;
}
.lists {
  margin-left: 500px;
  font-family: "axiforma";
}
</style>