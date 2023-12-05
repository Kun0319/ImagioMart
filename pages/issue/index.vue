<script setup>
import IssueInfo from "./components/IssueInfo.vue";
import IssueLine from "./components/IssueLine.vue";
import Magazine from "./components/Magazine.vue";
import Paginator from "../../components/Paginator.vue";
import Advertise from "./components/Advertise.vue";
const magazines = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  name: `Magazine ${index + 1}`,
  imageUrl: "~/assets/images/Magazine.svg",
}));
</script>

<template lang="">
  <NuxtLayout>
    <IssueInfo />
    <IssueLine />
    <div class="grid grid-cols-12 gap-6">
      <!-- <Magazine
        v-for="n in 12"
        :key="n"
        :class="{ 'special-style': n === 3 }"
      /> -->
      <Magazine v-for="item in magazines" :key="item.id" :magazine="item" />
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
