<script setup>
const isPopupVisible = ref(false);

const closePopup = () => {
  isPopupVisible.value = false;
};

onMounted(() => {
  isPopupVisible.value = true;
});
</script>

<template>
  <div v-if="isPopupVisible" class="popup__container">
    <div class="popup">
      <p class="text__title__one">IW會員制度</p>
      <div class="text__container">
        <p class="text__title">．一般會員</p>
        <div>
          <p class="text__content">
            1969年生於法國都爾，在西班牙ESDi設計學院畢業後，他參與了兩大奢侈品牌
            Yves Saint-Laurent 和 Louis Vuitton
            的櫥窗設計項目，並藉此經歷成功奠基他對於品牌識別及展示型態的考究，更將其經驗運用在臨時建築或裝置上。2000年，派屈克因個人首件設計作品雛形「彩虹椅（Rainbow
            Chair）」與義大利設計教父Giulio
            Cappellini結緣，並迅速打開國際知名度。如今，合作對象遍及各產業的派屈克．諾蓋，已然是法國設計界的標誌人物，透過專業、天賦與熱情，他持續拓展設計師作為生活方式推動者的地位和責任。
          </p>
        </div>
      </div>
      <div class="text__container">
        <p class="text__title">．設計師會員</p>
        <div>
          <p class="text__content">
            1969年生於法國都爾，在西班牙ESDi設計學院畢業後，他參與了兩大奢侈品牌
            Yves Saint-Laurent 和 Louis Vuitton
            的櫥窗設計項目，並藉此經歷成功奠基他對於品牌識別及展示型態的考究，更將其經驗運用在臨時建築或裝置上。2000年，派屈克因個人首件設計作品雛形「彩虹椅（Rainbow
            Chair）」與義大利設計教父Giulio
            Cappellini結緣，並迅速打開國際知名度。如今，合作對象遍及各產業的派屈克．諾蓋，已然是法國設計界的標誌人物，透過專業、天賦與熱情，他持續拓展設計師作為生活方式推動者的地位和責任。
          </p>
        </div>
      </div>
    </div>
    <div class="overlay" @click="closePopup">
      <img src="~/assets/icon/close.svg" alt="" />
    </div>
  </div>
  <div class="bg" v-if="isPopupVisible" @click="closePopup"></div>
</template>

<style lang="scss" scoped>
.popup {
  width: 65.91vw;
  // height: 45vw;
  min-width: 500px;
  max-width: 1139px;
  max-height: 1288px;
  position: relative;
  box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  padding: 5% 12.5%;
  border-radius: 23px;

  @include max-media(768) {
    // top: 40%;
    min-width: 300px;
    min-height: 170px;
  }

  &__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
}

.text {
  &__title {
    font-size: 1.125rem;
    margin-bottom: 5%;
    @include max-media(768) {
      font-size: 0.875rem;
    }
    &__one {
      @extend .text__title;
      margin-bottom: 5.5%;
    }
  }

  &__content {
    font-size: 1.25rem;
    line-height: 1.5;
    @include max-media(768) {
      font-size: 0.75rem;
    }
  }
  &__container {
    margin-bottom: 10%;
  }
}

.overlay {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d9d9d9b5;
  z-index: 20;
}
</style>
