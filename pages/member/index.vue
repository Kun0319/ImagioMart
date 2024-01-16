<script setup>
import TabMenu from "./components/TabMenu.vue";
import { useRouter } from "vue-router";
import Order from "./components/Order.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import DesignSubmission from "./components/DesignSubmission.vue";
import UserFavorites from "./components/UserFavorites.vue";
import VisitedItems from "./components/VisitedItems.vue";
import SubmissionHistory from "./components/SubmissionHistory.vue";

const selectedTab = ref(0);
const updateSelectedTab = (index) => {
  selectedTab.value = index;
};
const orders = [
  {
    id: "2112312344",
    date: "2023-12-10",
    amount: "NT$3,140",
    status: "已成交",
  },
  {
    id: "2112312345",
    date: "2023-12-11",
    amount: "NT$1,560",
    status: "已取消",
  },
];
const submissions = [
  {
    id: "231208I23654",
    date: "ANA Studio",
    amount: "西澳大利亞珀斯 隱園",
    date: "2023.12.11",
    status: "已提交",
  },
  {
    id: "231208I23654",
    date: "ANA Studio",
    amount: "西澳大利亞珀斯 隱園",
    date: "2022.09.30",
    status: "審核完成",
  },
];
const router = useRouter();

const globalStore = useGlobalStore();
const canShow = computed(() => globalStore.hasSubmitted);
const logout = () => {
  globalStore.setSubmissionStatus(false);
  router.push("/member");
};
const handleSubmissionClick = () => {
  selectedTab.value = 5; // 5 是 DesignSubmission 组件对应的索引
};
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col items-center inner-wrap">
      <p class="welcome" v-if="canShow">歡迎, 設計師 ANN</p>
      <p class="welcome" v-else>歡迎, 讀者 ANN</p>

      <button class="logout" @click="logout">登出</button>
      <button class="btn__submit" v-if="canShow" @click="handleSubmissionClick">
        案例投稿
      </button>
      <TabMenu @update:selectedTab="updateSelectedTab" :can-show="canShow" />
      <PersonalInfo v-if="selectedTab === 0" />
      <Order v-if="selectedTab === 1" :orders="orders" />
      <UserFavorites v-if="selectedTab === 2" />
      <VisitedItems v-if="selectedTab === 3" />
      <SubmissionHistory v-if="selectedTab === 4" :submissions="submissions" />
      <DesignSubmission v-if="selectedTab === 5" />

      <div class="hidden">
        <p class="noorder">您還沒有任何訂單</p>
        <nuxt-link to="/member/order" class="btn__link"
          ><button class="btn">繼續購物</button></nuxt-link
        >
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.inner-wrap {
  padding-left: 20.2649%;
  padding-right: 20.2649%;

  @include max-media(768) {
    padding-left: 0;
    padding-right: 0;
  }
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
  // font-family: $font-NotoSerif;
}

.noorder {
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 11.7219%;
}

.btn {
  font-size: 0.75rem;
  font-weight: 700;
  background-color: white;
  border: 0;
  // font-family: $font-NotoSerif;

  &__link {
    font-size: 0.75rem;
    max-width: 120px;
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 38.3307%;
  }

  &__submit {
    @extend .btn;
    @extend .btn__link;
    margin-bottom: 9.145%;
    margin-top: -7.5%;
  }
}
</style>
