<script setup>
const showIcon = ref(true);

const handleIframeClick = () => {
  showIcon.value = !showIcon.value;
};
</script>
<template lang="">
  <div class="LittleAdvertise flex justify-center" @click="handleIframeClick">
    <div class="youtube-container">
      <!-- <img src="../assets/images/LittleAdvertise.svg" alt="" class="photo" /> -->
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-Jros0sg3CM?si=zGZH85-dgabFIwHf"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="photo"
        @click="handleIframeClick"
      ></iframe>

      <!-- <div class="overlay"></div> -->
    </div>
    <img
      src="../assets/icon/play.svg"
      alt=""
      class="LittleAdvertise__icon"
      v-if="showIcon"
    />
  </div>
</template>

<style lang="scss" scoped>
.LittleAdvertise {
  margin-bottom: 20%;
  position: relative;

  &__icon {
    position: absolute;
    top: 35%;
  }
}
.photo {
  width: 100%;
  width: 17.94vw;
  height: 12.15vw;
  // max-width: 310px;
  aspect-ratio: 16/9;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}
.youtube-container {
  position: relative;
}
</style>
