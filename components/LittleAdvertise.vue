<script setup></script>
<template lang="">
  <div class="LittleAdvertise flex justify-center">
    <img src="../assets/images/LittleAdvertise.svg" alt="" class="photo" />
    <img src="../assets/icon/play.svg" alt="" class="LittleAdvertise__icon" />
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
  max-width: 310px;
}
</style>
