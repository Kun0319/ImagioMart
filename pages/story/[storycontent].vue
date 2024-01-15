<script setup>
import StoryRelatedProject from "./components/StoryRelatedProject.vue";
import StoryNavigation from "./components/StoryNavigation.vue";
import pic from "~/assets/images/projectcontent6.png";
definePageMeta({
  layout: "innerpage",
});
const slidesData = ref([
  {
    imageUrl: pic,
    company: "天沐設計事業有限公司",
    projectName: "Patrick Norguet",
    projectLocation: "台中黃宅",
  },
  {
    imageUrl: pic,
    company: "天沐設計事業有限公司",
    projectName: "Huang's House, Shenzhen, Chinat",
    projectLocation: "中國深圳黃宅",
  },
  {
    imageUrl: pic,
    company: "天沐設計事業有限公司",
    projectName: "Blue Whale's Villa, New Taipei",
    projectLocation: "藍鯨 Villa",
  },
]);
</script>
<template>
  <div class="rwd-wrap">
    <NuxtLayout
      :breadcrumbText="'Home &nbsp; / &nbsp; Story &nbsp; / &nbsp; Furniture'"
    >
      <div class="inner-wrap">
        <ImageGrid>
          <template v-slot:title>
            <div class="slot-wrapper">
              <div class="flex items-center">
                <p class="title--text__one">Scope｜129｜Brazil</p>
                <i class="pi pi-heart mx-3 ml-auto"></i>
                <i class="pi pi-share-alt"></i>
              </div>
              <div class="title--text__two">
                <p>House Pokrinniemi, Hämeenlinna, Finland</p>
                <p>芬蘭海門林納　雪地之家</p>
              </div>
              <p class="title--text__three">文字．影像提供：SHANG XIA 上下</p>
              <div class="cover__container">
                <img
                  src="~/assets/images/projectcontent1.png"
                  alt=""
                  class="w-full"
                />
              </div></div
          ></template>
          <template v-slot:image1>
            <!-- <div class="col-span-12">
              <img
                class="photo"
                src="https://s3-alpha-sig.figma.com/img/515c/1494/15d88ebd44350053cdb8065016089ddd?Expires=1703462400&Signature=Ptre4dzsRwLKO~bsokixbpKH5K-sUKTBkQWqnoB5AiQlMy0rF-C0LS~8AfHzkXdSOsyYWu3Opfzia7lkiRFlmqJgftgTfTasasDXpAH9epmZUzHTlNkPL5BfzFB2VUPciqLsnNp57BhrMKF~lm9GkXV3GhP6q84vRB-6hBZMMfi1EzLVLbWnqpHJPMOx~coQxgdPVhmqt1ZPQORKgfjHZb2rJsCmAxbhfRdvoH0Tv5031OZaxeqYgpP8IIYr2m5gXKUhO-anhTSi~swjPA4FoP19nMeQwmcJUuzYNJS~KsIrxnyJUIKj9G4B8T-xb6XK~4S0s74eaU4fC1FUIJJlfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div> -->
          </template>
          <template v-slot:image2>
            <div class="col-span-12 hidden">
              <img
                class="photo"
                src="~/assets/images/projectcontent6.png"
                alt=""
              />
            </div>
          </template>
          <template v-slot:image3>
            <div class="col-span-6">
              <img
                class="photo"
                src="~/assets/images/projectcontent7-1.png"
                alt=""
              />
            </div>
            <div class="col-span-6">
              <img
                class="photo"
                src="~/assets/images/projectcontent7-2.png"
                alt=""
              />
            </div>
          </template>
          <template v-slot:image4>
            <!-- <div class="col-span-12">
              <img
                class="photo"
                src="https://s3-alpha-sig.figma.com/img/4401/048c/a425d03b615c980d9833fea929b1537a?Expires=1703462400&Signature=I6gt1LwwvAqjrKvcLAWAU4vSKrXlisctlPJYq~MXN05ZVINbCo~UsM26l7ZIHlI5x-OW0CmJdambg-FIUmLhtm6TcEI3cErswIBes4pcsO93As5imXhTqtPpiA7cOoS8vMbdA68NDjkEi~p0thkfLOl1ISu6Ssl1SWhVYdW9wvNmZXudzU~HiKyvSJSt400VFEEolP-oPUkH-4aZLAi0lS3oRf1FU9VC7T296CDCefLkxbTVgr1JNzk8OZgPXo5xnQBiFC1QEu85SGRd5eeunBaBWMpml97o7ewAhYv0OGwW6K~9T~DAugcXYnNKvNZ714yEhuriKJnrX8-p1JMQ9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div> -->
          </template>
        </ImageGrid>
        <div class="text__wrap">
          <div class="text text__en">
            <p>
              The location of this private house is unique: even though the site
              is just a couple of kilometers away from Hämeenlinna city center,
              the small cape surrounded by a lake is completely in its own
              privacy. There are long pastoral views over the lake to fields and
              forests. As the area’s landscape is valuable, the city’s master
              plan set tight regulations to new buildings. The new building was
              to be placed on the footprint of an old villa that was demolished
              because of its bad condition. The massing, roof shape, height, and
              façade materials needed to be in harmony with the surrounding old
              buildings.<br /><br />
              The location of this private house is unique: even though the site
              is just a couple of kilometers away from Hämeenlinna city center,
              the small cape surrounded by a lake is completely in its own
              privacy. There are long pastoral views over the lake to fields and
              forests. As the area’s landscape is valuable, the city’s master
              plan set tight regulations to new buildings. The new building was
              to be placed on the footprint of an old villa that was demolished
              because of its bad condition. The massing, roof shape, height, and
              façade materials needed to be in harmony with the surrounding old
              buildings.
            </p>
          </div>
          <div class="text text__cn">
            <p>
              創立 30
              餘年的晶點流行燈飾，為進口水晶燈的代名詞。作為業界代理國際頂級品牌燈飾的領航者，晶點秉持品質與美學，持續為台灣照明空間挹注新活水。燈飾品質始終是晶點選擇代理品牌的關鍵主因，源於對細節的苛求，目前旗下主要代理品牌有捷克
              Preciosa、 荷蘭 Brand van Egmond、美國 Schonbek、義大利
              Italamp、義大利 Terzani 等水晶燈專業製造商及歐洲高端燈飾品牌。<br /><br />
              縱然主要代理品牌多以奢華且精緻的獨特外型為焦點，晶點基於著重品牌故事及設計理念，持續尋覓各種獨特燈飾品牌引進台灣。也因為了解顧客在燈飾選擇的偏好與室內設計風格變化息息相關，團隊會針對當前市場需求和流行趨勢，選擇適合台灣市場的產品品牌。丹麥家具品牌
              Umage 即是在如此條件下，成為新加入的年度代理品牌。<br /><br />
              源於深植北歐文化那份舒服愜意感，丹麥人享受當下、重視儀式感，即是近年所稱的
              Hygge，而 Umage
              所傳遞的設計理念與精神正是如此，該品牌無論燈飾或家具，都保有溫潤調性。除此之外，Umage
              希望人人都能享受美好簡約的設計，因此價格上也更易輕鬆入手。值得一提的是，所有系列商品皆簡化繁冗包裝，為地球環保盡一份心力。疫情之後，人們更重視彼此之間的陪伴，也更把握當下共處時光，藉此，晶點透過引進
              Umage 品牌，將令人嚮往的北歐生活態度輕柔傳遞到台灣居家環境。<br /><br />
              當今住宅風格不再如以往制式，甚至跳脫風格，古典設計也可以擺上現代單品燈飾，現代居家也能懸掛奢華水晶燈，消費者選擇燈具不只針對美觀裝飾，更在乎整體空間所傳遞的氛圍。如今，大量機器化生產的時代，精湛的手工藝品更加珍貴，它們不僅帶有藝術的美
              感，更富有人文情感價值，晶點流行燈飾挖掘這些背後故事，讓燈飾不僅作為空間亮點，更是生活品味的體現。
            </p>
          </div>
          <div class="designer">
            <p>Designer: <span>Baletic Arch</span></p>
            <p>Production date: <span>2023</span></p>
            <p>Location: <span>American</span></p>
          </div>
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
      <StoryNavigation />

      <div class="inner-wrap wrap">
        <div class="md:block hidden">
          <StoryRelatedProject />
        </div>
      </div>
      <div class="md:hidden">
        <StoryOpinonPagination :slidesData="slidesData" />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.cover__container {
  margin-bottom: 5.54626%;
}
.Filtericon-container {
  display: none;
}
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
.photo {
  width: 100%;
}

