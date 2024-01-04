<script setup>
import bg from "@/public/images/CompetitionBg.png";
import { useGlobalStore } from "@/stores/global.js";
import pic from "@/public/images/competitioncontent.png";

const globalStore = useGlobalStore();
const isChinese = computed(() => globalStore.language === "CN");
definePageMeta({
  layout: "innerpage",
});
const relatedProjects = [
  {
    imageUrl: pic,
    companyName: "Design",
    projectName: "Huang's House, Taichung",
    projectLocation: "台中黃宅",
  },
  {
    imageUrl: pic,
    companyName: "Design",
    projectName: "Huang's House, Taichung",
    projectLocation: "中國深圳黃宅",
  },
  {
    imageUrl: pic,
    companyName: "Design",
    projectName: "Huang's House, Taichung",
    projectLocation: "藍鯨 Villa",
  },
];
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
  <NuxtLayout
    :breadcrumbText="'Home &nbsp;/&nbsp; Competition &nbsp;/&nbsp; Furniture'"
    :cover="bg"
  >
    <div class="flex flex-col content-center items-center w-full inner-wrap">
      <div class="photo__container">
        <img
          src="../../public/images/competitioncontent.png"
          alt=""
          class="photo"
        />
      </div>
      <div class="w-full text__wrap">
        <div>
          <h1 class="text__title">
            250,000 € Prize - House of the Future Competition
          </h1>
          <p class="text__content">
            A house and a home aren’t always the same thing. And while the
            aspects that make a place your home aren’t limited to physical
            attributes, architecture can still have a huge impact. Cultural
            differences, location, resources and the format of your family will
            all influence what you look for in a home. And in a world that seems
            to be changing faster than ever, can architects and designers
            anticipate the needs of new age homes? <br /><br />For the House of
            the Future competition, participants are tasked with designing a
            template for a new age home for Emirati citizens in the Dubai. Run
            in partnership with The Dubai Government, the jury are searching for
            innovative projects that use design to refresh the current offerings
            to locals, bringing them more up-to-date with the architectural
            aesthetic of the country and its people.<br /><br />
            Winning entries will be put forward for consideration for
            construction by Dubai Government, as well as receiving a share of
            the 250,000 € prize fund. <br /><br />The House of the Future
            competition is open to architecture and design enthusiasts of all
            levels from any location around the world. The jury is searching for
            innovative ideas and creative design concepts, rather than
            submissions only from practicing architects.<br /><br />
            There is no specified site for the House of the Future competition,
            and participants are asked to keep a budget in mind of no more than
            1 million Emirati Dirhams.
          </p>
        </div>
        <div>
          <h2 class="text__title">PRIZES</h2>
          <div class="text__content">
            <p>
              3 winning proposals, one special award recipient and 6 honourable
              mentions will be selected. Buildner (formerly Bee Breeders) will
              award a total of 250,000 € in prize money to competition winners
              as follows:
            </p>
            <br />
            <br />
            <p>1st Prize - 140,000 €</p>
            <p>2nd Prize - 45,000 €</p>
            <p>3rd Prize - 20,000 €</p>
            <p>+ 6 honourable mentions</p>
            <br />
            <br />
            <p class="text__content">SELF-SUSTAINED HOUSE AWARD - 45,000 €</p>
          </div>
        </div>
        <div>
          <h3 class="text__title">COMPETITION SCHEDULE</h3>
          <div class="text__content">
            <div>
              <p>Early Bird Registration: APRIL 25 – JUNE 7</p>
              <p>Advance Registration: JUNE 8 – SEPTEMBER 7 Last Minute</p>
              <p>Registration: SEPTEMBER 8 – SEPTEMBER 30</p>
            </div>
            <br />
            <br />
            <div>
              <p>Final registration deadline: SEPTEMBER 30, 2023</p>
              <p>
                Closing date for submission: NOVEMBER 1, 2023 (11:59 p.m. LONDON
                TIME)
              </p>
              <p>Announcement of the winners: NOVEMBER 30, 2023</p>
            </div>
            <br />
            <br />
            <p>cash prize award: $ 274,815.00 USD</p>
          </div>
        </div>
        <div class="readmore"><nuxt-link to="">READ MORE</nuxt-link></div>
      </div>
      <div class="md:block hidden w-full">
        <RelatedProject :projects="relatedProjects">
          <template #title>
            <p class="text__title__morecompetition" v-if="isChinese">
              更多比賽
            </p>
            <p class="text__title__morecompetition" v-else>MORE COMPETITION</p>
          </template>
        </RelatedProject>
      </div>

      <StoryOpinonPagination :slidesData="slidesData" class="pagination">
        <template #title>
          <slot name="title">延伸閱讀</slot>
        </template>
      </StoryOpinonPagination>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.photo {
  // width: 100vw;
  width: 100%;
  // height: 100%;
  max-height: 687.8px;
  aspect-ratio: 3/2;
  margin-bottom: 17.0021%;

  &__container {
    width: 100%;
  }
}

.competition {
  padding-left: 14.3452%;
  padding-right: 14.3452%;
  @include max-media(768) {
    padding-left: 0;
    padding-right: 0;
  }
}

.text {
  color: $text-color3;

  &__wrap {
    padding-left: 8.0125%;
    padding-right: 8.0125%;
    @include max-media(768) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &__content {
    @extend .text;
    font-family: $font-Noto;
    font-size: 1rem;
    line-height: 30.72px;
    letter-spacing: 0.816px;
    font-weight: 300;
    text-align: justify;
    margin-bottom: 16.2904%;

    @include max-media(768) {
      text-align: inherit;
      font-size: 0.75rem;
      line-height: 23.04px;
      letter-spacing: 0.612px;
    }
  }

  &__title {
    @extend .text;
    font-size: 1.3125rem;
    font-weight: 400;
    line-height: 27.72px;
    letter-spacing: 1.071px;
    margin-bottom: 4.0726%;
    @include max-media(768) {
      font-size: 0.875rem;
      line-height: 18.48px;
      letter-spacing: 0.714px;
      margin-bottom: 19.4572%;
    }

    &__morecompetition {
      // font-size: 1.3125rem;
      font-size: 1rem;
      line-height: 30.18px;
      margin-bottom: 3.7694%;

      // font-family: $font-Noto;
      @include max-media(768) {
        margin-bottom: 12.2473%;
      }
    }
  }
}

.readmore {
  text-decoration: underline;
  font-family: $font-Noto;
  line-height: 24px;
  letter-spacing: 0.816px;
  font-size: 1rem;
  margin-bottom: 31.999%;
  font-weight: 400;
}
.pagination {
  @include max-media(768) {
    margin-bottom: 57.2565%;
  }
}
</style>
