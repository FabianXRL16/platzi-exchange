<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody v-for="asset in assets" :key="asset.id">
      <tr class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100">
        <th><img :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`" :alt="asset.name"></th>
        <td><b>#{{asset.rank}}</b></td>
        <td><router-link class="text-green-600 font-medium" :to="{name: 'coin-detail', params: {id: asset.id}}">{{asset.name}}</router-link></td>
        <td>{{asset.priceUsd | dollar}}</td>
        <td>{{asset.marketCapUsd | dollar}}</td>
        <td :class="asset.changePercent24Hr >= 0 ?
          `text-green-600 font-medium up` : 
          `text-blue-600 font-medium down`">
          {{asset.changePercent24Hr | percent}}
          </td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
