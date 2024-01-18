<script setup></script>
<template lang="">
  <div class="flex items-center">
    <p class="title--text__one">設計椅款｜森/CASA</p>
    <i class="pi pi-shopping-cart ml-auto"></i>
    <i class="pi pi-heart mx-3"></i>
    <i class="pi pi-share-alt"></i>
  </div>
  <div class="title--text__two">
    <p>House Pokrinniemi, Hämeenlinna, Finland</p>
    <div class="flex">
      <p>
        丹麥巨匠 Hans J. Wegner 的最初設計　Shell Chair 貝殼椅 60 週年限定版
      </p>
      <p class="ml-auto title--text__memberpic">會員價 NT$300</p>
    </div>
  </div>
  <div class="flex">
    <p class="title--text__three">Hans J. Wegner 卓越美學的證明</p>
    <p class="ml-auto title--text__pic">售價 NT$450</p>
  </div>
  <div class="">
    <img src="~/assets/images/projectcontent1.png" alt="" class="w-full" />
  </div>
  <div class="text-wrap">
    <p class="text__cn">
      創立 30
      餘年的晶點流行燈飾，為進口水晶燈的代名詞。作為業界代理國際頂級品牌燈飾的領航者，晶點秉持品質與美學，持續為台灣照明空間挹注新活水。燈飾品質始終是晶點選擇代理品牌的關鍵主因，源於對細節的苛求，目前旗下主要代理品牌有捷克
      Preciosa、 荷蘭 Brand van Egmond、美國 Schonbek、義大利 Italamp、義大利
      Terzani 等水晶燈專業製造商及歐洲高端燈飾品牌。
    </p>
    <div class="">
      <img src="~/assets/images/projectcontent2.png" alt="" class="w-full" />
      <p class="text__cn">
        源於深植北歐文化那份舒服愜意感，丹麥人享受當下、重視儀式感，即是近年所稱的
        Hygge，而 Umage
        所傳遞的設計理念與精神正是如此，該品牌無論燈飾或家具，都保有溫潤調性。除此之外，Umage
        希望人人都能享受美好簡約的設計，因此價格上也更易輕鬆入手。值得一提的是，所有系列商品皆簡化繁冗包裝，為地球環保盡一份心力。疫情之後，人們更重視彼此之間的陪伴，也更把握當下共處時光，藉此，晶點透過引進
        Umage 品牌，將令人嚮往的北歐生活態度輕柔傳遞到台灣居家環境。
      </p>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6">
        <img
          src="~/assets/images/projectcontent7-1.png"
          alt=""
          class="w-full mb-4"
        />
      </div>
      <div class="col-span-6">
        <img
          src="~/assets/images/projectcontent7-2.png"
          alt=""
          class="w-full"
        />
      </div>
    </div>
    <p class="text__cn">
      坐擁360º 伊帕內瑪海灘（Ipanema
      Beach）景致的RS公寓因應業主的需求而設計：業主希望全家能在這裡歡渡假期，並接待里約熱內盧（Rio
      de
      Janeiro）的朋友。設計師善用520平方公尺樓地板面積中的每一寸，將入口置於空間中央，五間套房和起居、用餐與休憩聯合空間以及功能區圍繞著公寓分布，讓每個空間都位於邊緣，每一間都享有開闊的景觀。
    </p>
    <div class="container">
      <img src="~/assets/images/select.png" alt="" class="w-full" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pi {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  @include max-media(768) {
    font-size: 14px;
  }
}
.container {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 13.8726%;
  margin-bottom: 13.5229%;
}
.text {
  &-wrap {
    padding-left: 12.218%;
    padding-right: 12.218%;
  }
  &__en {
    font-family: $font-Noto;
    margin-top: 11.825%;
    font-size: 1rem;
    // padding-left: 12.218%;
    // padding-right: 12.218%;

    @include max-media(768) {
      margin-top: 40%;
      font-size: 0.75rem;
    }
  }

  &__cn {
    margin-top: 3.5171%;
    margin-bottom: 11.825%;
    font-size: 1rem;
    font-family: $font-Noto;
    // padding-left: 12.218%;
    // padding-right: 12.218%;

    @include max-media(768) {
      margin-top: 13.28%;
      font-size: 0.75rem;
    }
  }
}
.title--text {
  &__memberpic {
    font-size: 0.875rem;
    font-size: clamp(0.75rem, 1vw, 0.875rem);
    letter-spacing: 0.714px;
  }
  &__pic {
    font-size: 1.1875rem;
    font-size: clamp(0.875rem, 1.5vw, 1.1875rem);
    letter-spacing: 0.969px;
  }
}
</style>
