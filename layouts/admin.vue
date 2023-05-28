<template>
   <div class="w-full flex flex-col min-h-screen">
    <div class="sticky w-full top-0 z-50 left-0">
        <navbar />
    </div>

    <div class="flex-1 w-full h-full">
        <Nuxt />
    </div>

    <div class="mt-auto">
        <Footer />
    </div>
    
 
   </div>
</template>

<script>

export default {
    name : "default"
}
</script>

<style>

</style>