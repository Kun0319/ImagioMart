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
    sourceCategory: "IW / 設計案例",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/158c/1832/64628bf6f50d1a13227fbf0124afc804?Expires=1704672000&Signature=IywQGx6YDtclBMbTt9uUcZq~LHIzcqSMPJO-ZjKYc8h-UITuQe9v42HXMAyqXWWxYbX31HDNNHOyeFwftQIogQ5HUcPnPfLYhbeT1~LiF43j7TIeHRe2X2xW5RH3Tv3mMbP2wGgEZ82N4i9C3bYdjLOWDC8dQGwHqrNxgaDEyOJ0vKk3Rkix3PkvO7XTNtk11kXFJ1OvaaSnXLPVZwpphUhP-oTFyc-lAmVUeBXFSSCS6bO3-3NFIUxTp-6pDVYu1JMznJ1D5BBwFiPM5aq6JSEXAxPbITPK36MkTHEmuE10NbJKISiyKa2HaBEM5qS2lIPzq7oD9aYdKbcQ7lRI2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 設計案例",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4f74/36c3/042f8fc78ee7f2b12b5ee5eee34c2398?Expires=1704672000&Signature=KJGtTBOttRXJqv-2eKtUNBW9o9TUF4587Pc1o5yBpMpeg8mWZN0QZbPvsP8ubRsP3hF6-PO2TH9ow3kGgwOMdeGGnSC9dyQ4YjYZOjJvN4iUsjQUiFyxnUwZtJKZimy3JJP5d9dUiQlMu~F6-gan03qLfxKO-2PxQVo7noQf8wssxPZO1iERImqIEzhnkWR0ffNlS50QoZiavwrgis~YMkpL-MBgTRG0YCL11kEuPwZvKUCTs3AgMAyGs03yjSsFnSm91Va-2PE3IPa6ETQ0eWby~ehJTxBTdcnFpgqP3R557lH0XEVHWRH3J0EwKJLMM40sPZyPV0pL8D6HN2LSOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 設計案例",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ec6c/869f/520f09390bf518fd3425b9ef6fc087a5?Expires=1704672000&Signature=R1x0jIhd5McOol3lgpMYl7n0PG2zEliIXZS64huis-~4VnhtGigKPQ3e4IKJGEfkp7k3FuVpwftbzXnbEyabke1ZiIVJ-e9zOq9m9273FAqIKZPe5yEvCm4habsttJjX1H1EI43-drPWUhWFsnBGlSPhj9bVxrkpCbMt5QgHlOiLdggvd4UrT~xa3L7TH1OmEUA-d170g6oK2teo-FkYg4THc8OjmZwJ8e1KX5Dc-Ae9epT9zQm7574iSPjCG4aaoRqxA3Rj4OoGyArXc-jiQCQPeyTkFh1eN9kYVijgL~UphX7TErKlCAPgs84QDyXWdSyBAirrppLEgOWmFVFR3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 4,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 設計案例",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6978/8ba5/7426b86d2eedbdaad79e745a45f41c20?Expires=1704672000&Signature=M8kQjneAONUEf~v5vbdbI8dd-dltzsau0uXrVdnIq0EaA~MZ6RH0nIlD0zVHMM38OoppITLeMDy1sgWBqt5mem3ymCEUJTdM8F1sC11oRdVr~yldKqOfK-k8GaWxQxh0voO6lW9v76EFiwTYO85Vk9xOitp6zAiQz2tuCjK7QCqnhJz9crzvp4hrzMerDQ1zRpAEJcGVqyQ7P-MPrSyWpcFM87TR4sBDfxDIsdh3qP~H8m5jL1GAf8vmoOaOVEkYU3tRVG6sXbUIQ3b4TfLbV7RR2UgXYjbzljikd1BaBiF1Yje5CXlhk~BImxky-6bmQU2d488ONUa3I0us6bomqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 5,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 設計故事",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/80f8/30bd/b079b304eef96a70e59578f5d5d1e10e?Expires=1704672000&Signature=kQlhlKiIm2anMt-QMEhcVslfNy-QHvUxzAdyFLe3pcPiOvELZABUkrqlMwERRjTZ0GdTOZsv-~yMyjwd2~UwIKZZU1BkqCRLZi3-OTn6vgXNRZTLPr4D4NNdkS2iWI3JBqTzC-KB1gVhfaXafG0BZJGTfvoCUFB3IToaoggP1RVkKOvFMce6Lqm4Ai6aSFiDC~j7VCndeObbCBA5y2S~S262HPzBzstCBYsoeHcF9wnGunvN46OqHhIWK1u9Q1zeB~vfiJ-Cejr~xHr-idOXu3W~KfCfAb~WfmFHJt3R-9dxEhYafn3sUvgZPJ2DYoK5xnJ3HT7cRi4i9aqs2IV9ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 6,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 設計故事",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/018e/9014/ab8d7e900e4b87dadaf8f651be9799a7?Expires=1704672000&Signature=IKx3sgWiGX9l5fx7d42XboYm9C-S05UQLBdqi5w1EUr7rjq~jKSmCxiB0dEWj~cpFcxBj9GGQHaO~dQgcFDVZ~~gUfnwtvqjiNpuRmSseo7UiurMB4yJ6BjClYHa5PPAfpVuTYQ8K1THIqXcYK1XJSCd-0U7j2YLrg5i~IpQwEBQHih8sSlOib1EHA~YB3SkimRJbs2RgO4Rms2ZUTRLrQIZUWYip3C~U0HRWzz5f-si07WKJlnpIjpKcuL~wQbYwIbQMuM6iG1pvLnDKiai3g52Ar2T7YwLKTdEYpj~rtpoHVFAvFTvf3HP2OBzH4GUp9hYsWeNBzB6WZUeo4WEZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 7,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 設計故事",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2a65/b96f/ffb8c4d2780970b682dc3273c4b96cd1?Expires=1704672000&Signature=mtXjfx5ViZoKdWrPvipSM63Z3ayYtYXt4DEmnPwIDTLdmnaMcMjrY690tjqYouBW8tZ3gIvJpf98l6sSH6XMC5O~OVPtx-nnzzZL8xNw68GW4aW1QcEdIfasWxHCL1X0Le2vwyeKlBEwxHeMHXtqNd7VVIgZtaxry4z7NMhsHXPC68iVfizrHlLqYwuTcmTMA2f8I15qzJS107artF25XjdR0YJ-OkAh20QcwirJMKW~zZgrd2FXWJkTAEiWe16j1uCyTc-X5zwyfm3hQbVLmtS9M~4DMcSVqy9vooh73fpP7h~Fr6tAaTOBIc7z69Qf9jefRLOy0GeDuwHzIQNGtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 8,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 設計故事",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/94df/8492/4275b31ea60360460d8735219699f9cd?Expires=1704672000&Signature=ptI3I12IXrZsGL7VzoHdKkQ4cs8G3znVDSu0J16D1hZafKBOdQi66zHHIcQ488EU3REeMidM0JmIlk5vylbn83JDBSr715hP~fNfmLHeO1Pgxzk1mOVr-UEyjSwC7NcgqWXGv~JIhz2iknmf0HwX5UAdVDsz5HOAHRXQEjw71ftELnwV2XJOTsLjB18IJO7OFP02~MYLVvf~ZLCH1DmnAYAXFg-1yXcF56INLRtqVxufWlXAMm0Ewqilri98VPXPwCV7Qw-zKCKKk--YSeLT0gGh2Ol~KyOPxzW7ooOMxR1~HvhgfK~xP4Sd7yAiYQzzMz1V5fqDRQDOk~eyxl5Smw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 9,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 新訊",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8ef9/7969/3906e781d064f114ae0c826596b55bdc?Expires=1704672000&Signature=grGTkninHgvKaxVUvmZoAeXr2aR~QurzeBh4r7fjxjxF7NIaS3N9a2C04QK2wE396By~Qn~7-Y0qQGGrpWDOHO6dFX~QtzzeBD6mX0G-Ojfgil8xw4NkRFltANkB2UpKNMO1tzDYZTPMkuLjAHmwTYCWwYo6wHBRQAPKent5MsRqFFu4Uy2PjzL2Y-7KrXh~m7ZApAMJ75OyjY8AYHZpUhJAZC26MmX~zXBaHsQWSJPmcYmbXE9CpLUKK5O~hF03ZV1TlVnvlzuvTuiOPG2gqeYC36KgIzTsUGyU6vor2Es8VPg5wgJNBQxbfb-hDxIpiwZGdo4LruKNL894633lgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 10,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 新訊",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39f9/887d/ae321ff0552e7ada504d5820ebc195c8?Expires=1704672000&Signature=fj4Ju2R8K2FUK838uLV2ccPcYaH-uijHzW08Ia1XHmBF-fdh0mmSuKT8afa5RHouHLJ2nkjGbhBewFEoUzF51fc0NpaaaK2Qyk2~~Rvd8WS3ducNINpKX74cvrOBPYLppSAZVo~LWSSj4Zi0luCvJdsIGzvFv7pGmHV03eSHqDofpJ0jz8l0tOCF-eusDmIPPrt3O4Cy88vhjws7bELxhaM8Jd1dG4f7-DZJ1NAfZQfDrqZtLuQAxwBguozAkXuDPRt-ElwmBeb4G0IJiZCFZVfS3FoeHol1yjA5F0JEEiF0MavEo7Estiel6RUrbk1Mgl0Oa5BliTEu5a4X~ZwrZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 11,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 新訊",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/158c/1832/64628bf6f50d1a13227fbf0124afc804?Expires=1704672000&Signature=IywQGx6YDtclBMbTt9uUcZq~LHIzcqSMPJO-ZjKYc8h-UITuQe9v42HXMAyqXWWxYbX31HDNNHOyeFwftQIogQ5HUcPnPfLYhbeT1~LiF43j7TIeHRe2X2xW5RH3Tv3mMbP2wGgEZ82N4i9C3bYdjLOWDC8dQGwHqrNxgaDEyOJ0vKk3Rkix3PkvO7XTNtk11kXFJ1OvaaSnXLPVZwpphUhP-oTFyc-lAmVUeBXFSSCS6bO3-3NFIUxTp-6pDVYu1JMznJ1D5BBwFiPM5aq6JSEXAxPbITPK36MkTHEmuE10NbJKISiyKa2HaBEM5qS2lIPzq7oD9aYdKbcQ7lRI2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 12,
    titleEn: "Get some more sleep",
    titleCn: "多睡一會",
    source: "Industrial ｜ ADEVA",
    tags: "Dining",
    sourceCategory: "IW / 新訊",
    description:
      "The location of this private house is unique: even though the site is just a couple of kilometers away from Hämeenlinna city center.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/80f8/30bd/b079b304eef96a70e59578f5d5d1e10e?Expires=1704672000&Signature=kQlhlKiIm2anMt-QMEhcVslfNy-QHvUxzAdyFLe3pcPiOvELZABUkrqlMwERRjTZ0GdTOZsv-~yMyjwd2~UwIKZZU1BkqCRLZi3-OTn6vgXNRZTLPr4D4NNdkS2iWI3JBqTzC-KB1gVhfaXafG0BZJGTfvoCUFB3IToaoggP1RVkKOvFMce6Lqm4Ai6aSFiDC~j7VCndeObbCBA5y2S~S262HPzBzstCBYsoeHcF9wnGunvN46OqHhIWK1u9Q1zeB~vfiJ-Cejr~xHr-idOXu3W~KfCfAb~WfmFHJt3R-9dxEhYafn3sUvgZPJ2DYoK5xnJ3HT7cRi4i9aqs2IV9ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
  <div class="inner-wrap">
    <div class="grid grid-cols-12 gap-4">
      <div
        v-if="filteredData.length"
        class="col-span-8 justify-self-start project__text"
      >
        <p class="results">
          {{ filteredData.length }} results for
          <button class="button">
            {{ route.params.tag }}
          </button>
        </p>
      </div>
      <div class="col-span-4"></div>
      <!-- 遍歷分組數據 -->
      <div
        v-for="(items, category) in groupedData"
        :key="category"
        class="col-span-full grid grid-cols-12 gap-4"
      >
        <!-- 分組標題 -->

        <div class="col-span-4 justify-self-center category-title">
          <p class="">{{ category }}</p>
        </div>
        <div class="col-span-8"></div>
        <!-- 分組項目 -->
        <div
          v-for="item in items"
          :key="item.id"
          class="col-span-4 photo__container"
        >
          <div class="photo">
            <img :src="item.imageUrl" alt="" class="photo" />
          </div>
          <div class="project__text">
            <p class="project__text__one">{{ item.source }}</p>
            <p class="project__text__two">{{ item.titleEn }}</p>
            <p class="project__text__three">{{ item.titleCn }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  margin-left: 5%;
}
.results {
  font-size: 1.3125rem;
  color: $text-color3;
  margin-top: 23.3726%;
  margin-bottom: 16.3826%;
}
.photo {
  width: 100%;
  max-width: 26.57vw;
  height: 100%;
  // min-height: 18vw;
  aspect-ratio: 16/10;
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
  align-content: center;

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
