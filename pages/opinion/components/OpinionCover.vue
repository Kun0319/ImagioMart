<script setup></script>
<template>
  <div class="no-padding">
    <img src="~/assets/images/opinion.png" alt="" class="full-width" />
  </div>
</template>

<style lang="scss" scoped>
.no-padding {
  width: 100vw;
  position: relative;
  left: -10.2%;
}

.full-width {
  width: 100%;
  height: 16.2%;
  margin-top: -7px;
  // padding-left: -8.45%;
  // padding-right: -8.45%;
  @include max-media(768) {
    margin-top: 15px;
  }
}
</style>
