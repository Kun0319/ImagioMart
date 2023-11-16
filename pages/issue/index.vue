<script setup>
import IssueInfo from "./components/IssueInfo.vue";
import IssueLine from "./components/IssueLine.vue";
import Magazine from "./components/Magazine.vue";
import Paginator from "../../components/Paginator.vue";
import Advertise from "./components/Advertise.vue";
</script>

<template lang="">
  <NuxtLayout>
    <IssueInfo />
    <IssueLine />
    <div class="grid grid-cols-12 gap-6">
      <Magazine
        v-for="n in 12"
        :key="n"
        :class="{ 'special-style': n === 3 }"
      />
    </div>
    <Paginator />
    <Advertise />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
// 已售完樣式
.special-style {
  opacity: 0.4;
  position: relative;
}

.special-style::before {
  content: "已售完";
  display: flex;
  padding-left: 3%;
  padding-right: 3%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  color: rgb(0, 0, 0);

  @include max-media(768) {
    top: 20%;
  }
  @include max-media(480) {
    top: 15%;
  }
}
</style>
