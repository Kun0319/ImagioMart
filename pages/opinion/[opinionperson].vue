<script setup>
import { ref, computed, onMounted } from "vue";

import { useRoute } from "vue-router";

import { Scrollbar, Mousewheel } from "swiper/modules";
import RelatedOpinion from "./components/RelatedOpinion.vue";
// import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/scrollbar";

import { useGlobalStore } from "@/stores/global.js";

const globalStore = useGlobalStore();
const isChinese = computed(() => globalStore.language === "CN");
const route = useRoute();
const opinionData = ref(null);
definePageMeta({
  layout: "innerpage",
});

const slidesData = ref([
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMadxCh1Tnn6PFaFgdROjWbWAuZToIv5IqOZEKGGrqjEdwO68jNe3HTxG6p8lVmaCmhwlsviZSsYqk9pKySAF2AgmsOzNZKY333~JVe~9VF2YxcMAeZxJyl2dLFJ01MfpRVDkoDvtAxhkNTXB-U8bM3xNjXMu6KImnTgHpmKmJAvUwu7~aiLuiT8rKaxBUkvQgPxCKAb9YEuOLprqXYu6Ut4Emadrih0IDYVb18kZJuLKehuINo1UHQkVrH0bHlRp-YXsT0-EWVW8ERDTIQ4aw~oOuKoWYdpcIVDrO1gIuxpatgODdcNIC~hKwCgm2vkS7eQdEzKj3ndJBa7-jr8NA__",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMadxCh1Tnn6PFaFgdROjWbWAuZToIv5IqOZEKGGrqjEdwO68jNe3HTxG6p8lVmaCmhwlsviZSsYqk9pKySAF2AgmsOzNZKY333~JVe~9VF2YxcMAeZxJyl2dLFJ01MfpRVDkoDvtAxhkNTXB-U8bM3xNjXMu6KImnTgHpmKmJAvUwu7~aiLuiT8rKaxBUkvQgPxCKAb9YEuOLprqXYu6Ut4Emadrih0IDYVb18kZJuLKehuINo1UHQkVrH0bHlRp-YXsT0-EWVW8ERDTIQ4aw~oOuKoWYdpcIVDrO1gIuxpatgODdcNIC~hKwCgm2vkS7eQdEzKj3ndJBa7-jr8NA__",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMadxCh1Tnn6PFaFgdROjWbWAuZToIv5IqOZEKGGrqjEdwO68jNe3HTxG6p8lVmaCmhwlsviZSsYqk9pKySAF2AgmsOzNZKY333~JVe~9VF2YxcMAeZxJyl2dLFJ01MfpRVDkoDvtAxhkNTXB-U8bM3xNjXMu6KImnTgHpmKmJAvUwu7~aiLuiT8rKaxBUkvQgPxCKAb9YEuOLprqXYu6Ut4Emadrih0IDYVb18kZJuLKehuINo1UHQkVrH0bHlRp-YXsT0-EWVW8ERDTIQ4aw~oOuKoWYdpcIVDrO1gIuxpatgODdcNIC~hKwCgm2vkS7eQdEzKj3ndJBa7-jr8NA__",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMadxCh1Tnn6PFaFgdROjWbWAuZToIv5IqOZEKGGrqjEdwO68jNe3HTxG6p8lVmaCmhwlsviZSsYqk9pKySAF2AgmsOzNZKY333~JVe~9VF2YxcMAeZxJyl2dLFJ01MfpRVDkoDvtAxhkNTXB-U8bM3xNjXMu6KImnTgHpmKmJAvUwu7~aiLuiT8rKaxBUkvQgPxCKAb9YEuOLprqXYu6Ut4Emadrih0IDYVb18kZJuLKehuINo1UHQkVrH0bHlRp-YXsT0-EWVW8ERDTIQ4aw~oOuKoWYdpcIVDrO1gIuxpatgODdcNIC~hKwCgm2vkS7eQdEzKj3ndJBa7-jr8NA__",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMadxCh1Tnn6PFaFgdROjWbWAuZToIv5IqOZEKGGrqjEdwO68jNe3HTxG6p8lVmaCmhwlsviZSsYqk9pKySAF2AgmsOzNZKY333~JVe~9VF2YxcMAeZxJyl2dLFJ01MfpRVDkoDvtAxhkNTXB-U8bM3xNjXMu6KImnTgHpmKmJAvUwu7~aiLuiT8rKaxBUkvQgPxCKAb9YEuOLprqXYu6Ut4Emadrih0IDYVb18kZJuLKehuINo1UHQkVrH0bHlRp-YXsT0-EWVW8ERDTIQ4aw~oOuKoWYdpcIVDrO1gIuxpatgODdcNIC~hKwCgm2vkS7eQdEzKj3ndJBa7-jr8NA__",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMadxCh1Tnn6PFaFgdROjWbWAuZToIv5IqOZEKGGrqjEdwO68jNe3HTxG6p8lVmaCmhwlsviZSsYqk9pKySAF2AgmsOzNZKY333~JVe~9VF2YxcMAeZxJyl2dLFJ01MfpRVDkoDvtAxhkNTXB-U8bM3xNjXMu6KImnTgHpmKmJAvUwu7~aiLuiT8rKaxBUkvQgPxCKAb9YEuOLprqXYu6Ut4Emadrih0IDYVb18kZJuLKehuINo1UHQkVrH0bHlRp-YXsT0-EWVW8ERDTIQ4aw~oOuKoWYdpcIVDrO1gIuxpatgODdcNIC~hKwCgm2vkS7eQdEzKj3ndJBa7-jr8NA__",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
]);

