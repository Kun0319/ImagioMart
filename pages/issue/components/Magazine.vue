<script setup>
import { useRoute } from "vue-router";
import pic from "~/assets/images/Magazine.svg";

const props = defineProps({
  magazine: {
    type: Object,
    required: true,
  },
  // imageSrc: {
  //   type: String,
  //   default: pic,
  // },
  // issuePeriod: {
  //   type: String,
  //   default: "第151期 2023 07&08月",
  // },
  // price: {
  //   type: String,
  //   default: "NT$300",
  // },

  // imageWidth: {
  //   type: String,
  //   default: "100%", // 默认宽度
  // },
  // imageHeight: {
  //   String,
  //   default: "auto", // 默认高度
  // },
});

// const route = useRoute();
// const magazineName = route.params.Magazine;
</script>

<template>
  <div class="grid col-span-6 justify-center">
    <div class="flex flex-col items-center">
      <nuxt-link :to="`/issue/${magazine.id}`" class="image-container">
        <img :src="pic" alt="" class="max-w-full object-cover" />

        <!-- <div v-if="props.magazine">NT${{ props.magazine.price }}</div> -->
        <!-- <img
          :src="props.magazine.imageUrl.link"
          alt=""
          class="max-w-full object-cover"
        /> -->
      </nuxt-link>

      <!-- <p class="info__month">{{ issuePeriod }}</p>
      <p class="info__price">{{ price }}</p> -->
      <!-- api獲取-->
      <p class="info__month">{{ props.magazine.subtitle }}</p>
      <p class="info__price">NT${{ props.magazine.price }}</p>
      <p v-if="props.magazine.member_price" class="info__memberprice">
        NT${{ props.magazine.member_price }}
      </p>
      <button class="line-height-4 info__shopcart text-black-alpha-90">
        ADD TO CART
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  &__month {
    font-size: 0.875rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @include max-media(768) {
      font-size: 0.625rem;
    }
  }
  &__price {
    @include max-media(768) {
      font-size: 0.4375rem;
    }
  }
  &__memberprice {
    color: #262525;
    font-size: 0.9375rem;
    line-height: 150%;
    letter-spacing: 0.765px;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }
}

.image-container {
  display: flex;
  justify-content: center;
}

.grid {
  margin-top: 20.67%;
}

a > img {
  opacity: 1;
  transition: all 0.6s;
}

a > img:hover {
  opacity: 0.5;
}

.special-style img {
  opacity: 0.2;
}
</style>
