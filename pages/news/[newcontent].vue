<script setup>
import { useRoute } from "vue-router";
definePageMeta({
  layout: "innerpage",
});
const nescontent = ref(null);
const route = useRoute();

// console.log(route.params.opinionperson);
const { data, error } = await useFetch(
  `https://iw-api.d-blueprint.com/api/reports/${route.params.newcontent}`,
);
if (!error.value && data.value) {
  nescontent.value = data.value.data.info;
  // console.log(data.value.data.info);
  // console.log(nescontent.value);
}
</script>
<template>
  <div class="rwd-wrap">
    <NuxtLayout
      :breadcrumbText="'Home &nbsp;/&nbsp; News &nbsp;/&nbsp; Furniture'"
      :showFilterMenu="true"
    >
      <div class="inner-wrap">
        <div class="flex items-center">
          <!-- <p class="title--text__one">Furniture｜Inside Stories｜issue 150</p> -->
          <p class="title--text__one">
            {{ nescontent.publish_date }}&nbsp; ｜&nbsp;
            {{ nescontent.category }}&nbsp; ｜&nbsp; {{ nescontent.issue_name }}
          </p>

          <i class="pi pi-heart mx-3 ml-auto"></i>
          <i class="pi pi-share-alt"></i>
        </div>
        <div class="title--text__two">
          <!-- <p>House Pokrinniemi, Hämeenlinna, Finland</p> -->
          <!-- <p>
            NO.1 義大利原裝傢俱品牌 NATUZZI 拉圖誌 歡慶來台 18 年 強勢進駐台南
          </p> -->
          <!-- <p class="title--text__three">文字．影像提供：SHANG XIA 上下</p> -->

          <p>{{ nescontent.en_title }}</p>
          <p>
            {{ nescontent.title }}
          </p>
        </div>
        <p class="title--text__three">{{ nescontent.subtitle }}</p>
        <img
          src="https://www.figma.com/file/Cl1dT31sCYUc7LwFrjXl9R/image/9e4e22f13b2809b9fd461144a0f374106e7f6969"
          alt=""
          class="w-full"
        />
        <p class="text__content">
          台灣 NO.1 義大利原裝傢俱領導品牌 NATUZZI 拉圖誌歡慶來台 18
          年，強勢進駐台南，打造 400
          坪全新概念店，觀察近年來高雄門市來訪消費者，有高達兩成以上顧客，都是來自於台南地區，台南當地缺乏單一進口傢俱品牌專賣店，精準看中台南頂級客層高消費力及獨到品味，NATUZZI
          拉圖誌進駐台南蛋黃新熱區 -
          東區商圈，並由義大利總部親自操刀設計，同步全球最新義式時尚品味，為台南貴客獻上
          400 坪最美傢俱購物空間，漫步於 NATUZZI
          拉圖誌台南旗艦店，宛如展開一場義大利藝術之旅。
        </p>
        <img src="~/assets/images/newcontent1.png" alt="" class="w-full" />
        <p class="text__content">
          NATUZZI 拉圖誌集團是義大利設計和製造工藝的典範，來自於義大利南部
          PUGLIA
          普利亞地區，台灣總經理表示：『台南旗艦店將南義地區自然中汲取的靈感，融匯到台南旗艦店整體氛圍設計中，廣闊藍色大海與
          PUGLIA
          普利亞大地的白色，交織出悠游自在的舒適愜意，為烘托品牌低調奢華時尚形象，從地磚、掛畫到傢俱配置等整體細節，皆由義大利總部設計團隊親手操刀，導入
          2023
          新奢華度假宅美學潮流。』此一最新概念店設計，全球目前僅有五家專賣店，完美演繹
          NATUZZI 讓自然融入家居生活，讓藝術在生活裡得以彰顯的獨特居家品味。
        </p>
        <img src="~/assets/images/newcontent2.png" alt="" class="w-full" />
        <p class="text__subtitle">全球唯五間NATUZZI拉圖誌旗艦店進駐台南</p>
        <p class="text__content no-margin-top">
          NATUZZI 拉圖誌深耕台灣市場 18
          年來，致力於將義大利最經典、最創新、與世界接軌的品味時尚傢俱帶入台灣市場，更致力於圓滿消費者追求夢想中的家居生活模式，NATUZZI
          拉圖誌台灣總經理顏貽騰表示：『NATUZZI
          拉圖誌將義大利生活方式帶進了全球客廳、餐廳、臥室……，而這一切，只為提供舒適和諧的居家環境』從
          2023
          米蘭家具展中窺見，將自然度假休閒感引入居家生活儼然成為未來家居設計趨勢，NATUZZI
          拉圖誌台南旗艦店率先將奢華度假宅美學帶入台灣，打造門店裝潢設計、商品陳列、採用義大利度假勝地PUGLIA建築風格，細微至每一片地磚、每一盞燈飾、大理石餐桌上每一件裝飾藝品，包括沙發、扶手椅、餐桌、單椅、床架、櫃組，皆從「義大利」原裝進口，讓台灣消費者可一站購足義大利原裝家居品味，同時在選購時有百位義大利設計團隊建議專業諮詢與售後服務，回到家享受極致舒適的家居生活、營造新義式時尚生活態度。
        </p>
        <img src="~/assets/images/newcontent3.png" alt="" class="w-full" />
        <p class="text__subtitle">大師經典雋永款與趨勢新作 各款沙發齊亮相</p>
        <p class="text__content no-margin-top">
          Natuzzi Italia 不僅擁有全球最具規模 120
          人的專業設計團隊，近年來更與多位國際設計名家合作，創造完美的義式生活氛圍，為了慶祝
          NATUZZ
          I台南旗艦店開幕，滿足台南地區偏好透天厝住宅搭配大尺寸沙發需求，特別引進由義大利現代極簡先驅
          - Mauro Lipparini 設計的 Melpot
          沙發，有著俐落的線條與超越時代的外型，兼具機能性和美學的平衡，符合現代設計與功能要求，同時有各種選配的沙發和座椅系列，該款沙發具有多種尺寸規格，也可與書架、咖啡桌和壁板等搭配。這樣的設計能充分利用空間、同時兼顧功能需求和用途多元化，是創新想像力與傳統工藝的結晶。
          另一款Philo三人座 +
          加大三人三電動沙發；則揉合現代高雅的設計與極致舒適性，少見的騰空底座電動功能，兼顧了美學與實用機能性。重視品味的南科新貴族群則獻上全球知名的義大利知名建築師與設計師
          Claudio Bellini 操刀的
          Pablo，將熱情大方的地中海文化特質轉化為多功能座椅系統與及舒適迎人設計，椅背可調整不同的高度，在幾何現代美學與舒適體感之間毫不妥協。長年暢銷
          TOP3 Galaxy
          沙發在簡約外表下隱藏了卓越舒適感，模組化設計可以根據居家空間量身打造，滿足各種空間與生活需求，輕鬆享受極致的乘坐體驗。
        </p>
        <img src="~/assets/images/newcontent4.png" alt="" class="w-full" />
        <p class="text__subtitle">
          百人設計團隊與多位國際設計名家 創造極致義式生活品味
        </p>
        <p class="text__content no-margin-top">
          NATUZZI 拉圖誌台南概念店，以義大利 PUGLIA 普利亞度假勝地元素 –
          圓弧拱門，牽起各區關係，透過拱門帶來宏偉和美麗的曲線設計，穿透在不同空間的呈現，注入豐沛採光，帶起流動空間感。拱門是
          PUGLIA
          千年歷史的映證，堅固的石門堅守在誕生之地，默默地見證著一切，從曾經到今朝以至未來，彷彿讓時空停滯，亦如
          NATUZZI 設計經典永垂不朽。刻意以冷調霧米灰質樸色調傳遞 PUGLIA
          普利亞「寧靜的詩意」氛圍，淨白的空間中，搭配俐落線條極簡約燈飾、壁掛時鐘；造型圓潤柔美的花瓶器皿，細膩展演
          NATUZZI
          拉圖誌的優雅，彰顯設計與手工藝之美，居宅被賦予了全新的表情，NATUZZI
          台南旗艦店【新奢華度假宅美學】，值得親身走訪。
        </p>
        <img src="~/assets/images/newcontent5.png" alt="" class="w-full" />
        <div class="introduce__wrap">
          <div class="introduce">
            <p class="introduce__one">Brand</p>
            <p class="introduce__two">EAU DE TOILETTE</p>
            <p class="introduce__three">
              The location of this private house is unique: even though the site
              is just a couple of kilometers away from Hämeenlinna city center,
              the small cape surrounded by a lake is completely in its own
              privacy. There are long pastoral views over the lake to fields and
              forests. As the area’s landscape is valuable, the city’s .
            </p>
            <div class="grid grid-cols-12">
              <div class="md:col-span-3 col-span-12 flex gap-3">
                <p class="introduce__four">Kenny molee</p>
                <img src="@/assets/icon/fb.svg" alt="Facebook" class="" />
                <img src="@/assets/icon/ig.svg" alt="Instagram" class="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery inner-wrap">
        <!-- <p class="col-span-12 gallery__title">RELATED NEWS</p> -->
        <p class="col-span-12 gallery__title">其他新訊</p>
        <div class="col-span-4 justify-self-start">
          <img
            src="~/assets/images/RelatedProject2.png"
            alt=""
            class="gallery__img"
          />
          <p class="md:hidden gallery__one">2023.10.01</p>
          <!-- <p class="gallery__two">MORQ Room of Family Wan...</p> -->
          <p class="gallery__three">墨西哥米卻肯｜拉彼達之家</p>
        </div>
        <div class="col-span-4 justify-self-end">
          <img
            src="~/assets/images/RelatedProject2.png"
            alt=""
            class="gallery__img"
          />
          <p class="md:hidden gallery__one">2023.10.01</p>
          <!-- <p class="gallery__two">MORQ Room of Family Wan...</p> -->
          <p class="gallery__three">墨西哥米卻肯｜拉彼達之家</p>
        </div>
        <div class="col-span-4 justify-self-end">
          <img
            src="~/assets/images/RelatedProject2.png"
            alt=""
            class="gallery__img"
          />
          <p class="md:hidden gallery__one">2023.10.01</p>
          <!-- <p class="gallery__two">MORQ Room of Family Wan...</p> -->
          <p class="gallery__three">墨西哥米卻肯｜拉彼達之家</p>
        </div>
        <div class="col-span-12 flex justify-around gallery__arrow">
          <p class="gallery__older"></p>
          <p class="gallery__newer"></p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
  // margin-bottom: 5%;
}
// 暫時
.rwd-wrap {
  @include max-media(768) {
    margin-top: 15%;
  }
}
.inner-wrap {
  @include max-media(768) {
    padding-left: 0;
    padding-right: 0;
  }
}

