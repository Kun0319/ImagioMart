<script setup></script>
<template lang="">
  <div class="load">
    <button class="load__btn">LOAD MORE</button>
    <div class="load__down">
      <img src="~/assets/icon/down.svg" alt="" />
    </div>

    <img
      src="../../../assets/images/advertise.svg"
      alt=""
      class="w-full md:hidden block load__advertise"
    />
  </div>
</template>
<style lang="scss" scoped>
.load {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  align-self: flex-start;
  margin-top: 9.2%;
  margin-bottom: 24.672%;

  &__btn {
    width: 127px;
    height: 45px;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    background-color: white;
    // font-family: $font-NotoSerif;
  }

  &__down {
    margin-top: 24.5%;
    @include max-media(768) {
      margin-bottom: 35.69%;
      margin-top: 2.5%;
    }
  }

  &__advertise {
    margin-bottom: 27.96%;
  }
}
</style>
