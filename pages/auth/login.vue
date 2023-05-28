<template>
  <div>
    <div class="flex justify-center items-center mt-16 mb-5">
      <h1 class="text-3xl">Login Here To See Your Profile</h1>
    </div>
    <div class="flex justify-center items-center">
      <form class="">
        <table class="text-lg">
          <tr class="mb-10">
            <td class="px-4 py-4">
              <label for="email" class="block">Full Name:</label>
            </td>
            <td class="px-4 py-4">
              <input type="email" id="email" class="border border-slate-400 h-10 rounded" required />
            </td>
          </tr>
          <tr class="mb-10">
            <td class="px-4 py-4">
              <label for="password" class="block">ID</label>
            </td>
            <td class="px-4 py-4">
              <input type="password" id="password" class="border border-slate-400 h-10 rounded" required />
            </td>
          </tr>
          <tr class="mb-10">
            <td class="px-4 py-4">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class=""
                  required
                />
                <label for="remember" class="text-md">Remember me</label>
              </div>
            </td>
          </tr>
          <tr class="mb-10">
            <td class="px-4 py-4"></td>
            <td class="bg-blue-800 text-white text-center rounded-lg h-12">
              <button type="submit" class="">Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "admin",
};
</script>




<style>
</style>