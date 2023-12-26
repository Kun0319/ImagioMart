<script setup>
const FilterList = ref([
  { name: "Furniture", count: 20 },
  { name: "Dining", count: 10 },
  { name: "Wellness", count: 10 },
  { name: "Bath", count: 10 },
  { name: "Kitchen", count: 10 },
  { name: "Wall", count: 10 },
  { name: "Floor", count: 10 },
  { name: "Textiles", count: 20 },
  { name: "Room systems", count: 10 },
  { name: "Room acoustics", count: 10 },
  { name: "Fittings", count: 10 },
  { name: "Appliances", count: 10 },
  { name: "Building construction", count: 6 },
]);
const FilterTotal = ref({
  name: "ALL",
  count: FilterList.value.reduce((total, item) => total + item.count, 0),
});
const groupedFilterList = computed(() => {
  const groups = [];
  for (let i = 0; i < FilterList.value.length; i += 7) {
    groups.push(FilterList.value.slice(i, i + 7));
  }
  return groups;
});
</script>
<template>
  <div class="category-grid flex-row">
    <!-- <p>{{ FilterTotal.name }} ({{ FilterTotal.count }})</p> -->
    <template v-for="(group, index) in groupedFilterList" :key="index">
      <ul class="category-column">
        <li v-for="filter in group" :key="filter.name" class="category-item">
          {{ filter.name }} ({{ filter.count }})
        </li>
      </ul>
      <!-- 如果不是最后一组，添加分隔線 -->
      <div v-if="index < groupedFilterList.length - 1" class="divider"></div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.category-grid {
  display: flex;
  align-items: self-start;
  border: 1px solid #a1a1a1;
  width: 35%;
  background-color: white;
  padding-top: 2%;
  padding-bottom: 1%;
  z-index: 40;
  height: 100%;
  margin-top: -6.5773%;
  @include max-media(768) {
    width: 100%;
    flex-direction: column;
    margin-top: 35%;
  }
}

.category-column {
  display: grid;
  grid-template-rows: repeat(7, auto);
  padding-left: 10%;
  color: $text-color3;
  width: 100%;
  @include max-media(768) {
    grid-template-rows: repeat(auto-fill, auto);
  }
}

.category-item {
  margin-bottom: 10px;
}

.divider {
  width: 1px;
  background-color: #000;
  margin: 0 10px;
  height: 14rem;
  margin-top: 9px;
  @include max-media(768) {
    display: none;
  }
}
</style>
