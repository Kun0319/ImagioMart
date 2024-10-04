<script setup>
import bg from "../../assets/images/iwcompetition.png";
import PersonnelCard from "./components/PersonnelCard.vue";

const judges = [
  {
    imageSrc: "/images/JUDGE1.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 2,
    imageSrc: "/images/JUDGE2.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 3,
    imageSrc: "/images/JUDGE3.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 4,
    imageSrc: "/images/JUDGE4.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 5,
    imageSrc: "/images/JUDGE5.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
];

const winners = [
  {
    imageSrc: "/images/WINNERS1.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 2,
    imageSrc: "/images/WINNERS2.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 3,
    imageSrc: "/images/WINNERS3.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
];
</script>
<template>
  <NuxtLayout
    :breadcrumb-text="'Home &nbsp;/&nbsp; IW Competion  &nbsp;/&nbsp;   About '"
  >
    <div class="top--margin">
      <Banner :img-src="bg" custom-text="IW<br/>Competion" />
      <BreadcrumbLine
        :text="'Home &nbsp;/&nbsp; IW Competion  &nbsp;/&nbsp;   About '"
      />
      <div class="inner-wrap">
        <div>
          <p class="text__title">ABOUT</p>
          <p class="text__content">
            The location of this private house is unique: even though the site
            is just a couple of kilometers away from Hämeenlinna city center,
            the small cape surrounded by a lake is completely in its own
            privacy. There are long pastoral views over the lake to fields and
            forests. As the area’s landscape is valuable, the city’s master plan
            set tight regulations to new buildings. The new building was to be
            placed on the footprint of an old villa that was demolished because
            of its bad condition. The massing, roof shape, height, and façade
            materials needed to be in harmony with the surrounding old
            buildings.
            <br /><br />The location of this private house is unique: even
            though the site is just a couple of kilometers away from Hämeenlinna
            city center, the small cape surrounded by a lake is completely in
            its own privacy. There are long pastoral views over the lake to
            fields and forests. As the area’s landscape is valuable, the city’s
            master plan set tight regulations to new buildings. The new building
            was to be placed on the footprint of an old villa that was
            demolished because of its bad condition. The massing, roof shape,
            height, and façade materials needed to be in harmony with the
            surrounding old buildings.<br /><br />
            The location of this private house is unique: even though the site
            is just a couple of kilometers away from Hämeenlinna city center,
            the small cape surrounded by a lake is completely in its own
            privacy. There are long pastoral views over the lake to fields and
            forests. As the area’s landscape is valuable, the city’s master plan
            set tight regulations to new buildings. The new building was to be
            placed on the footprint of an old villa that was demolished because
            of its bad condition. The massing, roof shape, height, and façade
            materials needed to be in harmony with the surrounding old
            buildings.
          </p>
        </div>
        <div>
          <p class="text__title">JUDGE</p>

          <div class="container">
            <PersonnelCard
              v-for="judge in judges"
              :key="judge.id"
              :image-src="judge.imageSrc"
              :name="judge.name"
              :name-zh="judge.nameZh"
            />
          </div>
        </div>
        <div>
          <div class="flex justify-between items-center">
            <p class="text__title">WINNERS</p>
            <nuxt-link to="" class="otherwinners">其他得獎者</nuxt-link>
          </div>
          <div class="container__winners">
            <PersonnelCard
              v-for="winner in winners"
              :key="winner.id"
              :image-src="winner.imageSrc"
              :name="winner.name"
              :name-zh="winner.nameZh"
            />
          </div>
          <div class="black">
            <div
              class="black__text md:col-end-8 md:col-span-4 col-span-12 md:justify-self-end justify-self-center"
            >
              <p>
                Full awards criteria and submission details can be viewed on our
                website here
              </p>
            </div>
            <div
              class="black__btn md:col-span-3 col-span-12 justify-self-center"
            >
              <nuxt-link to="" class="black__btn__text">REGISTER NOW</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.top--margin {
  margin-top: 55px;
}

.inner-wrap {
  @include max-media(768) {
    padding-left: 0%;
    padding-right: 0%;
  }
}

.text {
  &__title {
    font-size: 1.3125rem;
    color: $text-color3;
    line-height: 27.72px;
    letter-spacing: 1.071px;
    margin-bottom: 8.8035%;

    @include max-media(768) {
      font-size: 0.75rem;
      margin-top: 21.0131%;
      margin-bottom: 26.377%;
    }
  }

  &__content {
    font-size: 1rem;
    color: $text-color3;
    line-height: 30.72px;
    letter-spacing: 0.816px;
    margin-bottom: 12.7652%;
    text-align: justify;
    font-weight: 300;

    @include max-media(768) {
      font-size: 0.625rem;
    }
  }
}

.photo {
  border-radius: 50%;
  border-radius: 50%;
  object-fit: cover;
  width: 15.74vw;
  height: 15.74vw;
}

.container {
  @apply grid grid-cols-12 gap-4;
  margin-bottom: 11.8724%;

  &__winners {
    @extend .container;
    margin-bottom: 24.6376%;
  }
}

.otherwinners {
  font-size: 1rem;
  letter-spacing: 1.6px;
  position: relative;
  align-items: center;
  font-family: $font-Noto;
  padding-right: 1%;
  transform: translateY(-50%);

  @include max-media(768) {
    font-size: 0.625rem;
  }

  &:after {
    content: "";
    display: block;
    background-image: url("../../../assets/icon/next.svg");
    position: absolute;
    transform: translateY(-50%);
    left: 100%;
    top: 50%;
    width: 30px;
    height: 15px;

    background-size: contain;
    background-repeat: no-repeat;

    @include max-media(768) {
      width: 14px;
      height: 9px;
      top: 50%;
    }
  }
}

.black {
  @apply grid grid-cols-12 gap-4 items-center;
  width: 100vw;
  background-color: black;
  height: 29.1666667vw;
  margin-left: -26.06%;

  //   position: relative;
  @include max-media(768) {
    margin-left: -10.1662%;
    min-height: 208px;
  }

  &__text {
    color: white;
    font-size: 2.1875rem;
    font-family: $font-Noto;
    font-weight: 700;
    line-height: 45.815px;
    // max-width: 740px;
    width: 42.82vw;

    @include max-media(768) {
      font-size: 1rem;
      text-align: center;
      line-height: 20.944px;
      padding-top: 10%;
      width: 100%;
    }
  }

  &__btn {
    background-color: white;
    font-family: $font-Noto;
    width: 15vw;
    height: 4.92vw;
    display: flex;
    // justify-content: center;
    align-items: center;

    @include max-media(768) {
      margin-top: -20%;
      min-width: 103px;
      min-height: 24px;
    }

    &__text {
      font-size: 1.5rem;
      padding-left: 7.6196%;
      padding-right: 6%;
      position: relative;

      @include max-media(768) {
        font-size: 0.5rem;
      }

      &:after {
        content: "";
        display: block;
        background-image: url("../../../assets/icon/next.svg");
        position: absolute;
        transform: translateY(-50%);
        left: 100%;
        top: 50%;
        width: 55px;
        height: 22px;
        background-size: contain;
        background-repeat: no-repeat;

        @include max-media(768) {
          width: 14px;
          height: 9px;
          top: 55%;
        }
      }
    }
  }
}
</style>
