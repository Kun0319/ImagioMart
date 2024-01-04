<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useGlobalStore } from "@/stores/global.js";

const globalStore = useGlobalStore();
const isChinese = computed(() => globalStore.language === "CN");
</script>
<template>
  <div class="title">
    <p v-if="isChinese">延伸閱讀</p>
    <p v-else>RELATED PROJECT</p>
  </div>
  <swiper
    ref="mySwiper"
    :slides-per-view="1"
    :navigation="true"
    :pagination="{ clickable: true }"
    :modules="[Pagination, Navigation]"
    class="myswiper"
  >
    <swiper-slide>
      <div class="flex flex-col items-center">
        <div class="LittleAdvertise flex flex-col justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/1e1c/cca5/2ea41bf30b298a2525f69e048ff3985e?Expires=1703462400&Signature=F9kU9JTXWB4c0p9Lv0HeKjUNQ7TU8Ka2Rc6MD4KKEOOXvz1ezuGw5hwGfuK-Zfl~A8jVEp1dQTTJLoVVuxpT9nzDBygRJyt9YZdeB2024DEmmZrBB7LqsD7ZjDVRYqVXRD4-VESv12WejV0QLjbpV2df1-NG7UC3i1J55IQwV90HP66jmRjC4LBPV4Zd9lCfaaKd0XFsZc7Vz-VsrqmOSMlBKongriSZ3t5-Rx1uHobERewuUFw8s6IC5WlPM2D3cvQS~t8YnSQbl-33thn00RUWEJIlE~OVvdXpibVRVm959Y9GHNwQHierWb7OQwPuhYz-D6vk7GvFyqzGH-sc4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo"
          />
          <p class="text__one">天沐設計事業有限公司</p>
          <p class="text__two">Huang's House, Taichung</p>
          <p class="text__three">台中黃宅</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex flex-col items-center">
        <div class="LittleAdvertise flex flex-col justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/1e1c/cca5/2ea41bf30b298a2525f69e048ff3985e?Expires=1703462400&Signature=F9kU9JTXWB4c0p9Lv0HeKjUNQ7TU8Ka2Rc6MD4KKEOOXvz1ezuGw5hwGfuK-Zfl~A8jVEp1dQTTJLoVVuxpT9nzDBygRJyt9YZdeB2024DEmmZrBB7LqsD7ZjDVRYqVXRD4-VESv12WejV0QLjbpV2df1-NG7UC3i1J55IQwV90HP66jmRjC4LBPV4Zd9lCfaaKd0XFsZc7Vz-VsrqmOSMlBKongriSZ3t5-Rx1uHobERewuUFw8s6IC5WlPM2D3cvQS~t8YnSQbl-33thn00RUWEJIlE~OVvdXpibVRVm959Y9GHNwQHierWb7OQwPuhYz-D6vk7GvFyqzGH-sc4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo"
          />
          <p class="text__one">天沐設計事業有限公司</p>
          <p class="text__two">Huang's House, Taichung</p>
          <p class="text__three">台中黃宅</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex flex-col items-center">
        <div class="LittleAdvertise flex flex-col">
          <img
            src="https://s3-alpha-sig.figma.com/img/1e1c/cca5/2ea41bf30b298a2525f69e048ff3985e?Expires=1703462400&Signature=F9kU9JTXWB4c0p9Lv0HeKjUNQ7TU8Ka2Rc6MD4KKEOOXvz1ezuGw5hwGfuK-Zfl~A8jVEp1dQTTJLoVVuxpT9nzDBygRJyt9YZdeB2024DEmmZrBB7LqsD7ZjDVRYqVXRD4-VESv12WejV0QLjbpV2df1-NG7UC3i1J55IQwV90HP66jmRjC4LBPV4Zd9lCfaaKd0XFsZc7Vz-VsrqmOSMlBKongriSZ3t5-Rx1uHobERewuUFw8s6IC5WlPM2D3cvQS~t8YnSQbl-33thn00RUWEJIlE~OVvdXpibVRVm959Y9GHNwQHierWb7OQwPuhYz-D6vk7GvFyqzGH-sc4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo"
          />
          <p class="text__one">天沐設計事業有限公司</p>
          <p class="text__two">Huang's House, Taichung</p>
          <p class="text__three">台中黃宅</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex flex-col items-center">
        <div class="LittleAdvertise flex flex-col">
          <img
            src="https://s3-alpha-sig.figma.com/img/1e1c/cca5/2ea41bf30b298a2525f69e048ff3985e?Expires=1703462400&Signature=F9kU9JTXWB4c0p9Lv0HeKjUNQ7TU8Ka2Rc6MD4KKEOOXvz1ezuGw5hwGfuK-Zfl~A8jVEp1dQTTJLoVVuxpT9nzDBygRJyt9YZdeB2024DEmmZrBB7LqsD7ZjDVRYqVXRD4-VESv12WejV0QLjbpV2df1-NG7UC3i1J55IQwV90HP66jmRjC4LBPV4Zd9lCfaaKd0XFsZc7Vz-VsrqmOSMlBKongriSZ3t5-Rx1uHobERewuUFw8s6IC5WlPM2D3cvQS~t8YnSQbl-33thn00RUWEJIlE~OVvdXpibVRVm959Y9GHNwQHierWb7OQwPuhYz-D6vk7GvFyqzGH-sc4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo"
          />
          <p class="text__one">天沐設計事業有限公司</p>
          <p class="text__two">Huang's House, Taichung</p>
          <p class="text__three">台中黃宅</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.LittleAdvertise {
  margin-bottom: 50px;
  align-items: flex-start;
  text-align: left;
  // position: relative;

  &__icon {
    // background-color: black;
    position: absolute;
    top: 40%;
  }
}

.PaginationAdvertise {
  margin-bottom: 1%;
}

.title {
  font-family: $font-Noto;
  font-size: 1rem;
  margin-left: 15%;

  @include max-media(575) {
    margin-left: 10%;
  }

  @include max-media(480) {
    margin-left: 0;
  }
}

.photo {
  display: block;
  width: 100%;
  //   height: auto;
  max-height: 175px;
  max-width: 480px;

  @include max-media(768) {
    max-width: 375px;
  }

  @include max-media(575) {
    max-width: 297px;
    max-height: 175px;
  }

  @include max-media(375) {
    max-width: 250px;
  }
}

.myswiper {
  --swiper-navigation-color: black;
  --swiper-navigation-size: 10px;
  --swiper-navigation-top-offset: 40%;

  @include max-media(768) {
    --swiper-navigation-sides-offset: 15%;
  }

  @include max-media(575) {
    --swiper-navigation-sides-offset: 10%;
  }

  @include max-media(480) {
    --swiper-navigation-sides-offset: 0px;
  }
}

.text {
  color: $text-color3;
  font-size: 1rem;

  &__one {
    font-size: 0.625rem;
    margin-bottom: 3.5%;
    font-family: $font-Noto;
  }

  &__two {
    margin-bottom: 2%;
  }

  &__three {
  }
}
</style>