.text {
  padding-left: 12.2298%;
  padding-right: 12.2298%;

  &__content {
    @extend .text;
    font-family: $font-Noto;
    margin-bottom: 15.23%;
    font-size: 1rem;
    line-height: 33.504px;
    margin-top: 15.23%;
    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__subtitle {
    @extend .text;
    margin-top: 15.23%;
    margin-bottom: 1.8443%;
    font-size: 1.3125rem;
    line-height: 118%;
    @include max-media(768) {
      font-size: 1rem;
    }
  }
}

.no-margin-top {
  margin-top: 0;
}

.introduce {
  border-top: 1px solid rgba(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0);
  padding-top: 6.36622%;
  padding-bottom: 6.36622%;
  color: $text-color3;
  font-family: $font-Noto;
  margin-bottom: 21.9476%;
  margin-top: 23.423%;

  @include max-media(768) {
    padding-top: 15.1%;
    padding-bottom: 15.6%;
    margin-bottom: 67.7%;
  }

  &__one {
    margin-bottom: 1.6%;
    letter-spacing: 0.36px;
    font-weight: 400;

    @include max-media(768) {
      margin-bottom: 4.899%;
    }
  }

  &__two {
    font-size: 1rem;
    margin-bottom: 3.099%;
    line-height: 20.94px;
    font-weight: 700;
    color: black;
    font-family: $font-NotoSerif;

    @include max-media(768) {
      margin-bottom: 11.25%;
    }
  }

  &__three {
    font-size: 0.8125rem;
    letter-spacing: 0.51px;
    line-height: 24.96px;
    margin-bottom: 4.1045%;

    @include max-media(768) {
      margin-bottom: 14.61%;
    }
  }

  &__four {
    font-size: 0.8125rem;
    padding-right: 5%;
  }

  &__wrap {
    padding-left: 12.2298%;
    padding-right: 12.2298%;
  }
}

.gallery {
  @apply grid grid-cols-12 xl:gap-12 gap-4 items-center;
  @include max-media(768) {
    margin-bottom: 37.6607%;
    align-items: start;
  }

  &__img {
    width: 100%;
    height: 100%;
    max-width: 463px;
    object-fit: cover;
  }

  &__title {
    font-size: 1rem;
    // margin-bottom: 6%;
    // font-family: $font-Noto;
  }

  &__one {
    font-size: 0.5rem;
    margin-bottom: 1.6%;
    color: $text-color3;
    font-family: $font-Noto;
  }

  &__two {
    font-size: 1rem;
    margin-bottom: 1.6%;
    margin-top: 4.3243%;
    font-family: $font-Noto;
    color: $text-color3;

    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__three {
    font-size: 1.125rem;
    // font-size: 1.3125rem;
    letter-spacing: 0.51px;
    line-height: 24.96px;
    margin-top: 2.2889%;
    margin-bottom: 5.1941%;
    color: $text-color3;

    @include max-media(768) {
      font-size: 1rem;
    }
  }

  &__older {
    font-size: 0.6875rem;
    width: 100%;
    align-self: center;

    &::before {
      content: "";
      display: inline-block;
      width: 30px;
      height: 0.75rem;
      background-image: url("assets/icon/prev.svg");
      background-size: cover;
      margin-right: 8px;
    }
  }

  &__newer {
    font-size: 0.6875rem;
    width: 100%;
    text-align: right;

    &::after {
      content: "";
      display: inline-block;
      width: 30px;
      height: 0.75rem;
      background-image: url("/assets/icon/next.svg");
      background-size: cover;
      margin-left: 8px;
    }
  }
  &__arrow {
    margin-bottom: 28.9638%;
  }
}
</style>
