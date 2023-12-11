<script setup></script>
<template lang="">
  <div class="">
    <div class="">
      <p class="text__one">Scope｜129｜Brazil</p>
      <div class="text__two">
        <p>House Pokrinniemi, Hämeenlinna, Finland</p>
        <p>巴西里約熱內盧 RS公寓</p>
      </div>
      <p class="text__three">Studio Arthur Casas</p>
    </div>
    <div class="">
      <img src="~/assets/images/projectcontent1.png" alt="" class="w-full" />
      <p class="text__en">
        The RS Apartment, surrounded by a 360º view of the Ipanema beach, is a
        project that matches customer demand: a place where the owner family
        could go to spend some seasons and receive their friends in Rio de
        Janeiro. 520m² floor plan was fully adapted so that most of the rooms -
        five suites, the integrated living, dining and home area and the service
        area - could all be located around the perimeter of the apartment. As
        the entrance is placed in the central portion of the plant, the rooms
        are distributed in a way to fill the outline, thus being placed on the
        facade - which offers a privileged sight.
      </p>
      <p class="text__cn">
        坐擁360º 伊帕內瑪海灘（Ipanema
        Beach）景致的RS公寓因應業主的需求而設計：業主希望全家能在這裡歡渡假期，並接待里約熱內盧（Rio
        de
        Janeiro）的朋友。設計師善用520平方公尺樓地板面積中的每一寸，將入口置於空間中央，五間套房和起居、用餐與休憩聯合空間以及功能區圍繞著公寓分布，讓每個空間都位於邊緣，每一間都享有開闊的景觀。
      </p>
    </div>
    <div class="">
      <img src="~/assets/images/projectcontent2.png" alt="" class="w-full" />
      <p class="text__en">
        The RS Apartment, surrounded by a 360º view of the Ipanema beach, is a
        project that matches customer demand: a place where the owner family
        could go to spend some seasons and receive their friends in Rio de
        Janeiro. 520m² floor plan was fully adapted so that most of the rooms -
        five suites, the integrated living, dining and home area and the service
        area - could all be located around the perimeter of the apartment. As
        the entrance is placed in the central portion of the plant, the rooms
        are distributed in a way to fill the outline, thus being placed on the
        facade - which offers a privileged sight.
      </p>
      <p class="text__cn">
        坐擁360º 伊帕內瑪海灘（Ipanema
        Beach）景致的RS公寓因應業主的需求而設計：業主希望全家能在這裡歡渡假期，並接待里約熱內盧（Rio
        de
        Janeiro）的朋友。設計師善用520平方公尺樓地板面積中的每一寸，將入口置於空間中央，五間套房和起居、用餐與休憩聯合空間以及功能區圍繞著公寓分布，讓每個空間都位於邊緣，每一間都享有開闊的景觀。
      </p>
    </div>
    <div class="">
      <img
        src="~/assets/images/projectcontent3.png"
        alt=""
        class="w-full md:mb-16 mb-8"
      />
      <img src="~/assets/images/projectcontent4.png" alt="" class="w-full" />
      <p class="text__en">
        The RS Apartment, surrounded by a 360º view of the Ipanema beach, is a
        project that matches customer demand: a place where the owner family
        could go to spend some seasons and receive their friends in Rio de
        Janeiro. 520m² floor plan was fully adapted so that most of the rooms -
        five suites, the integrated living, dining and home area and the service
        area - could all be located around the perimeter of the apartment. As
        the entrance is placed in the central portion of the plant, the rooms
        are distributed in a way to fill the outline, thus being placed on the
        facade - which offers a privileged sight.
      </p>
      <p class="text__cn">
        坐擁360º 伊帕內瑪海灘（Ipanema
        Beach）景致的RS公寓因應業主的需求而設計：業主希望全家能在這裡歡渡假期，並接待里約熱內盧（Rio
        de
        Janeiro）的朋友。設計師善用520平方公尺樓地板面積中的每一寸，將入口置於空間中央，五間套房和起居、用餐與休憩聯合空間以及功能區圍繞著公寓分布，讓每個空間都位於邊緣，每一間都享有開闊的景觀。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  &__one {
    color: #999696;
    font-size: 0.875rem;
    font-family: $font-Noto;
  }

  &__two {
    margin-top: 2.428%;
    margin-bottom: 4.101%;
    // font-size: 1rem;
    font-size: 1.3125rem;
    letter-spacing: 0.51px;
  }

  &__three {
    color: #000000cc;
    font-size: 0.75rem;
    color: $text-color3;
    text-decoration: underline;
    font-family: $font-Noto;
    margin-bottom: 5.105%;
  }

  &__en {
    font-family: $font-Noto;
    margin-top: 13.222%;
    font-size: 0.8125rem;
    padding-left: 12.218%;
    padding-right: 12.218%;

    @include max-media(768) {
      margin-top: 40%;
      font-size: 0.625rem;
    }
  }

  &__cn {
    margin-top: 3.5171%;
    margin-bottom: 11.883%;
    font-size: 0.875rem;
    padding-left: 12.218%;
    padding-right: 12.218%;

    @include max-media(768) {
      margin-top: 13.28%;
      font-size: 0.625rem;
    }
  }
}
</style>
