<script setup>
import TabMenu from "./components/TabMenu.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goshop = () => {
  router.push("/member/1");
};
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col items-center inner-wrap">
      <p class="welcome">歡迎, 讀者 ANN</p>
      <button class="logout">登出</button>
      <TabMenu />
      <p class="noorder">您還沒有任何訂單</p>
      <nuxt-link to="/member/1" class="btn__link"
        ><button class="btn">繼續購物</button></nuxt-link
      >
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
  font-family: $font-NotoSerif;
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
  font-family: $font-NotoSerif;

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
}
</style>
