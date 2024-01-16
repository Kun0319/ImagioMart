<script setup>
import Paginator from "primevue/paginator";
const props = defineProps({
  // totalRecords: { type: Number },
  // rows: { type: Number },
  // currentPage: { type: Number },
  totalRecords: Number,
  rows: Number,
  currentPage: Number,
});

const emit = defineEmits(["update:page"]);

const handlePageChange = (event) => {
  emit("update:page", event.page + 1);
};
</script>
<template>
  <div class="paginator">
    <Paginator
      :rows="rows"
      :totalRecords="totalRecords"
      :page="currentPage"
      @page="handlePageChange"
      class="custom-paginator"
      template="PrevPageLink  PageLinks  NextPageLink"
    ></Paginator>
  </div>
</template>

<style lang="scss">
.custom-paginator .p-paginator .p-paginator-pages .p-paginator-page {
  font-size: 12px;
}

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
