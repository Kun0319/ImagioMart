<script setup></script>
<template lang="">
  <nuxt-link to="/iwselect/1" class="col-span-6">
    <div class="product">
      <div class="photo__container">
        <img src="../../../assets/images/select1.jpeg" alt="" class="photo" />
        <div class="icon__container">
          <i class="pi pi-heart icon" style="color: white"></i>
        </div>
      </div>
      <div class="text">
        <p class="text__one__en">Tabouret Haut</p>
        <p class="text__one__zh">高腳圓凳</p>
        <div class="price">
          <p class="text__two">售價 NT$450</p>
          <p class="text__three">會員價 NT$300</p>
        </div>
        <button class="btn" @click.stop="addToCart">加入購物車</button>
      </div>
    </div>
  </nuxt-link>
</template>
<script></script>
<style lang="scss" scoped>
.product {
  @apply col-span-6 flex flex-col items-center;
  margin-bottom: 25.024%;
}

.photo {
  width: 16.2vw;
  height: 24.31vw;
  min-width: 154px;
  min-height: 231px;

  &__container {
    position: relative;
  }
}

.icon {
  font-size: 20px;

  @include max-media(768) {
    font-size: 20px;
  }

  &__container {
    position: absolute;
    right: 5%;
    top: 90%;

    @include max-media(768) {
      top: 85%;
    }
  }
}

.price {
  height: 50px;
}

.text {
  text-align: center;

  &__one {
    font-size: 1.125rem;
    line-height: 23.76px;
    margin-top: 16.1591%;
    margin-bottom: 20%;
    @include max-media(768) {
      font-size: 0.75rem;
    }

    &__en {
      @extend .text__one;
      margin-bottom: 5%;
    }

    &__zh {
      @extend .text__one;
      margin-top: 0;
    }
  }

  &__two {
    font-weight: 600;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0.816px;
    margin-bottom: 4px;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__three {
    color: #262525;
    font-size: 0.9375rem;
    line-height: 150%;
    letter-spacing: 0.765px;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }
}

.btn {
  background-color: white;
  border: 1px solid #00000050;
  font-size: 0.8125rem;
  font-size: clamp(7px, 1vw, 13px);
  letter-spacing: 0.663px;
  margin-top: 21.7526%;
  width: 9.32vw;
  height: 2.6vw;
  min-width: 88px;
  min-height: 25px;
  font-family: $font-NotoSerif;
}
</style>
