<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const mockdata = [
  {
    id: 1,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Project",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/158c/1832/64628bf6f50d1a13227fbf0124afc804?Expires=1703462400&Signature=LBnQzCrD59Uy-n2-DOawROXZ2LP9uPiyHqQaa1T~zuekV-WyPWqlLsIRHYvAeQ4gZSB1qRsG1yDagvoYc5M-MMdiy~BU1z6xDZYTVd7CIRXisp33FtsJeti688pgvGN-rmiRfF-Z4sm94W95Kccaq~Ac9yXFE~qb4MElAHhOeP4TaeQnP8LH0Fm88ZhAfAN0EPGyt3D8uG5Wz4a8xwyZblAKKMOi0pFDlmVgzUhhx7C5zQxfgNaBPlIKLTYYWrk6xdfkcPP-jZHq5cMYIZ5c132ocbWpDOoDAUA2WviHZ0Insfv6b76qPApCH1Na8ZPcbmFSFxowoTw-af7DwO012w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Project",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4f74/36c3/042f8fc78ee7f2b12b5ee5eee34c2398?Expires=1703462400&Signature=ePS9qX1jz5dMsvr~ca7X8PcqLJUhFJboHTaMKizUtaR2RVdiiwWkaX6NqDaYvMmWIqy6zsYXZGUZ-hDN7qeLvsasQ6TPxe1x1~1YhB73GWutK8tRzHJ~09SpI7sRHu40cU56ilo-gwkg8UPz0eqq6GHnZYnJpDWg6IlXXLGNuRsGifoty5m83ErRdgk2DSJ137ouF4vg2fU980zbX0ccdQI5tk8FmbLCe-BRFrNxqzNeGaso~TxYwR04X2D3rHI2C1QZKTNtYk0RChoqaLW6PC2YgAIrDAcOkXY1VF3aHzfHVGCU3kEOAUZ-1JGKOdZYm8e5KrmtytH7tJ9eJMxhhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Project",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ec6c/869f/520f09390bf518fd3425b9ef6fc087a5?Expires=1703462400&Signature=gJ0WPRVfEcKQplWOwmcZqrkoo7x8Is4XKBvlZGRf2HnIPcNksW4D7ug684n8pXflY1GjPjLCZbqvMyoBXySUDQiTcqI6l8KFFEDO1b~Wlxk9oSirTGi4tf6TWVfoIY9uhezjPa9f9jt6-TCs4GGF9Hugyyiw3LwPRuqP74jYrtxu-YTiwWBifYw4HgWmO6BduiwmL~7T5teo5i7Jlz3DXx5JVpOm-c6j-wI5nXIL7d2QJkahazefNeKpkrSwRtt-FTRCe3hRXAYQ9ycDYhP5sqec9XM9hMnqXPvglRThLSNZNnSNq7xqBEs~vcA7N1OCaIIL2Wgn1bRnGOoXlangXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 4,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Project",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6978/8ba5/7426b86d2eedbdaad79e745a45f41c20?Expires=1703462400&Signature=XghUgVvwe3AveGdJauSkrXZdCSTxm8UMyv5ucutv9dakKBubS6F5Wt7iwssQN1gWk68dd9hEXhPBQQUEan7QBbxYAyqjMFFgzUoantqqh1sOTJkU0HXSg7SaPJStH30zqH0eggDLvI5-nr0Rjf11PwSNLc4K9sSYTSWue2FjpZsJC2cH7~BwOsDRmjDTMnfyzPKnQ649ySzV3-4mGSygRdEMni~ljxDCTVWpRgs83eZJTOHJ2MeHY~5dVh6TU6vKjM-xsiMinA5fIpkRFUU4JTsvvh-zH-7wuZgXcNfYX6fZyeueEoPaIv6BqCNdStgt945NBvGIL0G8RSNyxyQhGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 5,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Story",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/80f8/30bd/b079b304eef96a70e59578f5d5d1e10e?Expires=1703462400&Signature=IdyIgAiUizuBZSMGrbUbUDkJmx3RZBxQkDqlXY0UdGSIQUxVv2aL2cKBBaFCNUeiSRMz~LsvEQ6BRoKgwesjejtnt1tmVewNmElhGgYhTE9YPHJnVJSc1CXYvYlFEb2We4L-lOKiEGPC5~RShNF55yHw9e0kqEL-d-Bw4f-5iKHnuhvv4qmF3373EEaZ9Gqi6IGOH0zL-f3oUUF-WRxgokMLFCm0YeQnXXzIWZxt6JYHOoZMPhTukbD0cUi7~hPYAsXSV6FrAm32EvJqpVMCOJ3VAmcts1wQC8E8Bu7OV5Uh~YIuXSup989kbpT8rdrnqQ76Z6vmtUdvVIhNBdlo8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 6,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Story",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/018e/9014/ab8d7e900e4b87dadaf8f651be9799a7?Expires=1703462400&Signature=h8bUYutaYWGPwQGD~ziSu4JMzmwC8uSFOBFCYTnb180BuY7sTBk13QoxC-LFJQUOelcAq9~gU8bqj1i78irLWi4cGUSzV0ASiuxmqCPOQGrroFFGRWewE21NHOniWRwQbClLHhWebaK9LNAmYRjiwLJiNMt2GUjmo1GPF1dwAe~WNqNMzO3mhdHSMvj8T9m30MoOsKzTs4FFmUSBzmmXqvRbq29ILKvWkVmAOBX-oEPKOj8mvinqLTEnj-vyVYNfJ7~oTDYEAcNArK8uFm8xDkaN9GoSnTkjaTnmg~7U7mNbafn3F15XuAI~2JfD86hz80AIiUYgpwRJZuMJd7o~4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 7,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Story",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2a65/b96f/ffb8c4d2780970b682dc3273c4b96cd1?Expires=1703462400&Signature=lIdnxoekn0fGVixfv-Y3gNy26W-S~hMpFlpeKJHLEU8wBWz1ggvgfVBx--lpC7NYWxvjaGPhYNHQuAtT2CoxR7a2v0Ahc0W1jFdzCui78Pdvr3~v4L~~Tn1bWEA-JnVLrJ4OPr~Ezo22VBVOIicn7v0DWGaCoPMrrcQCUOvZwzRSJFHA67hpwxFTkc5H1D21wY9O0OU7sssqCnbD13heUekgozX-jqDkpmXVhwDwksp8J4pjyGXp8Og7H20FsuR12HjK8-EVoWexn87hIdPwArkOusbe6f-Hnz1F~4WbTCCVojPwkcpCV2fl4L-BtAHAHhFS2eb8Ft~7mVZZbT3mZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 8,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / Story",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/94df/8492/4275b31ea60360460d8735219699f9cd?Expires=1703462400&Signature=EW1wvvEpZm6gHP1cS9edhvmzRMdcL-59OTqhIDf15Mb2wJpMT88WO3msbG5KWefXCwNVzpEueDo9P8mG7IPXXqFXxjgWbg5OWbbhIfY3a-RrL~C9wAL586OS0zTKrCtStcJS-~qYRcGpSHBiwh~mhsjc8mOPpEQfiDBavQlxZudt8I1QJ2A2PSjoRTTmtJaaMAKO3sn0V4ltVQniAEN-f82EBUCPuJ3Qab4qmQlaxdiUQqkaT0ooU3F7sCLy0B0YB~CDVtlUbx5YKycbwhiAQXEFpdEJ-bOtIpr8iJdfr6Wb38JZTmd13DAuHvfMlcn-8AJhPSDJ2V2-lNc9CxM86g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 9,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / News",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8ef9/7969/3906e781d064f114ae0c826596b55bdc?Expires=1703462400&Signature=ned2a7s65yEkbgjcjlIitdGuevKtWpHAy5hMt3js4LHoTGFfvbLfBOe3h4BjvcRPbn7Ni5eSpAaXBM7lWr4K3NTblUfMLfYpsfPSpDTTfg6zMSRhI8EA05JSheJA7ZqkgPwkciWsrO5owXUbD9OhILJaLOQNwqMmETjomfOkoV0moBeV3ZzMYpVrko3g-oRox0EY~8LNeO77DvlA7YGUlhmOchqVWcaRpTjkSSlFnXvpCwIHGVUulaYomprf6OkamBJPuzd6omp4F4-jrbzx849BgytQgc1hHfCEljzPHc5D3nZhP0tvP~tBB6Kbz7pqse7RTTiv~dUEoVFxdxnp9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 10,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / News",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39f9/887d/ae321ff0552e7ada504d5820ebc195c8?Expires=1703462400&Signature=P-xX-31AKzkT5UbrTsI0ey8Hrldz2lb4pseoUMuE0yJDmh8JMQ8FLP5TEkQnBLxi0Z9jh8qBma4Y2CbFILPed8ml1QeSusHioRiZE-EdMc9Knw29yEmesyKgHNwXaj5ZjjFgLtPvhvTERYq5UqYk3NpQ96QnZsTtyPRqAHlUR~UuaZ3S5KujXzylDyF1ohjE0CXcJDkhiHIC-9410iTO2qdRdlN5~mEpJqaientwojO8YwfXxu5o1aYVLDLc17Pxs8OnYICAQNaP78RgjR3iQOcWPbSETV64evp01jX~9fuJtgHK4QCz~jY0q4IppM6CO0bZezBTQJyx2TDl9P6Znw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 11,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / News",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6978/8ba5/7426b86d2eedbdaad79e745a45f41c20?Expires=1703462400&Signature=XghUgVvwe3AveGdJauSkrXZdCSTxm8UMyv5ucutv9dakKBubS6F5Wt7iwssQN1gWk68dd9hEXhPBQQUEan7QBbxYAyqjMFFgzUoantqqh1sOTJkU0HXSg7SaPJStH30zqH0eggDLvI5-nr0Rjf11PwSNLc4K9sSYTSWue2FjpZsJC2cH7~BwOsDRmjDTMnfyzPKnQ649ySzV3-4mGSygRdEMni~ljxDCTVWpRgs83eZJTOHJ2MeHY~5dVh6TU6vKjM-xsiMinA5fIpkRFUU4JTsvvh-zH-7wuZgXcNfYX6fZyeueEoPaIv6BqCNdStgt945NBvGIL0G8RSNyxyQhGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 12,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / News",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/80f8/30bd/b079b304eef96a70e59578f5d5d1e10e?Expires=1703462400&Signature=IdyIgAiUizuBZSMGrbUbUDkJmx3RZBxQkDqlXY0UdGSIQUxVv2aL2cKBBaFCNUeiSRMz~LsvEQ6BRoKgwesjejtnt1tmVewNmElhGgYhTE9YPHJnVJSc1CXYvYlFEb2We4L-lOKiEGPC5~RShNF55yHw9e0kqEL-d-Bw4f-5iKHnuhvv4qmF3373EEaZ9Gqi6IGOH0zL-f3oUUF-WRxgokMLFCm0YeQnXXzIWZxt6JYHOoZMPhTukbD0cUi7~hPYAsXSV6FrAm32EvJqpVMCOJ3VAmcts1wQC8E8Bu7OV5Uh~YIuXSup989kbpT8rdrnqQ76Z6vmtUdvVIhNBdlo8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  // {
  //   id: 13,
  //   titleEn: "Get some more sleep",
  //   titleCn: "多睡一會",
  //   source: "Industrial ｜ ADEVA",
  //   tags: "Dining",
  //   description:
  //     "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
  //   imageUrl:
  //     "https://s3-alpha-sig.figma.com/img/018e/9014/ab8d7e900e4b87dadaf8f651be9799a7?Expires=1703462400&Signature=h8bUYutaYWGPwQGD~ziSu4JMzmwC8uSFOBFCYTnb180BuY7sTBk13QoxC-LFJQUOelcAq9~gU8bqj1i78irLWi4cGUSzV0ASiuxmqCPOQGrroFFGRWewE21NHOniWRwQbClLHhWebaK9LNAmYRjiwLJiNMt2GUjmo1GPF1dwAe~WNqNMzO3mhdHSMvj8T9m30MoOsKzTs4FFmUSBzmmXqvRbq29ILKvWkVmAOBX-oEPKOj8mvinqLTEnj-vyVYNfJ7~oTDYEAcNArK8uFm8xDkaN9GoSnTkjaTnmg~7U7mNbafn3F15XuAI~2JfD86hz80AIiUYgpwRJZuMJd7o~4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  // },
  // {
  //   id: 14,
  //   titleEn: "Get some more sleep",
  //   titleCn: "多睡一會",
  //   source: "Industrial ｜ ADEVA",
  //   tags: "Dining",
  //   description:
  //     "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
  //   imageUrl:
  //     "https://s3-alpha-sig.figma.com/img/2a65/b96f/ffb8c4d2780970b682dc3273c4b96cd1?Expires=1703462400&Signature=lIdnxoekn0fGVixfv-Y3gNy26W-S~hMpFlpeKJHLEU8wBWz1ggvgfVBx--lpC7NYWxvjaGPhYNHQuAtT2CoxR7a2v0Ahc0W1jFdzCui78Pdvr3~v4L~~Tn1bWEA-JnVLrJ4OPr~Ezo22VBVOIicn7v0DWGaCoPMrrcQCUOvZwzRSJFHA67hpwxFTkc5H1D21wY9O0OU7sssqCnbD13heUekgozX-jqDkpmXVhwDwksp8J4pjyGXp8Og7H20FsuR12HjK8-EVoWexn87hIdPwArkOusbe6f-Hnz1F~4WbTCCVojPwkcpCV2fl4L-BtAHAHhFS2eb8Ft~7mVZZbT3mZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  // },
  // {
  //   id: 15,
  //   titleEn: "Get some more sleep",
  //   titleCn: "多睡一會",
  //   source: "Industrial ｜ ADEVA",
  //   tags: "Dining",
  //   description:
  //     "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
  //   imageUrl:
  //     "https://s3-alpha-sig.figma.com/img/94df/8492/4275b31ea60360460d8735219699f9cd?Expires=1703462400&Signature=EW1wvvEpZm6gHP1cS9edhvmzRMdcL-59OTqhIDf15Mb2wJpMT88WO3msbG5KWefXCwNVzpEueDo9P8mG7IPXXqFXxjgWbg5OWbbhIfY3a-RrL~C9wAL586OS0zTKrCtStcJS-~qYRcGpSHBiwh~mhsjc8mOPpEQfiDBavQlxZudt8I1QJ2A2PSjoRTTmtJaaMAKO3sn0V4ltVQniAEN-f82EBUCPuJ3Qab4qmQlaxdiUQqkaT0ooU3F7sCLy0B0YB~CDVtlUbx5YKycbwhiAQXEFpdEJ-bOtIpr8iJdfr6Wb38JZTmd13DAuHvfMlcn-8AJhPSDJ2V2-lNc9CxM86g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  // },
  // {
  //   id: 16,
  //   titleEn: "Get some more sleep",
  //   titleCn: "多睡一會",
  //   source: "Industrial ｜ ADEVA",
  //   tags: "Dining",
  //   description:
  //     "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
  //   imageUrl:
  //     "https://s3-alpha-sig.figma.com/img/8ef9/7969/3906e781d064f114ae0c826596b55bdc?Expires=1703462400&Signature=ned2a7s65yEkbgjcjlIitdGuevKtWpHAy5hMt3js4LHoTGFfvbLfBOe3h4BjvcRPbn7Ni5eSpAaXBM7lWr4K3NTblUfMLfYpsfPSpDTTfg6zMSRhI8EA05JSheJA7ZqkgPwkciWsrO5owXUbD9OhILJaLOQNwqMmETjomfOkoV0moBeV3ZzMYpVrko3g-oRox0EY~8LNeO77DvlA7YGUlhmOchqVWcaRpTjkSSlFnXvpCwIHGVUulaYomprf6OkamBJPuzd6omp4F4-jrbzx849BgytQgc1hHfCEljzPHc5D3nZhP0tvP~tBB6Kbz7pqse7RTTiv~dUEoVFxdxnp9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  // },
];

const route = useRoute();
const tag = route.params.tag;

const filteredData = computed(() => {
  if (!tag) return [];
  return mockdata.filter((item) => item.tags === tag);
});
const groupedData = computed(() => {
  return mockdata.reduce((acc, item) => {
    if (!acc[item.sourceCategory]) {
      acc[item.sourceCategory] = [];
    }
    acc[item.sourceCategory].push(item);
    return acc;
  }, {});
});
</script>

<template>
  <div class="wrap">
    <div class="grid grid-cols-12 gap-4">
      <div
        v-if="filteredData.length"
        class="col-span-6 justify-self-center project__text"
      >
        <p class="results">
          {{ filteredData.length }} results for
          <button class="button">{{ route.params.tag }}</button>
        </p>
      </div>
      <div class="col-span-6"></div>
      <!-- 遍歷分組數據 -->
      <div
        v-for="(items, category) in groupedData"
        :key="category"
        class="col-span-full grid grid-cols-12 gap-4"
      >
        <!-- 分組標題 -->

        <div class="col-span-6 justify-self-center category-title">
          <p class="">{{ category }}</p>
        </div>
        <div class="col-span-6"></div>
        <!-- 分組項目 -->
        <div
          v-for="item in items"
          :key="item.id"
          class="col-span-6 photo__container"
        >
          <div class="photo">
            <img :src="item.imageUrl" alt="" class="photo" />
          </div>
          <div class="project__text">
            <p class="project__text__one">{{ item.source }}</p>
            <p class="project__text__two">{{ item.titleEn }}</p>
            <p class="project__text__three">{{ item.titleCn }}</p>
            <p class="project__text__four">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.results {
  font-size: 1.3125rem;
  color: $text-color3;
  margin-top: 23.3726%;
  margin-bottom: 16.3826%;
}
.photo {
  width: 100%;
  max-width: 459px;
  height: 100%;
  max-height: 311px;
}

// 分組標題樣式
.category-title {
  width: 100%;
  max-width: 459px;
  height: 100%;
  max-height: 311px;
  font-size: 1rem;
  margin-bottom: 8.851%;
}

.project__text {
  width: 100%;
  max-width: 459px;
  height: 100%;
  max-height: 311px;

  &__one {
    margin-top: 3.7134%;
    margin-bottom: 6.7715%;
  }

  &__two {
  }

  &__three {
    margin-bottom: 7.426%;
  }

  &__four {
    font-family: $font-Noto;
  }
}

.photo__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24.465%;
}
</style>
