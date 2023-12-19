<script setup>
import TabMenu from "./components/TabMenu.vue";
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col items-center inner-wrap">
      <p class="welcome">歡迎, 讀者 ANN</p>
      <button class="logout">登出</button>
      <TabMenu />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.inner-wrap {
  padding-left: 20.2649%;
  padding-right: 20.2649%;
}
.welcome {
  margin-top: 10.0285%;
  margin-bottom: 1.9927%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 17.76px;
}
.logout {
  border: 0;
  background-color: white;
  text-decoration: underline;
  font-size: 0.75rem;
  margin-bottom: 11.1358%;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.51px;
}
</style>
