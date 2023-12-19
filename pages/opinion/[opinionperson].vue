<script setup>
import RelatedOpinion from "./components/RelatedOpinion.vue";
definePageMeta({
  layout: "innerpage",
});

const slidesData = ref([
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1704067200&Signature=V2ClWzzXhqwuBaWr6yqF~uwN-4HaZIso4OBVvnfNmLdlNUb3k1Wud504TkCdVvGuf5kPkb7gU-aPGST6J9sn7U7V3IZnd2BIOUIwkQ9e4iE6EiKXq50-cCkcBMDpUbMMkM3czG1Z7kWy8nCq3KjbfYjJ4EnrgbmlxJlp~DB6PdIPf-WXpsCWGWCKdHw1uGNlhHR1Ty48V~RD4Dt~aDpogHShJK7wrHqWnF29YhhjjGzdrxGrDEDDsD8SM9df~0ztWHdp2LmdSZOA~W~fG0C19qaTXGnhB2DWjJpXm0r4Q~gX3hWqRNWRQVan0KLUZGHuo34CPP0k3zK7KglszHE-1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1704067200&Signature=V2ClWzzXhqwuBaWr6yqF~uwN-4HaZIso4OBVvnfNmLdlNUb3k1Wud504TkCdVvGuf5kPkb7gU-aPGST6J9sn7U7V3IZnd2BIOUIwkQ9e4iE6EiKXq50-cCkcBMDpUbMMkM3czG1Z7kWy8nCq3KjbfYjJ4EnrgbmlxJlp~DB6PdIPf-WXpsCWGWCKdHw1uGNlhHR1Ty48V~RD4Dt~aDpogHShJK7wrHqWnF29YhhjjGzdrxGrDEDDsD8SM9df~0ztWHdp2LmdSZOA~W~fG0C19qaTXGnhB2DWjJpXm0r4Q~gX3hWqRNWRQVan0KLUZGHuo34CPP0k3zK7KglszHE-1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1704067200&Signature=V2ClWzzXhqwuBaWr6yqF~uwN-4HaZIso4OBVvnfNmLdlNUb3k1Wud504TkCdVvGuf5kPkb7gU-aPGST6J9sn7U7V3IZnd2BIOUIwkQ9e4iE6EiKXq50-cCkcBMDpUbMMkM3czG1Z7kWy8nCq3KjbfYjJ4EnrgbmlxJlp~DB6PdIPf-WXpsCWGWCKdHw1uGNlhHR1Ty48V~RD4Dt~aDpogHShJK7wrHqWnF29YhhjjGzdrxGrDEDDsD8SM9df~0ztWHdp2LmdSZOA~W~fG0C19qaTXGnhB2DWjJpXm0r4Q~gX3hWqRNWRQVan0KLUZGHuo34CPP0k3zK7KglszHE-1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1704067200&Signature=V2ClWzzXhqwuBaWr6yqF~uwN-4HaZIso4OBVvnfNmLdlNUb3k1Wud504TkCdVvGuf5kPkb7gU-aPGST6J9sn7U7V3IZnd2BIOUIwkQ9e4iE6EiKXq50-cCkcBMDpUbMMkM3czG1Z7kWy8nCq3KjbfYjJ4EnrgbmlxJlp~DB6PdIPf-WXpsCWGWCKdHw1uGNlhHR1Ty48V~RD4Dt~aDpogHShJK7wrHqWnF29YhhjjGzdrxGrDEDDsD8SM9df~0ztWHdp2LmdSZOA~W~fG0C19qaTXGnhB2DWjJpXm0r4Q~gX3hWqRNWRQVan0KLUZGHuo34CPP0k3zK7KglszHE-1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1704067200&Signature=V2ClWzzXhqwuBaWr6yqF~uwN-4HaZIso4OBVvnfNmLdlNUb3k1Wud504TkCdVvGuf5kPkb7gU-aPGST6J9sn7U7V3IZnd2BIOUIwkQ9e4iE6EiKXq50-cCkcBMDpUbMMkM3czG1Z7kWy8nCq3KjbfYjJ4EnrgbmlxJlp~DB6PdIPf-WXpsCWGWCKdHw1uGNlhHR1Ty48V~RD4Dt~aDpogHShJK7wrHqWnF29YhhjjGzdrxGrDEDDsD8SM9df~0ztWHdp2LmdSZOA~W~fG0C19qaTXGnhB2DWjJpXm0r4Q~gX3hWqRNWRQVan0KLUZGHuo34CPP0k3zK7KglszHE-1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1704067200&Signature=V2ClWzzXhqwuBaWr6yqF~uwN-4HaZIso4OBVvnfNmLdlNUb3k1Wud504TkCdVvGuf5kPkb7gU-aPGST6J9sn7U7V3IZnd2BIOUIwkQ9e4iE6EiKXq50-cCkcBMDpUbMMkM3czG1Z7kWy8nCq3KjbfYjJ4EnrgbmlxJlp~DB6PdIPf-WXpsCWGWCKdHw1uGNlhHR1Ty48V~RD4Dt~aDpogHShJK7wrHqWnF29YhhjjGzdrxGrDEDDsD8SM9df~0ztWHdp2LmdSZOA~W~fG0C19qaTXGnhB2DWjJpXm0r4Q~gX3hWqRNWRQVan0KLUZGHuo34CPP0k3zK7KglszHE-1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    company: "Industrial designer｜工業設計師",
    projectName: "Patrick Norguet",
    projectLocation: "派屈克．諾蓋",
  },
]);
</script>