const enTitleProcessed = route.params.opinionperson; // 假设路由参数名为 enTitle
// console.log(route.params.opinionperson);
const { data, error } = await useFetch(
  `https://iw-api.d-blueprint.com/api/opinions/${enTitleProcessed}`,
);
if (!error.value && data.value) {
  opinionData.value = data.value.data.info;
}
</script>

<template>
  <div class="rwd-wrap">
    <NuxtLayout
      :breadcrumbText="'Home &nbsp; / &nbsp; Opinion &nbsp; / &nbsp; Furniture'"
    >
      <div class="inner-wrap">
        <div class="flex flex-col items-center">
          <!-- <p class="text__designer">Industrial designer｜工業設計師</p> -->
          <p class="text__designer">
            {{ opinionData.subtitle }}
          </p>

          <img
            src="~/assets/images/opinioncontent.png"
            alt=""
            class="photo__people"
          />
          <!-- <p class="text__nameEn">Patrick Norguet</p>
          <p class="text__nameCn">派屈克．諾蓋</p>
          <p class="text__photoCn">影像：派屈克．諾蓋提供 ｜ 採訪：洪雅琪</p> -->
          <p class="text__nameEn">{{ opinionData.en_title }}</p>
          <p class="text__nameCn">{{ opinionData.title }}</p>
          <p class="text__photoCn text-center" v-html="opinionData.notes"></p>
          <!-- <div class="text__photoEn text-center">
            <p>Photo：Courtesy by Patrick Norguet</p>
            <p>Interview：Grace Hung</p>
          </div> -->
          <div class="text__icon">
            <i class="pi pi-heart mx-3"></i> <i class="pi pi-share-alt"></i>
          </div>
        </div>
        <div class="flex flex-col text__content">
          <!-- <p class="text__content__one">
            1969年生於法國都爾，在西班牙ESDi設計學院畢業後，他參與了兩大奢侈品牌
            Yves Saint-Laurent 和 Louis Vuitton
            的櫥窗設計項目，並藉此經歷成功奠基他對於品牌識別及展示型態的考究，更將其經驗運用在臨時建築或裝置上。2000年，派屈克因個人首件設計作品雛形「彩虹椅（Rainbow
            Chair）」與義大利設計教父Giulio
            Cappellini結緣，並迅速打開國際知名度。如今，合作對象遍及各產業的派屈克．諾蓋，已然是法國設計界的標誌人物，透過專業、天賦與熱情，他持續拓展設計師作為生活方式推動者的地位和責任。
          </p>
          <p class="text__content__one">
            自從在巴黎結束學程後，派屈克首個工作便是在 Yves Saint-Laurent 與
            Louis Vuitton
            集團負責活動相關視覺與空間布置。兩年後，他便決定開設個人設計工作室，而當時的社會風氣，恰好是媒體開始宣傳那世代新銳設計師的時間點，造就「設計」這個詞彙開始深植人們腦海，繼而滋養並啟發後來各行業公司的決策者，開響了群體「設計意識」的第一槍。對照今日，商人藉由設計師的專業來販售他們口中的現代性，因此派屈克認為，如今的設計早已失去本質，比起作為一門專業，它在公眾眼中更像是某種「風格」，並沒有理解問題或探詢根源。或許是經歷此現象，造就他從業來始終以非常精確的方式管理職業，透過極高的自我要求，創作出具有意義、誠實且公平的作品。
          </p>
          <p class="text__content__one">
            對他而言，好的設計更貼近歷久不衰。在過度消費的時代裡，設計的價值必須重新獲得整個生產與製造過程的信譽與尊嚴，並不僅是美觀的附屬品。因此，他會與團隊及客戶一起整合許多資訊，以提出滿足當前和未來需求的創意或產品。但是，這目標不單靠理性數據或市場調查便可實現，更須連結長久以來世人積累的文化、歷史和藝術，讓下一代年輕人明瞭，世界並不是從TikTok的誕生開始的，我們有幸生活在一個文化豐富的世界，歷史橫跨各大洲，這才是一切創作素材的起源與基礎。
          </p> -->
          <p
            class="text__content__one"
            v-html="opinionData.content[0].data?.content"
          ></p>
        </div>
        <div>
          <img src="~/assets/images/opinioncontent1.png" alt="" class="photo" />
          <p class="decorItems__text">Cappellini＿Rainbow Chair</p>
          <img src="~/assets/images/opinioncontent2.png" alt="" class="photo" />
          <p class="decorItems__text decorItems__text--photo">
            Flaminia＿LUX lamp
          </p>
          <p class="text__content text__content__one">
            品牌摯愛（Brand
            love）與參與過程，是派屈克創作之路上的兩大熱情。就他的經驗來說，團隊沒有策略，就沒理由非得創新。如有，他會花費許多時間來整理思緒，並保持創意的原始狀態，而不是在過程中疊加不必要的元素。他一針見血說到，如今的家具市場已經呈現飽和狀態，市面上充斥著許多相似、仿冒或追逐流行的產品，因此他更偏好品牌的獨特價值，致力於研究和設計獨有的物件家具。他也透漏自己經常以「作家」的角度審視作品，如同作家透過語言組織文本，設計師則善用專屬的語言體系，向大眾陳述一個故事，或是建構一幅畫面。總而言之，嚴謹的工作態度，讓他能將「對的產品」推向市場，正如前述所說——好的設計，是經得起時間考驗的設計。他相信一個品牌的成功，是立基於產品能夠賦予市場獨特性。
            對於「潮流」一詞抱持負面態度，派屈克認為前者與創作互為天秤兩端。潮流固然是個安全牌，卻受大眾審美標準所牽絆，而創作是冒險，有時甚至會犯錯，但最重要的是在學習過程中建立一套哲學。進一步說，「潮流」不等同「時尚」，時尚是基於社會文化與思想價值演變而來，是設計師以優雅符號記錄的歷史。因此，迎合潮流產生的快時尚、爭奪社群曝光度的網紅現象，只會造就時尚愈來愈不有趣。
          </p>
        </div>
        <div class="decorItems">
          <div class="col-span-6">
            <img
              src="../../assets/images/opinionDecorItems0.png"
              alt=""
              class="photo__decorItems"
            />
            <p class="decorItems__text__little">Zanotta＿DAN 2057</p>
          </div>
          <div class="col-span-6">
            <img
              src="../../assets/images/opinionDecorItems1.png"
              alt=""
              class="photo__decorItems"
            />
            <p class="decorItems__text__little">Natuzzi Italia＿NANÀ Chair</p>
          </div>
          <div class="col-span-6">
            <img
              src="../../assets/images/opinionDecorItems2.png"
              alt=""
              class="photo__decorItems"
            />
            <p class="decorItems__text__little">
              Kristalia_Degree＿Container Coffee Table
            </p>
          </div>
          <div class="col-span-6">
            <img
              src="../../assets/images/opinionDecorItems3.png"
              alt=""
              class="photo__decorItems"
            />
            <p class="decorItems__text__little">Lodes＿Jim Suspension Lamps</p>
          </div>
          <div class="text__content text__content__one col-span-12">
            <p class="text__content__one">
              承接著理性言論與批判，情感卻是派屈克獲得創造力的主要來源。因此，他對環境，尤其是自然環境相當敏感。可以的話，他甚至盡可能頻繁離開巴黎，轉而環遊世界或沉浸在大自然之中。他認為，只有大自然能觸發他在環境中找到自己，繼而為內心帶來平衡與寧靜，但這並不表示他是個生活步調緩慢的人，實則相反，他坦言自己相當喜歡速度感，速度就是能量，而這種能量使他更加專注且聚焦目標，卻不流於跋扈或忽視他人想法。始終對設計原則保有堅持的派屈克，在今年推出專屬的線上選物品牌
              STUDION，這是他與合作數十年的工匠伙伴們以小批量生產形式，展示特定作品的空間，內容不僅有小型家具，更包含眼鏡、紡織品、陶瓷、書籍等，對他而言，這就是另片承載著理想與熱情的創作樂土。
            </p>
          </div>
          <div class="col-span-6 h-full">
            <img
              src="../../assets/images/opinionDecorItems4.png"
              alt=""
              class="photo__decorItems"
            />
            <p class="decorItems__text__little">INBANI＿Heritage Collection</p>
          </div>
          <div class="col-span-6 h-full">
            <img
              src="../../assets/images/opinionDecorItems5.png"
              alt=""
              class="photo__decorItems"
            />
            <p class="decorItems__text__little">ZANAT＿SOVA Chair</p>
          </div>
          <div class="col-span-full">
            <img
              src="../../assets/images/opinionDecorItems6.png"
              alt=""
              class="w-full"
            />
            <p class="decorItems__text">La Manufacture＿ASTRA Table</p>
          </div>
        </div>
        <p v-if="isChinese" class="title">相關圖片</p>
        <p v-else class="title">PHOTO GALLERY</p>
        <client-Only>
          <Swiper
            :direction="'vertical'"
            :modules="[Scrollbar, Mousewheel]"
            :scrollbar="{ hide: false }"
            :mousewheel="true"
            :class="'swiper'"
            :slidesPerView="2.3"
            :spaceBetween="30"
          >
            <SwiperSlide>
              <div class="grid grid-cols-12 gap-8">
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery1.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery2.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery3.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery4.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="grid grid-cols-12 gap-8">
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery5.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery6.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery7.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery8.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="grid grid-cols-12 gap-8">
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery5.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery6.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery7.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
                <div class="col-span-3">
                  <img
                    src="~/assets/images/PhotoGallery8.png"
                    alt=""
                    class="photo__swiper"
                  />
                </div>
              </div>
            </SwiperSlide> </Swiper
        ></client-Only>
        <div class="text__content">
          <div class="designer">
            <p>Designer: <span>Baletic Arch</span></p>
            <p>Production date: <span>2023</span></p>
            <p>Location: <span>American</span></p>
          </div>
          <div class="introduce">
            <p class="introduce__one">Brand</p>
            <p class="introduce__two">Patrick Norguet</p>
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
        <!-- <p class="title">PHOTO GALLERY</p> -->

        <div class="md:block hidden">
          <RelatedOpinion />
        </div>
      </div>
      <div class="md:hidden">
        <StoryOpinonPagination :slidesData="slidesData">
          <template #title>
            <slot name="title">延伸閱讀</slot>
          </template>
        </StoryOpinonPagination>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  height: 35vw;
  margin-bottom: 15%;
  // padding-left: 2.5%;
  // padding-right: 1%;
  --swiper-scrollbar-sides-offset: 0%;

  @include max-media(768) {
    height: 150px;
  }
}

