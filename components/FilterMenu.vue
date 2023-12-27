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
  <div class="category__container">
    <div class="category-title">
      <p>{{ FilterTotal.name }} ({{ FilterTotal.count }})</p>
    </div>
    <div class="category-grid">
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
  </div>
</template>

//
<style lang="scss" scoped>
.category {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #a1a1a1;
    width: 100%;
    max-width: 596px;
    max-height: 448px;
    background-color: white;
    padding-top: 2.3166%;
    padding-bottom: 0.8696%;
    z-index: 40;
    height: 100%;
    margin-top: -6.5773%;
    @include max-media(768) {
      max-height: 748px;
      padding-top: 14.5454%;
      padding-bottom: 14.5454%;
    }
  }
  &-title {
    padding: 1%;
    padding-left: 10%;
    align-self: flex-start;
    padding-bottom: 5.8942%;
    color: $text-color3;
    font-size: 1rem;
    max-width: 239.37px;
    @include max-media(768) {
      padding-bottom: 12.8723%;
    }
  }
  &-grid {
    display: flex;
    justify-content: space-around;
    width: 100%;

    z-index: 40;
    height: 100%;
    @include max-media(768) {
      width: 100%;
      flex-direction: column;
    }
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
    flex-direction: column;
    padding-left: 15%;
  }
}

.category-item {
  // width: ;
  margin-bottom: 23px;
  line-height: 14.98px;
  letter-spacing: 0.714px;
}

.divider {
  width: 1px;
  background-color: #000;
  margin: 0 10px;
  height: 250px;
  margin-top: 9px;

  @include max-media(768) {
    display: none;
  }
}
</style>
