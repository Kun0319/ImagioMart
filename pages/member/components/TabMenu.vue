<script setup>
// 通知父组件
const emit = defineEmits(["update:selectedTab"]);
const selectedTab = ref(0);
// 切換設計師
// const emit = defineEmits(["update:canShow"]);

// 切換設計師
// const selectTab = (index) => {
//   selectedTab.value = index;
// };
// 通知父组件
const selectTab = (index) => {
  selectedTab.value = index;
  emit("update:selectedTab", index); // 新增：通知父组件当前选中的标签索引
};
// 切換設計師
const props = defineProps({
  canShow: Boolean,
});

// const canShowSubmissionTab = ref(props.canShow);

const tabs = computed(() => {
  const baseTabs = [
    { label: "個人資料" },
    { label: "訂單紀錄" },
    { label: "我的收藏" },
    { label: "瀏覽紀錄" },
  ];
  if (props.canShow) {
    baseTabs.push({ label: "投稿紀錄" });
  }
  return baseTabs;
});

// 假設這是一個響應式參數，用於決定是否顯示 "投稿紀錄"
// const canShowSubmissionTab = ref(false);

// const toggleTabVisibility = () => {
//   canShowSubmissionTab.value = !canShowSubmissionTab.value;
//   emit("update:canShow", canShowSubmissionTab.value);
// };
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
  margin-bottom: 9.3775%;
  width: 100%;
  justify-content: space-around;

  @include max-media(768) {
    margin-bottom: 15.3092%;
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
