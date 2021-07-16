<template>
  <main>
    <px-header />
    <router-view class="container" />
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
