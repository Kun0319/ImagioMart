<script setup>
import { useRoute } from "vue-router";
import SearchBg from "./components/SearchBg.vue";

const mockData = [
  {
    id: 1,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1e1c/cca5/2ea41bf30b298a2525f69e048ff3985e?Expires=1702857600&Signature=hc85-jYRo5rdOeGPOpMUfZC-4goSu0-fZhxzL8634ZN4Ije33SyVAA~IYHToOJCgxlnM2eOeJVsfNCCqOFMAZHwjElqEvtfc-1Cqjs3~8kV8s7TLH-8GGtNBRKaBBZsGPrOiDhK6quPM~OySi5b5ISy53v-rvgFJrD0zCeRcP0A9uXAxnBkMdDl-aFRn52JmRT01Lu-veWbSQGrCxVgmCkGcJcWXgYh7IFAEMplSnSM5vs6wj5IZPspnd-pAFIt9c-hZhlqafgD7HRrDl5glAn2N5edUFUECq212SYiheii6JV77317q6oY~Zxe790Fyq-1hQuCGNjlUg9KktAyoDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1702857600&Signature=pOOvXeUmm6t77KwVzj1AVy-Oe3Kcgh81Qv4tmNCr19vuCS8dpDNrmWMrz0gtmOKyo8~5wcDGzEDESaWUQYuVJ~WUVtH8wsnMRv5ba13TOR0WLzeV5oIzHioAyL-Evqg04POIhurdxilG5Z2yxvnbctpNB9lHObIei1Pep1YQpV2F14N-VJmQvB1BUAMIZhAzBir8WGT40FwbV0tJRR3pzf3UotaWJFiusLCTvVOxof87qGaEEfIbtrwIMHj0H5kmK2PPOu0UNYBoL2Bmmotp0DFxUxwa52XV2LWRArM7Vu12HAOYn6t1oV5o76h99h9Ay8KXVkHAqxgcvq-skH13bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1702857600&Signature=O0cPWQEc4MlM-DflsMmuEciGjfjRdbV4M4UxW5Jr7fdgVDEAJ3TQyGQi2xwiv20VWSE6UfLZSJEYMvxa1yoO4hffeWNKCzMwWKGLsty2L8FEBeF11aUzkG8zwJ7TiQA4wSmWzdb21U13TPP8jX9IXWvuLXQ2FwTuxWHfcfMrqWqGOWCMdWo9yK-AKZn589NpsbfbtxVeleGk11MWaV0kUFHVXxy1B4d5V-52HEoNTwl~jGlFYd1Joxm1PbGn-PwQL0kbdKiLE~B3Q-sYHtq7QfQQsjH7anvOv~88~WSuX~zBpnhR4MEgDn-BVVWnlHPg0TBnd~SyXWAzlFGevnJehg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 4,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/133c/aae5/b5c0d95ffc5aaf1bba7bf39ccc61c2e1?Expires=1702857600&Signature=S7ZJrdNDsVWPRHHB81vtE8I7xa0qYGCec6fRzE8ug7U7~cJuBjWEoNhDOfpMin3HJBe3SzzU8Qcc6iqb-cHjFPzx0Ii~K-aJLyIYaVF8TWyVuoWmHWtKAfnaWUVf-K6VZ6B-Akr4pv9-KfRgeAJp2Bb9c5F0XQ-beL7cbbuAlzL9UtN51-M9w~EXlW4nKV44GMkUeQ-Zt7Ds85GAWYFUMJfCvSfM8rLtYI7VuAju4ESM1tqiZHO6VLFCTwVI74H9F8nJfX9vFD6aMPVe8ebXeau4tqrWqXyuuow~KllLewVVLpBbf4zJeCCOzaSJqZdsVYr5BTrgVD0b6NRCsfUbDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 5,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ee85/d08d/f553c6b6534b9463f62c166db74f6c81?Expires=1702857600&Signature=DJJCyCQZRBQqnf7TKDmtesP7T2CIKvgjQgpsMLQzxwEiXaLxDITZhI0MbsAqR74cRSmPqlsZmcva7Dt2o4y4cpRaICbNPP08oVWTCkG9UY9kRXGP4JI5s0fw3ZPWIk0duqfhVsjGkFgtBpW8DH~IpISMvqGzHmsb8BHi2STGl1ktaIn1vRR~C26PEHwH8btaROVD00SPGnClWu0T0TGpuYQHhQS7TX-h4TnZ0aek~nLwcv08JK0G1Xhpk-JcVysKrMjTdxOEbnXJIiwkKFcVROpNWt8QtO9Lmtp8AfPI9pyFELMWx4XpNyq-P7UDnbXrXonayHekuDZX3a67iP~BMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 6,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/347f/4785/ec22566614e99f57dd7e88f129b9e188?Expires=1702857600&Signature=fmebmfPDjsKGTddkMcezKHx14AqsD1GDpt1FZVwJ-ByAPCZCYdsf1FCEDesXWqyLQ7QOzdxZzio11xXXN3~ZRl~dvRutdPOUJiHklVkREUd-yvg4T0RpT9FRjHGCdBS~p7kqTK~hPBsSsLzEcPmgjK7fubbqYKdyB0Ilx9iNpER5KzBWVoEV2IDOvaj-4EtlLGOgH3ihpIJh1o6f6FHay2rpjUZ8VR1DBq~~uKtyJHzVhUuRFZIKTAU1rcYPInSropDICNAXwTzDSc8I806qOTaEPdZPDo5x~kpfgHegGgqoYuU75FmRqO2TvlYJZYZpyHUmz-SToWFGprNImqURTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 7,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/0bdc/ba50/6fd29092576205a0b89757239a475c32?Expires=1702857600&Signature=AUfQ5rUMv006SIgXqwWLNDutPapDYxpQ3q9LoiH2QQVm4MGSZQzGWyJe4-fqqj2InihmJBtZZVPzW~xbGVhsRWMMwaC4TmPrgAiwz1oYRBTXQbRyBpS~jjjwI8Sc~Pwk2ukZ1K5i-9LrAAKt8O0mR1t5MhzN21S7TWKa3GgtDUnGdQJiqfL-P4bzoo22CkKl47VHRc9MDFUMl1mUjsFDli-ZHQ553~jgbUGgrH9JIZlGArz6vhKZAWmnTh73cdyo2PzoI8Onf5tq77kfgzHThwTiqB5ZPbNo297cRA1DFaOVGpv4u4AWWmfAcHrrXvyJd4n02salPD8EDpQKo~vKWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const searchResults = ref([]);
const route = useRoute();

onMounted(() => {
  const searchQuery = route.query.q;
  console.log("Search Query: ", searchQuery); // 調試搜尋查詢

  if (searchQuery) {
    searchResults.value = mockData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    console.log("Search Results: ", searchResults.value); // 調試搜尋結果
  }
});
</script>

<template>
  <NuxtLayout>
    <SearchBg />
    <div class="search-results inner-wrap">
      <p
        v-if="searchResults && searchResults.length"
        class="search-results__text"
      >
        {{ route.query.q.length }} results for "{{ route.query.q }}"
      </p>
      <div v-if="searchResults && searchResults.length" class="">
        <div
          v-for="result in searchResults"
          :key="result.id"
          class="search-results-items grid grid-cols-12 md:gap-4 gap-2"
        >
          <div class="md:col-span-4 col-span-6">
            <img
              :src="result.imageUrl"
              alt="Result Image"
              class="photo w-full"
            />
          </div>
          <div class="col-span-6 text">
            <p class="text__one">{{ result.title }}</p>
            <p class="text__two">{{ result.description }}</p>
          </div>
        </div>
        <Paginator />
        <div class="grid-cols-12 gap-12 md:grid hidden">
          <div class="col-span-4" v-for="n in 6" :key="n">
            <LittleAdvertise />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="Search">
          <p class="text-center text__noresults">
            Search results for “{{ route.query.q }}”
          </p>
          <p class="text-center text__noresults">
            No artical were found matching your selection.
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.inner-wrap {
  @include max-media(768) {
    padding: 0;
  }
}
.search-results {
  &__text {
    margin-top: 11.8947%;
    margin-bottom: 7.16%;
    font-size: 1.3125rem;
    font-weight: 400;
    color: $text-color3;
  }
  &-items {
    margin-bottom: 10.9733%;
  }
}
.photo {
  width: 100%;
  // height: 311px;
}
.text {
  margin-left: 8.4875%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: $text-color3;
  @include max-media(768) {
    margin-left: 0%;
    justify-content: center;
  }
  &__one {
    font-size: 1rem;
    margin-bottom: 5.286%;
    @include max-media(768) {
      font-size: 0.75rem;
      // line-height: 13.56px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__two {
    font-size: 0.875rem;
    font-family: $font-Noto;
    @include max-media(768) {
      font-size: 0.5rem;
      line-height: 15.36px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
//
.Search {
  padding-top: 25%;
  padding-bottom: 25%;
}

.text {
  font-size: 1.3125rem;
  line-height: 49.46px;
  @include max-media(768) {
    font-size: 0.75rem;
  }
}
</style>
