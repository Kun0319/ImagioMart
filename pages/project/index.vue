<script setup>
import Background from "./components/Background.vue";
import ProjectShowcase from "./components/ProjectShowcase.vue";
import CategorySelector from "./components/CategorySelector.vue";
import CategorySelectorRWD from "./components/CategorySelectorRWD.vue";
import LoadMore from "./components/LoadMore.vue";
const isRwdMenuOpen = ref(false);

const toggleRwdMenu = () => {
  isRwdMenuOpen.value = !isRwdMenuOpen.value;
};
// 假project 待API
const projects = [
  {
    id: "1",
    name: "Project A",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/133c/aae5/b5c0d95ffc5aaf1bba7bf39ccc61c2e1?Expires=1702857600&Signature=S7ZJrdNDsVWPRHHB81vtE8I7xa0qYGCec6fRzE8ug7U7~cJuBjWEoNhDOfpMin3HJBe3SzzU8Qcc6iqb-cHjFPzx0Ii~K-aJLyIYaVF8TWyVuoWmHWtKAfnaWUVf-K6VZ6B-Akr4pv9-KfRgeAJp2Bb9c5F0XQ-beL7cbbuAlzL9UtN51-M9w~EXlW4nKV44GMkUeQ-Zt7Ds85GAWYFUMJfCvSfM8rLtYI7VuAju4ESM1tqiZHO6VLFCTwVI74H9F8nJfX9vFD6aMPVe8ebXeau4tqrWqXyuuow~KllLewVVLpBbf4zJeCCOzaSJqZdsVYr5BTrgVD0b6NRCsfUbDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "2",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1702857600&Signature=pOOvXeUmm6t77KwVzj1AVy-Oe3Kcgh81Qv4tmNCr19vuCS8dpDNrmWMrz0gtmOKyo8~5wcDGzEDESaWUQYuVJ~WUVtH8wsnMRv5ba13TOR0WLzeV5oIzHioAyL-Evqg04POIhurdxilG5Z2yxvnbctpNB9lHObIei1Pep1YQpV2F14N-VJmQvB1BUAMIZhAzBir8WGT40FwbV0tJRR3pzf3UotaWJFiusLCTvVOxof87qGaEEfIbtrwIMHj0H5kmK2PPOu0UNYBoL2Bmmotp0DFxUxwa52XV2LWRArM7Vu12HAOYn6t1oV5o76h99h9Ay8KXVkHAqxgcvq-skH13bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "3",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ee85/d08d/f553c6b6534b9463f62c166db74f6c81?Expires=1702857600&Signature=DJJCyCQZRBQqnf7TKDmtesP7T2CIKvgjQgpsMLQzxwEiXaLxDITZhI0MbsAqR74cRSmPqlsZmcva7Dt2o4y4cpRaICbNPP08oVWTCkG9UY9kRXGP4JI5s0fw3ZPWIk0duqfhVsjGkFgtBpW8DH~IpISMvqGzHmsb8BHi2STGl1ktaIn1vRR~C26PEHwH8btaROVD00SPGnClWu0T0TGpuYQHhQS7TX-h4TnZ0aek~nLwcv08JK0G1Xhpk-JcVysKrMjTdxOEbnXJIiwkKFcVROpNWt8QtO9Lmtp8AfPI9pyFELMWx4XpNyq-P7UDnbXrXonayHekuDZX3a67iP~BMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "4",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d171/25f7/a79ff4c276ef76dccb32f40c761e3fa4?Expires=1702857600&Signature=G9imA7bC20EC6u5bxKcLxPuMeiTuE75y5mniVY7rX1R1PQ~AET~7BPSb5XeCtYaABxhfb6Xyhq6eenuPnTHx-O8NOYEMWjXenc6uU3CdC3GpNtIjRVdiwPRQdFBilL6x~RZkHhm15DJ0nDFo6NPpyCoa5Eit2xvTjXnQ94NMSsPxROZpdELH1iX2bzR2InzrYUmpFkQrk29vkyuRX-WY45fCmKAbD8eyyoR~UsKXQYGCBNnqKP9xV8joqAoiGLdC6teWBXa~lWdZ-oeD-LtCj08isCNvnjN-QjsEbP2FOWHpa8Hcq1to7ZMfQZG2a2WruUli8Lvytug5V2iFZ5gOpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "5",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e1c/e8e7/bfe5fe2c18e02b697cf526a6f564455a?Expires=1702857600&Signature=BblswK09-AsWKId8DHChtRCeamPo6sdCTGxmRLAxDdNa4Iyp-yPhxL9lcPRDnkBSc29KR7tgaIGjwJ~qoZ14-OPKa7-SBY3unXmQlFElYhaHmi~LZYe3s-aVEppPYwTe6Wf-OuOSWX2na~Mi6B4aGWw1mbCIqEApUPtbHMwddjBLfTh0qNwJtQ75sxID8KkuFl1PDUGw-p-ntjOrNJllI9AhXeRxLaRcLBnQpCWGoQ1NlUimwItqzb39eczZRO-7xQwZBhC3jt-t7w5Z-T6CwrAep~v8wHf1S0pHve-ncx7QZMVPzS2UgbooXEANNfN30SXb7CmYUA6TCrlNgaRGmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "6",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1418/7132/a717ed446cf44e8f3889a4f5a0fbf303?Expires=1702857600&Signature=lik3IC4FM~U-dgF86N8AtxuVQYThHdEBZ4WiRgVHbTjbx6FDb5jk3gqhdtWyEnd7i~DvM4WQg9qy-oG092~a9uT28py5rIzdgVzVwP8i~Ah4zSKYGGtBx5MNj59TVhTsA7adwO5gV9aiRHHHYiz3qY6ijyJGfXsqeVM18zjUsVVDzJfc3zjkuSQocQ51j5q7sPRMnuzJnnpEExKbHTHMsj4aB~cjKMz8Eg3tybelEVCowcciTm8r103Y5thD5IHYA7nKupvsHVQ7hAw~Zfr5kYQCiwiBWEG8q1FR55EbTfpFnpJrUuJJhTfmoD-euc6WIW1nWK3qzcq6CWF54NczoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "7",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/347f/4785/ec22566614e99f57dd7e88f129b9e188?Expires=1702857600&Signature=fmebmfPDjsKGTddkMcezKHx14AqsD1GDpt1FZVwJ-ByAPCZCYdsf1FCEDesXWqyLQ7QOzdxZzio11xXXN3~ZRl~dvRutdPOUJiHklVkREUd-yvg4T0RpT9FRjHGCdBS~p7kqTK~hPBsSsLzEcPmgjK7fubbqYKdyB0Ilx9iNpER5KzBWVoEV2IDOvaj-4EtlLGOgH3ihpIJh1o6f6FHay2rpjUZ8VR1DBq~~uKtyJHzVhUuRFZIKTAU1rcYPInSropDICNAXwTzDSc8I806qOTaEPdZPDo5x~kpfgHegGgqoYuU75FmRqO2TvlYJZYZpyHUmz-SToWFGprNImqURTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "8",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e1c/e8e7/bfe5fe2c18e02b697cf526a6f564455a?Expires=1702857600&Signature=BblswK09-AsWKId8DHChtRCeamPo6sdCTGxmRLAxDdNa4Iyp-yPhxL9lcPRDnkBSc29KR7tgaIGjwJ~qoZ14-OPKa7-SBY3unXmQlFElYhaHmi~LZYe3s-aVEppPYwTe6Wf-OuOSWX2na~Mi6B4aGWw1mbCIqEApUPtbHMwddjBLfTh0qNwJtQ75sxID8KkuFl1PDUGw-p-ntjOrNJllI9AhXeRxLaRcLBnQpCWGoQ1NlUimwItqzb39eczZRO-7xQwZBhC3jt-t7w5Z-T6CwrAep~v8wHf1S0pHve-ncx7QZMVPzS2UgbooXEANNfN30SXb7CmYUA6TCrlNgaRGmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "9",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1418/7132/a717ed446cf44e8f3889a4f5a0fbf303?Expires=1702857600&Signature=lik3IC4FM~U-dgF86N8AtxuVQYThHdEBZ4WiRgVHbTjbx6FDb5jk3gqhdtWyEnd7i~DvM4WQg9qy-oG092~a9uT28py5rIzdgVzVwP8i~Ah4zSKYGGtBx5MNj59TVhTsA7adwO5gV9aiRHHHYiz3qY6ijyJGfXsqeVM18zjUsVVDzJfc3zjkuSQocQ51j5q7sPRMnuzJnnpEExKbHTHMsj4aB~cjKMz8Eg3tybelEVCowcciTm8r103Y5thD5IHYA7nKupvsHVQ7hAw~Zfr5kYQCiwiBWEG8q1FR55EbTfpFnpJrUuJJhTfmoD-euc6WIW1nWK3qzcq6CWF54NczoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "10",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1702857600&Signature=O0cPWQEc4MlM-DflsMmuEciGjfjRdbV4M4UxW5Jr7fdgVDEAJ3TQyGQi2xwiv20VWSE6UfLZSJEYMvxa1yoO4hffeWNKCzMwWKGLsty2L8FEBeF11aUzkG8zwJ7TiQA4wSmWzdb21U13TPP8jX9IXWvuLXQ2FwTuxWHfcfMrqWqGOWCMdWo9yK-AKZn589NpsbfbtxVeleGk11MWaV0kUFHVXxy1B4d5V-52HEoNTwl~jGlFYd1Joxm1PbGn-PwQL0kbdKiLE~B3Q-sYHtq7QfQQsjH7anvOv~88~WSuX~zBpnhR4MEgDn-BVVWnlHPg0TBnd~SyXWAzlFGevnJehg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "11",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1702857600&Signature=O0cPWQEc4MlM-DflsMmuEciGjfjRdbV4M4UxW5Jr7fdgVDEAJ3TQyGQi2xwiv20VWSE6UfLZSJEYMvxa1yoO4hffeWNKCzMwWKGLsty2L8FEBeF11aUzkG8zwJ7TiQA4wSmWzdb21U13TPP8jX9IXWvuLXQ2FwTuxWHfcfMrqWqGOWCMdWo9yK-AKZn589NpsbfbtxVeleGk11MWaV0kUFHVXxy1B4d5V-52HEoNTwl~jGlFYd1Joxm1PbGn-PwQL0kbdKiLE~B3Q-sYHtq7QfQQsjH7anvOv~88~WSuX~zBpnhR4MEgDn-BVVWnlHPg0TBnd~SyXWAzlFGevnJehg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "12",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1702857600&Signature=O0cPWQEc4MlM-DflsMmuEciGjfjRdbV4M4UxW5Jr7fdgVDEAJ3TQyGQi2xwiv20VWSE6UfLZSJEYMvxa1yoO4hffeWNKCzMwWKGLsty2L8FEBeF11aUzkG8zwJ7TiQA4wSmWzdb21U13TPP8jX9IXWvuLXQ2FwTuxWHfcfMrqWqGOWCMdWo9yK-AKZn589NpsbfbtxVeleGk11MWaV0kUFHVXxy1B4d5V-52HEoNTwl~jGlFYd1Joxm1PbGn-PwQL0kbdKiLE~B3Q-sYHtq7QfQQsjH7anvOv~88~WSuX~zBpnhR4MEgDn-BVVWnlHPg0TBnd~SyXWAzlFGevnJehg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "13",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1702857600&Signature=O0cPWQEc4MlM-DflsMmuEciGjfjRdbV4M4UxW5Jr7fdgVDEAJ3TQyGQi2xwiv20VWSE6UfLZSJEYMvxa1yoO4hffeWNKCzMwWKGLsty2L8FEBeF11aUzkG8zwJ7TiQA4wSmWzdb21U13TPP8jX9IXWvuLXQ2FwTuxWHfcfMrqWqGOWCMdWo9yK-AKZn589NpsbfbtxVeleGk11MWaV0kUFHVXxy1B4d5V-52HEoNTwl~jGlFYd1Joxm1PbGn-PwQL0kbdKiLE~B3Q-sYHtq7QfQQsjH7anvOv~88~WSuX~zBpnhR4MEgDn-BVVWnlHPg0TBnd~SyXWAzlFGevnJehg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "14",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/347f/4785/ec22566614e99f57dd7e88f129b9e188?Expires=1702857600&Signature=fmebmfPDjsKGTddkMcezKHx14AqsD1GDpt1FZVwJ-ByAPCZCYdsf1FCEDesXWqyLQ7QOzdxZzio11xXXN3~ZRl~dvRutdPOUJiHklVkREUd-yvg4T0RpT9FRjHGCdBS~p7kqTK~hPBsSsLzEcPmgjK7fubbqYKdyB0Ilx9iNpER5KzBWVoEV2IDOvaj-4EtlLGOgH3ihpIJh1o6f6FHay2rpjUZ8VR1DBq~~uKtyJHzVhUuRFZIKTAU1rcYPInSropDICNAXwTzDSc8I806qOTaEPdZPDo5x~kpfgHegGgqoYuU75FmRqO2TvlYJZYZpyHUmz-SToWFGprNImqURTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "15",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e1c/e8e7/bfe5fe2c18e02b697cf526a6f564455a?Expires=1702857600&Signature=BblswK09-AsWKId8DHChtRCeamPo6sdCTGxmRLAxDdNa4Iyp-yPhxL9lcPRDnkBSc29KR7tgaIGjwJ~qoZ14-OPKa7-SBY3unXmQlFElYhaHmi~LZYe3s-aVEppPYwTe6Wf-OuOSWX2na~Mi6B4aGWw1mbCIqEApUPtbHMwddjBLfTh0qNwJtQ75sxID8KkuFl1PDUGw-p-ntjOrNJllI9AhXeRxLaRcLBnQpCWGoQ1NlUimwItqzb39eczZRO-7xQwZBhC3jt-t7w5Z-T6CwrAep~v8wHf1S0pHve-ncx7QZMVPzS2UgbooXEANNfN30SXb7CmYUA6TCrlNgaRGmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "16",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1418/7132/a717ed446cf44e8f3889a4f5a0fbf303?Expires=1702857600&Signature=lik3IC4FM~U-dgF86N8AtxuVQYThHdEBZ4WiRgVHbTjbx6FDb5jk3gqhdtWyEnd7i~DvM4WQg9qy-oG092~a9uT28py5rIzdgVzVwP8i~Ah4zSKYGGtBx5MNj59TVhTsA7adwO5gV9aiRHHHYiz3qY6ijyJGfXsqeVM18zjUsVVDzJfc3zjkuSQocQ51j5q7sPRMnuzJnnpEExKbHTHMsj4aB~cjKMz8Eg3tybelEVCowcciTm8r103Y5thD5IHYA7nKupvsHVQ7hAw~Zfr5kYQCiwiBWEG8q1FR55EbTfpFnpJrUuJJhTfmoD-euc6WIW1nWK3qzcq6CWF54NczoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
// 小螢幕前7個
const firstSevenProjects = computed(() => projects.slice(0, 7));
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Background />
      <BreadcrumbLine
        text="Home&nbsp; / &nbsp;Story &nbsp;/ &nbsp;Furniture"
        :showTags="true"
        :showIcon="true"
      >
        <template #icon>
          <img
            src="~/assets/icon/sliders.svg"
            alt=""
            class="md:hidden block relative"
            @click="toggleRwdMenu"
          />
        </template>
        <!-- 類別按鈕 -->
      </BreadcrumbLine>
      <div
        v-show="isRwdMenuOpen"
        class="rwd-menu-overlay"
        @click="toggleRwdMenu"
      ></div>
      <div v-show="isRwdMenuOpen" class="rwd-menu">
        <CategorySelectorRWD />
      </div>
      <div class="inner-wrap">
        <SwiperPic />
        <div class="grid grid-cols-12 gap-4">
          <div
            class="md:col-span-9 col-span-12 grid grid-cols-10 gap-4 rwd-margin"
          >
            <!-- 子組件 -->
            <div
              v-for="project in projects"
              :key="project.id"
              :class="[
                project.id % 2 !== 0 ? 'md:col-start-1' : 'md:col-start-6',
                ' md:block hidden col-span-4  ',
              ]"
            >
              <ProjectShowcase :project="project" />
            </div>
            <div
              v-for="project in firstSevenProjects"
              :key="`mobile-${project.id}`"
              class="md:hidden col-span-12"
            >
              <ProjectShowcase :project="project" />
            </div>
          </div>
          <div class="col-span-3 md:block hidden">
            <CategorySelector class="col-start-10 col-span-3" />
          </div>
          <LoadMore class="md:col-span-8 col-span-12" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
:deep(.icon) {
  display: flex;
  justify-content: space-between;
  // margin-bottom: 2rem;
}

:deep(.line__text) {
  margin-bottom: 1.7551%;
}

:deep(.line) {
  margin-bottom: 10.24%;
}

.rwd-margin {
  @include max-media(768) {
    margin-top: 38.8457%;
  }
}

.rwd-menu {
  display: block;
  position: absolute;
  top: 200px;
  right: 0;
  width: 90%;
  padding: 5%;
  margin-right: -10%;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  box-shadow: 0px 13px 2.799999952316284px 0px #00000040;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #d9d9d9b5;
    z-index: 100;
  }
}
</style>
