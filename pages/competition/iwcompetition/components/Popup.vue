<script setup>
const isPopupVisible = ref(false);

const closePopup = () => {
  isPopupVisible.value = false;
};
</script>

<template>
  <div class="popup__container">
    <div class="popup">
      <div class="col-span-6 flex items-center">
        <img src="/images/WINNERS3.png" alt="" class="photo" />
      </div>
      <div class="overlay" @click="$emit('close')">
        <img src="~/assets/icon/close.svg" alt="" />
      </div>
      <div class="col-span-6 flex flex-col justify-center">
        <p class="text__one">2021得獎者</p>
        <p class="text__two">Patrick Norguet</p>
        <p class="text__three">派屈克．諾蓋</p>
      </div>
      <div class="col-span-12 flex items-center">
        <p class="text__four">
          1969年生於法國都爾，在西班牙ESDi設計學院畢業後，他參與了兩大奢侈品牌
          Yves Saint-Laurent 和 Louis Vuitton
          的櫥窗設計項目，並藉此經歷成功奠基他對於品牌識別及展示型態的考究，更將其經驗運用在臨時建築或裝置上。2000年，派屈克因個人首件設計作品雛形「彩虹椅（Rainbow
          Chair）」與義大利設計教父Giulio
          Cappellini結緣，並迅速打開國際知名度。如今，合作對象遍及各產業的派屈克．諾蓋，已然是法國設計界的標誌人物，透過專業、天賦與熱情，他持續拓展設計師作為生活方式推動者的地位和責任。
        </p>
      </div>
    </div>
  </div>
  <div class="bg" @click="$emit('close')"></div>
</template>

<style lang="scss" scoped>
.popup {
  @apply grid grid-cols-12 gap-4;
  // width: 43.947vw;
  // height: 45vw;
  width: 65vw;
  height: 50vw;
  min-width: 500px;
  max-width: 71.1875rem;
  max-height: 54.25rem;
  position: relative;
  box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  background-color: white;
  padding: 5% 15%;
  // top: 30%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  @include max-media(768) {
    // min-width: 300px;
    // min-height: 170px;
    min-width: 320px;
    min-height: 492px;
  }

  &__container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    @include max-media(768) {
      top: 55%;
    }
  }
}

.photo {
  height: auto; // 這將確保圖片的高度自動調整以保持比例
  object-fit: cover; // 將保持圖片的長寬比並覆蓋容器
  border-radius: 23px;
  border-radius: 50%;
  border-radius: 50%;
  object-fit: cover;
  width: 17.7674vw;
  height: 17.7674vw;
}

.overlay {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
}

.text {
  &__one {
    color: $text-color3;
    font-size: 1rem;
    font-size: clamp(0.5rem, 1vw, 1rem);
    line-height: 132%;
    @include max-media(768) {
      font-size: 0.5rem;
    }
  }

  &__two {
    color: $text-color3;
    font-size: 1.3125rem;
    font-size: clamp(0.75rem, 1.5vw, 1.3125rem);
    line-height: 132%;
    margin-top: 4.8643%;
    margin-bottom: 4.0962%;
    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__three {
    font-size: 1.125rem;
    font-size: clamp(0.75rem, 1.5vw, 1.125rem);
    line-height: 111%;
    @include max-media(768) {
      font-size: 0.75rem;
    }
  }
  &__four {
    font-size: 1.25rem;
    font-size: clamp(0.625rem, 1.5vw, 1.25rem);
    font-weight: 300;
    line-height: 209.4%;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }
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
