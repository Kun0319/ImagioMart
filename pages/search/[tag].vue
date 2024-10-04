<script setup>
import Tagcontent from "./components/Tagcontent.vue";
import cover from "~/assets/images/SearchCover.png";
</script>
<template>
  <NuxtLayout>
    <Banner :img-src="cover" />
    <Tagcontent />
    <Paginator />
    <div class="grid-cols-12 gap-12 md:grid hidden advertise inner-wrap">
      <div v-for="n in 6" :key="n" class="col-span-4">
        <LittleAdvertise />
      </div>
    </div>
    <PaginationAdvertise class="pagination-advertise" />
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.paginator {
  margin-bottom: 20%;
  margin-top: 0;
}

.pagination-advertise {
  display: none;

  @include max-media(768) {
    display: block;
  }
}
</style>
