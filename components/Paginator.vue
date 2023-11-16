<script setup>
import Paginator from "primevue/paginator";
</script>
<template>
  <div class="paginator">
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
.paginator {
  margin-top: 12.09%;
  margin-bottom: 10.65%;
}
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
