<script setup>
import IssueInfo from "./components/IssueInfo.vue";
import IssueLine from "./components/IssueLine.vue";
import Magazine from "./components/Magazine.vue";
import Paginator from "../../components/Paginator.vue";
import Advertise from "./components/Advertise.vue";
// import Paginator from "../../components/Paginator.vue"

// const magazines = Array.from({ length: 12 }, (_, index) => ({
//   id: index,
//   name: `Magazine ${index + 1}`,
//   imageUrl: "~/assets/images/Magazine.svg",
// }));

// 獲取資料
const {
  data: fetchedData,
  pending,
  error,
  refresh,
} = await useFetch("https://iw-api.d-blueprint.com/api/issues/11");

// 雜誌列表
const magazines = ref([]);
const currentPage = ref(1);
// const {
//   data: dataFromApi2,
//   error: errorApi2,
//   refresh: refresh2,
// } = await useFetch(
//   "https://iw-api.d-blueprint.com/api/issues?sorting=sort&direction=asc&page=1&per_page=6&type=iw",
// );

// if (!errorApi2.value && dataFromApi2.value && dataFromApi2.value.data.list) {
//   magazines.value = dataFromApi2.value.data.list.map((item) => {
//     return {
//       id: item.id,
//       name: item.title,
//       subtitle: item.subtitle,
//       imageUrl: item.imageUrl,
//       price: item.price,
//       member_price: item.member_price,
//     };
//   });
// }

// 取得資料的方法
const fetchMagazines = async (page) => {
  const { data, error } = await useFetch(
    `https://iw-api.d-blueprint.com/api/issues?sorting=sort&direction=asc&page=${page}&per_page=8&type=iw`,
  );

  if (!error.value && data.value) {
    // 直接使用賦值操作更新 magazines 傳props
    magazines.value = data.value.data.list.map((item) => ({
      id: item.id,
      name: item.title,
      subtitle: item.subtitle,
      imageUrl: item.imageUrl,
      price: item.price,
      member_price: item.member_price,
    }));
  }
};
// 更新當前頁面
const updateCurrentPage = async (newPage) => {
  currentPage.value = newPage;
  // 重置 magazines
  // magazines.value = [];

  // 取得新頁面資料
  await fetchMagazines(newPage);
};
// 掛載時
onMounted(async () => {
  await refresh();
  await fetchMagazines(currentPage.value);
});
</script>

<template>
  <NuxtLayout>
    <IssueInfo :child-data="fetchedData" />

    <IssueLine />
    <div class="grid grid-cols-12 gap-6">
      <Magazine
        v-for="item in magazines"
        :key="item.id"
        :magazine="item"
        :class="{ 'special-style': item.id === 3 }"
      />
    </div>
    <client-only>
      <Paginator
        :total-records="50"
        :rows="8"
        :page="currentPage.value"
        @update:page="updateCurrentPage"
      />
    </client-only>
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
