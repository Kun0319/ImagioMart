<script setup>
import SearchBg from "./components/SearchBg.vue";
</script>
<template>
  <NuxtLayout>
    <SearchBg />
    <div class="Search">
      <p class="text-center text">Search results for “Italy”</p>
      <p class="text-center text">
        No artical were found matching your selection.
      </p>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.Search {
  padding-top: 25%;
  padding-bottom: 25%;
}

.text {
  font-size: 1.3125rem;
  line-height: 49.46px;
  @include max-media(768) {
    font-size: 0.75rem;
  }
}
</style>
