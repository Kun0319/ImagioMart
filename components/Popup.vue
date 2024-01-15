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
      <img src="~/assets/images/projectcontent6.png" alt="" class="photo" />
      <div class="overlay" @click="closePopup">
        <img src="~/assets/icon/close.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="bg" v-if="isPopupVisible" @click="closePopup"></div>
</template>

<style lang="scss" scoped>
.popup {
  // width: 32.96vw;
  // height: 18.75vw;
  width: 10.99vw;
  height: 6.25vw;
  min-width: 500px; /* 最小宽度，例如 300px */
  max-width: 1139px;
  position: relative;
  box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.25);
  // border-radius: 23px;
  @include max-media(768) {
    // top: 40%;
    min-width: 300px;
    min-height: 170px;
  }

  &__container {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
}

.photo {
  width: 100%;
  height: auto; // 這將確保圖片的高度自動調整以保持比例
  object-fit: cover; // 將保持圖片的長寬比並覆蓋容器
  // border-radius: 23px;
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