// 暫時
:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
  // margin-bottom: 5%;
}

.rwd-wrap {
  @include max-media(768) {
    margin-top: 15%;
  }
}

.photo {
  height: 100%;
  width: 100%;

  &__swiper {
    width: 13.18vw;
    height: 13.18vw;
    object-fit: cover;
  }

  &__people {
    width: 27.78vw;
    // height: 37.5vw;
    object-fit: contain;

    @include max-media(768) {
      min-width: 225px;
    }
  }

  &__decorItems {
    // height: 100%;
    width: 100%;
    max-height: 648px;
    max-width: 502px;
    aspect-ratio: 3/4;

    @include max-media(1024) {
      max-height: 648px;
    }
  }
}

.title {
  // font-size: 1.3125rem;
  font-size: 1rem;
  color: $text-color3;
  letter-spacing: 1.56px;
  // margin-top: 13.31%;
  margin-bottom: 7.287%;

  @include max-media(768) {
    font-size: 0.875rem;
  }
}

.text {
  &__designer {
    color: $text-color2;
    margin-bottom: 7.0428%;

    font-size: 0.75rem;

    // font-family: $font-Noto;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__nameEn {
    margin-top: 7.04287%;

    margin-bottom: 1%;
    font-size: 1.3125rem;

    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__nameCn {
    margin-bottom: 7.04287%;
    font-size: 1.3125rem;

    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__icon {
    margin-bottom: 7.0428%;
  }

  &__photoCn {
    font-size: 1rem;
    margin-bottom: 1.5846%;
    color: $text-color3;
    font-family: $font-Noto;
    line-height: 148%;

    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__photoEn {
    font-size: 1rem;
    margin-bottom: 7.0428%;
    font-family: $font-Noto;
    color: $text-color3;

    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__content {
    // max-width: 854px;
    padding-left: 12.2298%;
    padding-right: 12.2298%;

    &__one {
      font-size: 1rem;
      font-weight: 400;
      text-align: justify;
      margin-bottom: 5.0611%;
      line-height: 33.504px;
      font-family: $font-Noto;

      &:last-child {
        margin-bottom: 15.8161%;
      }
    }
  }
}

.decorItems {
  @apply grid grid-cols-12 gap-4 justify-items-center;

  &__text {
    font-size: 0.875rem;
    font-family: $font-Noto;
    color: $text-color3;
    margin-bottom: 11.7806%;
    // margin-bottom: 7.74375vw;
    letter-spacing: 0.867px;
    &--photo {
      margin-bottom: 10%;
    }
    &__little {
      @extend .decorItems__text;
      margin-bottom: 26.677%;
    }
  }
}

.designer {
  margin-top: 2.9363%;
  margin-bottom: 25.522%;
  font-family: $font-Noto;
  font-weight: 700;
  line-height: 29.5px;

  & span {
    color: $text-color2;
    font-weight: 500;
  }

  @include max-media(768) {
    font-size: 0.75rem;
  }
}

.introduce {
  border-top: 1px solid rgba(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0);
  padding-top: 6.36622%;
  padding-bottom: 6.36622%;
  color: $text-color3;
  font-family: $font-Noto;
  margin-bottom: 29.1443%;

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
}
</style>
