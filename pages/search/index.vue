<script setup>
import { useRoute } from "vue-router";
import cover from "~/assets/images/SearchCover.png";

const mockData = [
  {
    id: 1,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1e1c/cca5/2ea41bf30b298a2525f69e048ff3985e?Expires=1704067200&Signature=L-T3w54wmOIK1QvT2CWK9ysbA1thHLfohlTXFrDyqpF1uFUWyzBTAJm7AgBBfxTS6TD9O70ugpjkC-Rsgo5dk3syK-dd~SvAaaWKfwoXi0-beF224zrbIiXidRBVWk066M4HZY0z6th4-D~GsWADqnprk7ylcEwXbRz7zDQCMVSI4jCIMaPQnL9ydWCK7ce-UFcZ~6cYdaOCLtXDIuouTNsbACjVbFTWJAB1xxt0NCgIVZb88qSqu0qNd4TiOugGbsTySbQBhiAExTXcL~FaH0bfR1bdr4U8pGOYVV1ycKH8AdRsqrTv69r6OMDjZ36KRghlkr3AXZbHLmizpaAF2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1704067200&Signature=X4JQ76l07kYYyqBTqpcuIpd~4n6von01779UYYBt6Vm6lOGdrJqru~s1XMQZ87ilS3-YRwYF6Zjc--A~KyO0uKr3GU46VC8UDmhCYjNCtseBWV51xkIqMt~fzgDWjG7j2-szHnsEThhZgJj2pG8kX2qO8wa73k61wAj3onGwwXuyPle4Ml1Xv6K0fAFbdtsBGMDTPkQYshG6nSe9DV5SAGeY5vcAXxBAAUa7Rt-un~UbqvJGwBNwfVmYXTtntVvOD-ltiIiDqcKR1Pr1XdNev03aBuECrDUdcCePeZC9~yUZXPv8zzAGG3~GIOPZ8R6gMdzhBJyi8yOCaOQ7n9FxIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1704067200&Signature=Q-4GGt~v7DeVSwyukbVMxwNDA89NBGuAN~PVrxep2mSpsj3p35ALJ42sncsrdnhZmKmygoAkxH9rggRbvJfxelSXOmXXrkyPW4hrSLQCCCQPl0YRuvhgbuzpnI-odmCZqxHLaVxS84wj7cCJCtsYIbzoxuX4eyPLZEQdk56ucbq1FGB4NScDNSecrfk7nkPFm98~sVavQfQ4nPuM5vFqT~0JxuBF1B73dgVjniQB8an-mTsL6F6BUNGtUFM0tWLlx-Ya4fpYQnbNuOALYqhmSO1KRymPOi1lV1IychunczRcmXeEhCr8cgSYd96GBjaMJwpD5pWqLh8HMXmcuUkJOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 4,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/347f/4785/ec22566614e99f57dd7e88f129b9e188?Expires=1704067200&Signature=JV~SYXFjaBPvT~nFURG7E4aUKzX~O6wrxlB6GF3Fv23gQo3lN~Zzf3v~E4AC-J2-N4JnmWaptGHQ3tsobehSMNKQ--rosyhGBMVLXI-m0EFXx5uCLUuovcu-g9p5kB5wpOZ320cOGp2P6d1tXJLJ7jToD5DrrARiKYeejSqAUsp4JXW3Gz92HhWu5wd37aA9MMuI5h4U2F9Xt079bOHDVkdg9fLspKUUo5jZ16X9SivSfWp1l~BGxnRGmTJ2wo8oBOslfGkxrWKE7mGi1YvNFy7bJLDivl69tfTb3vtKMxWhBQhz~KzHYUkPc0DtCDN0L0NRkIyAmYJSeNADeBOjGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 5,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/133c/aae5/b5c0d95ffc5aaf1bba7bf39ccc61c2e1?Expires=1704067200&Signature=bDP7PQYQB~KZAX3DkAvHHVGwwGn3lFpEatoaRt8hacUGOQQ69cdyH0rgMYJHMUyJGQVzcxA1rt-AAXfswYxSZNaVhlQ2iil6SrqCYIcx51kNy-CdJFFc0MplvyWs6slIqo3Vn9Jvrt7MBY4WD-LYECtwXGzO9e18PPfbDcisxdre2yOJH-A9ESwyUtg6y5PAxTHfNp9-W78IY3x1B17cvk4wScqPIXxgTMKDbHT3ofaAyK7p~oPV9MIxLaYRMzMba1lNCqkazjAy1I9OrjbRc4YRg-zeu2QdVMzGnqGytp77PGv5dvjVsrymdmMrE8i15eFKXX7-hBIaysJmA-tqNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 6,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ee85/d08d/f553c6b6534b9463f62c166db74f6c81?Expires=1704067200&Signature=p3w1E7LlpmUR8QyxEgO7TvIRUijxx1v6Uhs3xJKE5aAUYy0XAc9C0S332RSrTfiQDheFhWs4m9AeBHCWMgwmnxrFrRQ~~9iGP0qnUeh2J5HwcsmjeWTQNgmVZ4Jq4HZl-XHLGo8sLs6t8xVZR-qF~Tj-TcMIFOkEYlSrXKRKwfEFWr3YsMFa4Aje2PBdFJVIAWAa~KXQamO1CEkuJMFuoK5AvyBdEgDBuSKdFVrUyNBEtnQmWWaxPonf1~qy1BaMDJTkw14CLyxjDDIJ7wMwxcj6kk~6-kGBq~DF51~PyxkTq6fn7ieQM6~WfDxZYdPX4hT0V2nSuJ1QcyTZ6BZASQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 7,
    title: "Beyond the Surface, Milan, Italy",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center, the small cape surrounded by a lake is completely in its own privacy. There are long pasto",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/0bdc/ba50/6fd29092576205a0b89757239a475c32?Expires=1704067200&Signature=kfMVwK-DPttbYKb5HTaniS1JiwAHSFSxinIoGyRAoyBzQH3-bcP141gOBCopKw~1WYPIiJBnr80zmUvh8dOvSBS0qaSrE0yUrbjuwNHcB1ndd1i8fxkjKkzSL8Z-q96PPRCc--hQ6evgqCDckBGMlLF88eZnox7RNfafasnLZwBmAyi0OciiGrts9Nm1vBEFtYWuZPrNJWln1SYXSE6qTwJJgXoiKJgeKXKUnPb89JKHdCzJTGO-AtnQlo-GKuzfoJM27nVY-JURsf254os5M~FbmdyoIr3OPaVGPlv7TMr8rfkFld5F7FDcsf6gLuMJOIRfaDEWq7k8WZe0DQBI8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
watch(
  () => route.query.q,
  (newQuery, oldQuery) => {
    if (newQuery !== oldQuery) {
      search(newQuery);
    }
  },
);
</script>

<template>
  <NuxtLayout>
    <Banner :imgSrc="cover" />
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
      line-height: 13.56px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__two {
    font-size: 0.875rem;
    font-family: $font-Noto;
    line-height: 26.88px;

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