<template>
  <NuxtLayout>
    <div class="inner-wrap">
      <div class="flex flex-col items-center">
        <p class="text__designer">industrial designer｜工業設計師</p>
        <img
          src="https://s3-alpha-sig.figma.com/img/f89d/ec49/1a3b1fa09ea0b02c0cfae9c791ac7127?Expires=1704067200&Signature=MTLyfG7OU8NFPGA6MT-CjQtkzsyBpxwcKzP908wybYuGg9oIyBE0Wgon5XqIl5j7IkIBvvm9ssMt-II5o4zmzf2KDKH8IYJ7BfzRz~5qJA8w-WyYS4At0W~lwwzQA1bo8n6ZLQKsaHxekO-ez1RgqP5dGYOVD6O~cauVQmfCENPkP2Z4Ap1hn3aVRyIJL23CCHy0IOnnbpG3ZLNVHwA4nZjlwsKpMGRK2x83WdbS46tUEHctXyptg4o0Qd9CLI1er-2tt4M2W~JZAfjlCVYjZqZmCQtVYkXfNN~jnEQuD3iV0wPtGigmH1DNolqDi3mzJH-O-WUhrIhrMnO3uDJaVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="photo__people"
        />
        <p class="text__nameEn">Patrick Norguet</p>
        <p class="text__nameCn">派屈克．諾蓋</p>
        <p class="text__photoCn">影像：派屈克．諾蓋提供 ｜ 採訪：洪雅琪</p>
        <div class="text__photoEn text-center">
          <p>Photo：Courtesy by Patrick Norguet</p>
          <p>Interview：Grace Hung</p>
        </div>
      </div>
      <div class="flex flex-col text__content">
        <p class="text__content__one">
          1969年生於法國都爾，在西班牙ESDi設計學院畢業後，他參與了兩大奢侈品牌
          Yves Saint-Laurent 和 Louis Vuitton
          的櫥窗設計項目，並藉此經歷成功奠基他對於品牌識別及展示型態的考究，更將其經驗運用在臨時建築或裝置上。2000年，派屈克因個人首件設計作品雛形「彩虹椅（Rainbow
          Chair）」與義大利設計教父Giulio
          Cappellini結緣，並迅速打開國際知名度。如今，合作對象遍及各產業的派屈克．諾蓋，已然是法國設計界的標誌人物，透過專業、天賦與熱情，他持續拓展設計師作為生活方式推動者的地位和責任。
        </p>
        <p class="text__content__one">
          自從在巴黎結束學程後，派屈克首個工作便是在 Yves Saint-Laurent 與 Louis
          Vuitton
          集團負責活動相關視覺與空間布置。兩年後，他便決定開設個人設計工作室，而當時的社會風氣，恰好是媒體開始宣傳那世代新銳設計師的時間點，造就「設計」這個詞彙開始深植人們腦海，繼而滋養並啟發後來各行業公司的決策者，開響了群體「設計意識」的第一槍。對照今日，商人藉由設計師的專業來販售他們口中的現代性，因此派屈克認為，如今的設計早已失去本質，比起作為一門專業，它在公眾眼中更像是某種「風格」，並沒有理解問題或探詢根源。或許是經歷此現象，造就他從業來始終以非常精確的方式管理職業，透過極高的自我要求，創作出具有意義、誠實且公平的作品。
        </p>
        <p class="text__content__one">
          對他而言，好的設計更貼近歷久不衰。在過度消費的時代裡，設計的價值必須重新獲得整個生產與製造過程的信譽與尊嚴，並不僅是美觀的附屬品。因此，他會與團隊及客戶一起整合許多資訊，以提出滿足當前和未來需求的創意或產品。但是，這目標不單靠理性數據或市場調查便可實現，更須連結長久以來世人積累的文化、歷史和藝術，讓下一代年輕人明瞭，世界並不是從TikTok的誕生開始的，我們有幸生活在一個文化豐富的世界，歷史橫跨各大洲，這才是一切創作素材的起源與基礎。
        </p>
      </div>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/f0fd/fd7e/642e6af1885ea8b8057ccc04849e17d1?Expires=1704067200&Signature=DaY30TvClSmvoJ0iNUXVtEEnCgypY7df6LmI88Gh0JKQm-rBx0XIDEckPQTnlh0diNv7xTK5Qc~wMyseK9~3Yp4tAZ2x-HDfJOn0VkGxpmzuaAk-TTlwInGvYgpGdQhedPax7oR3oj7O1HETASTNWW38qPMQPWB3uAkVxrnqiCjEGWiM3TT~~VX~y~AtKDfDkfEab~-zeNe8VMGNHDb0~njqTg330BeC4ILupcJTVLC7xtydXhBdjDMx40jsENXki4ikl5nuttinqXKQdiColk1NiYTE3zfXgYhhkCkxMiz2s4VelwRXwY2YqBooWUy68jemGu8cll-4ZU2Y~mV~sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="photo"
        />
        <p class="decorItems__text">Cappellini＿Rainbow Chair</p>
        <img
          src="https://s3-alpha-sig.figma.com/img/53d9/2437/cba8ff10aa77674a70a15a8fcd5956f2?Expires=1704067200&Signature=MV9nB61iEXCNkK089QxpCp3HxjzauInGMoTlPikOwWiPu36SK4zZcNjAEPzOTO~wGOKpf5yXa95f-cz2jVyrLXzxFq1JxP58B9-m1tuNZ4qxZuVGoP6AnsLQoTdaDjHF68G-NRC-dkexDYrrluppxBRr00I0vz~i0O03NOS~4RCv4U4V6znphCTYvqmBcRTVJBmpLwHewhQTSM5CGdw9emIgO5PFXm0yK7I~mo2jDS4WvNJ6X2kR1QXyGy3nCfH6Mi-vYOdXmG~iPO6wSXTw5rcEVAQIJ2XBDDsuabA83farRJ59nHnexL6m~ZHroKLMHmGj9~yBjMcnk7~tnRwcxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="photo"
        />
        <p class="decorItems__text">Flaminia＿LUX lamp</p>
        <p class="text__content text__content__one">
          品牌摯愛（Brand
          love）與參與過程，是派屈克創作之路上的兩大熱情。就他的經驗來說，團隊沒有策略，就沒理由非得創新。如有，他會花費許多時間來整理思緒，並保持創意的原始狀態，而不是在過程中疊加不必要的元素。他一針見血說到，如今的家具市場已經呈現飽和狀態，市面上充斥著許多相似、仿冒或追逐流行的產品，因此他更偏好品牌的獨特價值，致力於研究和設計獨有的物件家具。他也透漏自己經常以「作家」的角度審視作品，如同作家透過語言組織文本，設計師則善用專屬的語言體系，向大眾陳述一個故事，或是建構一幅畫面。總而言之，嚴謹的工作態度，讓他能將「對的產品」推向市場，正如前述所說——好的設計，是經得起時間考驗的設計。他相信一個品牌的成功，是立基於產品能夠賦予市場獨特性。
          對於「潮流」一詞抱持負面態度，派屈克認為前者與創作互為天秤兩端。潮流固然是個安全牌，卻受大眾審美標準所牽絆，而創作是冒險，有時甚至會犯錯，但最重要的是在學習過程中建立一套哲學。進一步說，「潮流」不等同「時尚」，時尚是基於社會文化與思想價值演變而來，是設計師以優雅符號記錄的歷史。因此，迎合潮流產生的快時尚、爭奪社群曝光度的網紅現象，只會造就時尚愈來愈不有趣。
        </p>
      </div>
      <div class="decorItems">
        <div class="col-span-6 h-full">
          <!-- <img
            src="https://s3-alpha-sig.figma.com/img/1a28/27b5/fb4d5f375e88d3abe0029b94fe29796f?Expires=1704067200&Signature=AtZIOhzYu8zjJHb9NyGs4-q95zzqygm7wj2MndmQLn2EEpapeetdlL-2OHikm2aqhQjD7gDsTRq2gjfkil6p0MVm4aBpsKVz6HLEJJuRKoxpZ6GbL5FWWbLSAjueT0sZRxqSySwjRfqD50S0nJYKXyF5uGF1Ce79cig76g20~3K0LVb8wI7vRr3ZdDJTySy6Xaftu1WJd1kEC3ZTpmI9KK2idWzhn48f246FpU2Nn8DDKcEyTgq1gJ10sSMkW9x6bAQc6h705Ma8NlIw8PuEoBMpgCMoAV8LZsNHL5KOlqrtLBIm~j2Y~ysAJUfKqrqZVWReqWQi89dQ5DUP0zYnxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo__decorItems"
          /> -->
          <img
            src="../../assets/images/opinionDecorItems0.png"
            alt=""
            class="photo__decorItems"
          />
          <p class="decorItems__text">Zanotta＿DAN 2057</p>
        </div>
        <div class="col-span-6 h-full">
          <!-- <img
            src="https://s3-alpha-sig.figma.com/img/aea4/b2f2/8c0353d37148b5b93fec561ba3a1d943?Expires=1704067200&Signature=o-y5OA4~JXGDEVTXtm7hQGreYBoVcNfk2CJo~C3ph3VbiDGXoKN4kGnn9QkdaIZkx9QeTFDusolyhoouKmDOdjTVf-hUp~Wq2MippWnR51crGShlxSRb8Bgta7yEPrDjX6YEDT3ynUW2xL3JjhambNFPZTx2zLCsHwkSrj6GDSsJorfiFaHsr55X36jmTMG3V20e6wjH7WCe02v3LE0YOpjgLfuyI6Cqo2c5Ph6wwtIXi2IrglBWD1GjgSyY2uaeNMJWpvI1m9k8gQowOXlpGuyjRT~jB1OGf0oFVGziXo7nKPXcakSkTvvzNKKDDASzyVQe8T-ClGrTbhIBxmlT2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo__decorItems"
          /> -->
          <img
            src="../../assets/images/opinionDecorItems1.png"
            alt=""
            class="photo__decorItems"
          />
          <p class="decorItems__text">Natuzzi Italia＿NANÀ Chair</p>
        </div>
        <div class="col-span-6 h-full">
          <!-- <img
            src="https://s3-alpha-sig.figma.com/img/0988/8ece/66e177a8fc6ebf666e2d85f3cc34dfb8?Expires=1704067200&Signature=MNU8~5xN0xWvAL~K1Ix1JR14Fos07kWHkE-5FuS62OHSGFQFlbPAePvFzIO5~roSrhDFhpEzKoIQD0nzg3hWvBkrASZheL~U9OXxDvPvqplFPmbrjQO-4Q4eK4KM0ozTEbCjhvAvhRS07trxTlLrIC7u70mtAZx-4n2oh1Dv9Uj9JItBOfzbPIg8QThclEPxAKCKK-Y5VpzWIOPLmG39PN1oxDfzV6dtWm9FN8HEozXL0QjP4tkXMtuY60FfAI6Y8tcTtmBWM~-fKJCeUlAl8wQdMgfxRUMpNAud-nwiNWb5iZTBmfaC52Ev7F5bSbduZnsxtu4u4Xxkn4ATQiTKog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo__decorItems"
          /> -->
          <img
            src="../../assets/images/opinionDecorItems2.png"
            alt=""
            class="photo__decorItems"
          />
          <p class="decorItems__text">
            Kristalia_Degree＿Container Coffee Table
          </p>
        </div>
        <div class="col-span-6 h-full">
          <!-- <img
            src="https://s3-alpha-sig.figma.com/img/9f65/f13c/350b093e0bde35e327d5779f98c9a417?Expires=1704067200&Signature=TCoiS5k2DL0L-MabweBByWCESBa8srijM-COWlqEY3UH~ByTfS02EGim1NGOHQ5GXFtVcBH8zS83OcseU4l-viF7pNLSLRSTmjX6fkOlG0~XDqVn7Jjvuck7hTrtRXPVDjDnqzmg7imUSLRlU-iniwP8ryMwPjT6iqYn-UiZ0Er82EKtfXLTMdI7DZz-vlEgiGgf6RgmhI3d36gXq45KWcQbwVJpkiNzmRFCfX5wZQbMcmG~-1GweK47tiApNRTj2PrixmdGfsPwMFf~dNArfLWZLQHyiOfl1lYG6A41c7SGgyaYPTbR9lf88symNs3j7l-BhAYOc13Cdwg3EBWZxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            class="photo__decorItems"
          /> -->
          <img
            src="../../assets/images/opinionDecorItems3.png"
            alt=""
            class="photo__decorItems"
          />
          <p class="decorItems__text">Lodes＿Jim Suspension Lamps</p>
        </div>
        <div class="text__content col-span-full">
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
          <p class="decorItems__text">INBANI＿Heritage Collection</p>
        </div>
        <div class="col-span-6 h-full">
          <img
            src="../../assets/images/opinionDecorItems5.png"
            alt=""
            class="photo__decorItems"
          />
          <p class="decorItems__text">ZANAT＿SOVA Chair</p>
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
      <div class="md:block hidden">
        <RelatedOpinion />
      </div>
    </div>
    <div class="md:hidden">
      <StoryOpinonPagination :slidesData="slidesData">
        <template #title>
          <slot name="title">RELATED OPINION</slot>
        </template>
      </StoryOpinonPagination>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.photo {
  width: 100%;

  &__people {
    width: 27.78vw;
    height: 37.5vw;
    object-fit: contain;

    @include max-media(768) {
      min-width: 225px;
      min-height: 313px;
    }
  }

  &__decorItems {
    @extend .photo;
    // height: 100%;
    width: 100%;
    max-height: 648px;
    max-width: 502px;
    aspect-ratio: 502 / 648;

    @include max-media(1024) {
      max-height: 648px;
    }
  }
}

.text {
  &__designer {
    color: $text-color2;
    margin-bottom: 7.0428%;
    margin-top: 20.68844%;
    font-size: 1.375rem;
    font-family: $font-Noto;

    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__nameEn {
    margin-top: 10.6523%;
    // margin-top: 121px;
    margin-bottom: 1%;
    font-size: 1.3125rem;

    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__nameCn {
    margin-bottom: 10.6523%;
    font-size: 1.3125rem;

    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__photoCn {
    font-size: 1rem;
    margin-bottom: 1.5846%;

    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__photoEn {
    font-size: 1rem;
    margin-bottom: 13.0293%;
    font-family: $font-Noto;

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
      font-weight: 300;
      margin-bottom: 5.0611%;

      &:last-child {
        margin-bottom: 15.8161%;
      }
    }
  }
}

.decorItems {
  @apply grid grid-cols-12 gap-4 justify-items-center;

  &__text {
    font-size: 1.0625rem;
    font-family: $font-Noto;
    color: $text-color3;
    margin-bottom: 11.7806%;
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
  margin-bottom: 44.4159%;

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
