<script setup></script>

<template>
  <div class="mb-2 line">
    <div class="mb-2">
      <p>Home &nbsp; / &nbsp; Issue</p>
    </div>
  </div>
  <div class="line__icon flex justify-end mt-4">
    <!-- <img src="../assets/icon/i_heart 5.png" alt="" class="mx-3" />
        <img src="../assets/icon/share.png" alt="" class="" /> -->
    <i class="pi pi-heart mx-3"></i>
    <i class="pi pi-share-alt"></i>
  </div>
</template>

<style lang="scss" scoped>
.line {
  margin-top: 5.56%;
  p {
    font-size: 0.75rem;
  }
  &__icon {
    margin-bottom: 2.75%;
    @include max-media(769) {
      display: none;
    }
  }
}
</style>
