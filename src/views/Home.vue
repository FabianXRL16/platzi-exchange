<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68b391'" :size="300" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/global/PxAssetsTable";
import api from "@/api"

export default {
  name: "Home",
  components: { PxAssetsTable },
  data(){
    return {
      isLoading: true,
      assets: [],
    }
  },
  created(){
    api.getApi()
      .then(assets => (this.assets = assets))
      .finally(()=> this.isLoading = false)
  },
};
</script>