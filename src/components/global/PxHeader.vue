<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon />
          <router-link to="/" class="font-semibold text-xl tracking-tight ml-4"
            >PlatziExchange</router-link>
        </div>
        <div
          class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/global/PxIcon";

export default {
  name: "PxHeader",
  components: {
    PxIcon,
  },
};
</script>
