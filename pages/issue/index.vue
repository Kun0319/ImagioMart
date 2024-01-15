<script setup>
import IssueInfo from "./components/IssueInfo.vue";
import IssueLine from "./components/IssueLine.vue";
import Magazine from "./components/Magazine.vue";
import Paginator from "../../components/Paginator.vue";
import Advertise from "./components/Advertise.vue";

// const magazines = Array.from({ length: 12 }, (_, index) => ({
//   id: index,
//   name: `Magazine ${index + 1}`,
//   imageUrl: "~/assets/images/Magazine.svg",
// }));
const magazines = ref([]);

// 獲取資料
const {
  data: fetchedData,
  pending,
  error,
  refresh,
} = await useFetch("https://iw-api.d-blueprint.com/api/issues/11");
// 雜誌列表

const {
  data: dataFromApi2,
  error: errorApi2,
  refresh: refresh2,
} = useFetch(
  "https://iw-api.d-blueprint.com/api/issues?sorting=sort&direction=asc&page=1&per_page=15&type=iw",
);

watch([dataFromApi2, errorApi2], () => {
  if (!errorApi2.value && dataFromApi2.value && dataFromApi2.value.data.list) {
    magazines.value = dataFromApi2.value.data.list.map((item) => {
      // console.log(item);
      return {
        id: item.id,
        name: item.title,
        subtitle: item.subtitle,
        imageUrl: item.imageUrl,
        price: item.price,
      };
    });

    // console.log(magazines.value);
  }
});

// console.log(magazines.value);
// console.log(dataFromApi2.value?.data.list[0].id);
// console.log(dataFromApi2.value?.data?.list.length);
</script>

<template>
  <NuxtLayout>
    <IssueInfo :childData="fetchedData" />

    <IssueLine />
    <div class="grid grid-cols-12 gap-6">
      <!--
  <Magazine v-for="n in 12" :key="n" :class="{ 'special-style': n === 3 }" /> -->
      <!-- <Magazine v-for="item in magazines" :key="item.id" :magazine="item" /> -->
      <Magazine v-for="item in magazines" :key="item.id" :magazine="item" />

      <!-- <Magazine
        v-for="dataFromApi2 in dataFromApi2.value?.data?.list.length"
        :key="dataFromApi2.value?.data.list[0].id"
        :magazine="item"
      /> -->
    </div>
    <Paginator />
    <Advertise />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
// 已售完樣式
.special-style {
  position: relative;
}

.special-style::before {
  content: "Sold out";
  display: flex;
  padding-left: 1.5%;
  padding-right: 1.5%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  left: 50%;
  font-family: $font-Noto;
  transform: translateX(-50%);
  // background-color: #ffffff;
  // box-shadow: -10px 5px 10px 5px rgba(0, 0, 0, 0.1);
  color: rgb(0, 0, 0);
  @include max-media(768) {
    top: 20%;
  }

  @include max-media(480) {
    top: 15%;
  }
}
</style>
