<template>
  <main>
    <px-header :links="links" class="fixed" />
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
  },
  data(){
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'TRT',
          to: { name: 'coin-detail', params: { id: 'tether' } }
        }
      ],
    }
  }
}
</script>

<style>
</style>
