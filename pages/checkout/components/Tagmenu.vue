<script setup>
const selectedTab = ref(0);
const selectTab = (index) => {
  selectedTab.value = index;
};
const props = defineProps({
  canShow: Boolean,
});
const emit = defineEmits(["update:canShow"]);

const canShowSubmissionTab = ref(props.canShow);
const tabs = computed(() => {
  const baseTabs = [
    { label: "購物車" },
    { label: "運送資訊" },
    // { label: "我的收藏" },
    // { label: "瀏覽紀錄" },
  ];
  if (props.canShow) {
    baseTabs.push({ label: "作品投稿" });
  }
  return baseTabs;
});
// 假設這是一個響應式參數，用於決定是否顯示 "作品投稿"
// const canShowSubmissionTab = ref(false);

const toggleTabVisibility = () => {
  canShowSubmissionTab.value = !canShowSubmissionTab.value;
  emit("update:canShow", canShowSubmissionTab.value);
};
</script>
<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab"
      @click="selectTab(index)"
    >
      {{ tab.label }}
      <div v-if="index === selectedTab" class="indicator"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .navigation {
//   &--bar {
//     width: 100%;
//     border-bottom: 3px solid #d9d9d9;
//     justify-content: space-around;
//     margin-bottom: 16.059%;
//   }
//   &__list {
//     @apply flex flex-row justify-around;
//     &__btn {
//       font-size: 1rem;
//       font-family: $font-NotoSerif;
//       border: 0;
//       background-color: white;
//     }
//   }
// }
.tabs {
  display: flex;
  border-bottom: 3px solid #e0e0e0;
  margin-bottom: 16.059%;
  width: 100%;
  justify-content: space-around;
  @include min-media(768) {
    display: none;
  }
}

.tab {
  padding: 10px;
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  padding-bottom: 5.6265%;
  @include max-media(768) {
    font-size: 0.875rem;
  }
}

.indicator {
  position: absolute;
  bottom: -2px;
  /* 與底線對齊 */
  left: 0;
  right: 0;
  height: 3px;
  background-color: black;
  transition: all 0.3s ease;
  /* 黑色指示條 */
}
</style>