.icon {
  display: flex;
  justify-content: flex-end;
  margin-top: 2.37%;
}

.tag-button {
  margin-bottom: 3.698%;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;

  @include max-media(1024) {
    justify-content: start;

    @include max-media(768) {
      justify-content: space-around;
    }
  }
}

.text {
  font-size: 0.8125rem;
  color: $text-color3;

  &__wrap {
    padding-left: 12.2298%;
    padding-right: 12.2298%;
    margin-top: 15.23%;

    @include max-media(768) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &__cn {
    line-height: 33.5px;
    margin-bottom: 8.5%;
    font-size: 1rem;

    @include max-media(768) {
      margin-bottom: 17.57%;
      font-size: 0.75rem;
    }
  }

  &__en {
    font-family: $font-Noto;
    line-height: 24.96px;
    margin-bottom: 13.653%;
    font-size: 1rem;
    font-weight: 300;
    text-align: justify;
    letter-spacing: 0.51px;

    @include max-media(768) {
      margin-bottom: 52.6%;
      font-size: 0.75rem;
    }
  }
}

.introduce {
  border-top: 1px solid rgba(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0);
  padding-top: 6.36622%;
  padding-bottom: 6.36622%;
  color: $text-color3;
  font-family: $font-Noto;
  margin-bottom: 13.653%;

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

.designer {
  margin-top: 15%;
  margin-bottom: 20%;
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
</style>
