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
    <div class="grid flex-wrap grid-cols-12 justify-between p-0 m-0">
      <Magazine v-for="n in 12" :key="n" />
    </div>
    <Paginator />
    <Advertise />
  </NuxtLayout>
</template>

<style lang=""></style>
