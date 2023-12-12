<script setup>
import SearchBg from "./components/SearchBg.vue";
import Tagcontent from "./components/Tagcontent.vue";
</script>
<template>
  <NuxtLayout>
    <SearchBg />
    <Tagcontent />
    <Paginator />
    <div class="grid-cols-12 gap-12 md:grid hidden advertise wrap">
      <div class="col-span-4" v-for="n in 6" :key="n">
        <LittleAdvertise />
      </div>
    </div>
    <PaginationAdvertise class="pagination-advertise" />
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.paginator {
  margin-bottom: 20%;
}
.pagination-advertise {
  display: none;
  @include max-media(768) {
    display: block;
  }
}
</style>
