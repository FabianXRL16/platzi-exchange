<template>
  <div>
    <px-assets-table :assets="assets" />
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
      assets: [],
    }
  },
  created(){
    api.getApi()
      .then(assets => (this.assets = assets))
  },
};
</script>