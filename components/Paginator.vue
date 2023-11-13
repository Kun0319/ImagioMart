<script setup>
import Paginator from "primevue/paginator";
</script>
<template>
  <div class="my-32">
    <Paginator
      :rows="10"
      :totalRecords="50"
      class="custom-paginator"
      template="PrevPageLink PageLinks NextPageLink"
    >
    </Paginator>
  </div>
</template>

<style lang="scss">
.custom-paginator
  .p-paginator
  .p-paginator-pages
  .p-paginator-page.p-highlight {
  background-color: transparent;
  text-decoration: underline;
  text-decoration-color: #00000075;
  text-underline-offset: 10px;
}
</style>
