<template>
  <main>
    <px-header class="fixed" />
    <router-view class="container px-5 sm:px-20 py-56 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from "@/components/global/PxHeader"
//import PxAssetsTable from "@/components/global/PxAssetsTable"

export default {
  name: 'App',
  components: {PxHeader, 
  //PxAssetsTable
  }
}
</script>

<style>
</style>
