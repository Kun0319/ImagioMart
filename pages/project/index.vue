<script setup>
import ProjectShowcase from "./components/ProjectShowcase.vue";
import CategorySelector from "./components/CategorySelector.vue";
import CategorySelectorRWD from "./components/CategorySelectorRWD.vue";
import LoadMore from "./components/LoadMore.vue";
import cover from "~/assets/images/ScopeBg.png";
const isRwdMenuOpen = ref(false);

const toggleRwdMenu = () => {
  isRwdMenuOpen.value = !isRwdMenuOpen.value;
};

// 假swiper 待API
const ImageArray = [
  {
    url: "/images/SwiperPic.svg", // 圖片路徑
    title: "ANA Studio", // 圖片標題
    description: "Cooking and art", // 圖片描述
    descriptionZh: "西澳大利亞珀斯 隱園", // 圖片描述
  },
  {
    url: "/images/SwiperPic.svg", // 圖片路徑
    title: "ANA Studio", // 圖片標題
    description: "Cooking and art", // 圖片描述
    descriptionZh: "西澳大利亞珀斯 隱園", // 圖片描述
  },
  {
    url: "/images/SwiperPic.svg", // 圖片路徑
    title: "ANA Studio", // 圖片標題
    description: "Cooking and art", // 圖片描述
    descriptionZh: "西澳大利亞珀斯 隱園", // 圖片描述
  },
];
// 假project 待API
const projects = [
  {
    id: "1",
    name: "Project A",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1705276800&Signature=euKVEwX2JjmgRN7IXOffLr33LF3jITFiJzBrabAp8lTJ~btDn7lJJyMPZwTyBY3eoSnAlp5PFOPW2OQpRq3NCfVHCZq5Xc2IMK9NXRQhUFVHHPE2w8cgvAvRXEHcvOAw0YJaFSEakR-UeY712X~48mvZDFxpKm6zgh3PzLadZNfpf6V1qaGPXolrodujlEGali-JHPOMthufmzO9xuegC~vAcQRb4hkxf7rR7XqMeH8MeFmhDirshC8JYw79a3~4DwmT9F4e~q0HgJwi1zB-U0-FzeMlplmjN9C9CU1-OjPB0yXHxY~U5UlTzDH6CJTBFs~SCmeXGrKlNmQO8IFj-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "2",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1705276800&Signature=euKVEwX2JjmgRN7IXOffLr33LF3jITFiJzBrabAp8lTJ~btDn7lJJyMPZwTyBY3eoSnAlp5PFOPW2OQpRq3NCfVHCZq5Xc2IMK9NXRQhUFVHHPE2w8cgvAvRXEHcvOAw0YJaFSEakR-UeY712X~48mvZDFxpKm6zgh3PzLadZNfpf6V1qaGPXolrodujlEGali-JHPOMthufmzO9xuegC~vAcQRb4hkxf7rR7XqMeH8MeFmhDirshC8JYw79a3~4DwmT9F4e~q0HgJwi1zB-U0-FzeMlplmjN9C9CU1-OjPB0yXHxY~U5UlTzDH6CJTBFs~SCmeXGrKlNmQO8IFj-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "3",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1418/7132/a717ed446cf44e8f3889a4f5a0fbf303?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ojlHFki1jzsqREbwLbFiF3EiHZYssw28YTW3EpkJqB6OHy4OarNzJHoH9mnsHBLwLznDLCqGZwY9p0rePFjL3EbwOcMVXQGMXlvisALTqle54GjvMfJZA3hhb1~IHkZHeiTqjSN8VFZoXNOi1v52xu-tOWAQXWxk0TdPjXkqL3okdSEbZAZIhOFD4z7Uchy6uuNWqSlgcPimWWNx3vh~FQnGfU51JjRnGMVQ2lh5Ulz3b5D7NPbT0AbhLdEySkl9L1ccJBJcET0-Zw8SrhTK2vZQgJ8z70pNo2EiVKS65Wtm7AFUq9a6Reaa~Vqw9~h81gLGgfEWNKIOn0mDxVGC~Q__",
  },
  {
    id: "4",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ee85/d08d/f553c6b6534b9463f62c166db74f6c81?Expires=1705276800&Signature=M5DXAzIJfoFRxwvmt9lBbOzAPHLMgQIBqeI9WooIm1gV~-nHsyWJNQo~pUh0cL7XMENGV0huNrIJZrl6adm7Axjt9S~gU6NhdHjupTm0LHAsLVeeoNEQwxnIB3air47K2grQwwLIuaw9-ezH7e24cvXJTzgp6-knQVRubtUQhJDkHaT3B7qPWR-PBaAUjI0Fa0-9D-OTyrf4~glwlEh5bB2u4j0XUbAjhuZ4O2EOY6oeWzFqAESxde9AJfcSJsQG~VOgTtoN~pXx3kVBLG9A2uxZpREYx1KkJ2Rr-tCZ7AtZQUPCwEhK2pF6mnrlQ0EqIpxOTT-RaRcodgL4c6-tBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "5",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "6",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "7",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "8",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "9",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "10",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1705276800&Signature=euKVEwX2JjmgRN7IXOffLr33LF3jITFiJzBrabAp8lTJ~btDn7lJJyMPZwTyBY3eoSnAlp5PFOPW2OQpRq3NCfVHCZq5Xc2IMK9NXRQhUFVHHPE2w8cgvAvRXEHcvOAw0YJaFSEakR-UeY712X~48mvZDFxpKm6zgh3PzLadZNfpf6V1qaGPXolrodujlEGali-JHPOMthufmzO9xuegC~vAcQRb4hkxf7rR7XqMeH8MeFmhDirshC8JYw79a3~4DwmT9F4e~q0HgJwi1zB-U0-FzeMlplmjN9C9CU1-OjPB0yXHxY~U5UlTzDH6CJTBFs~SCmeXGrKlNmQO8IFj-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "11",
    name: "Project A",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "12",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "13",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "14",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "15",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
  {
    id: "16",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n61Cl-f5bI32GDUQz~EwOVX2qgsHRz3BmVvyWut6N0jis9QAQMBqsSDm5ud7V0fkQHQrIO8Xdxa8S601o74IC79xHTyP5sP1YeUq-bf-OHMy1dS6p-bJaH~N191ZP6L11iWCfppDQTrXVdo1RTukTvabZORJorqLtw0cZ7G9e3aB-ztu8sS~BMHQRvehYjyFwp81pZT7vWk9L6GP3ueogvCjnbtweMRFUQGY73Ge8M6TCpbbNES9z-EUOng9ZkRRYO4cybY1KUqcqOlTxvmF8sQdBKpTxqD1XYbm4Hewlqa3ceudUfxBTOArm0X4TlJAsxGwKKn0J5nrKZDiHCas3A__",
  },
];
// 小螢幕前7個
const firstSevenProjects = computed(() => projects.slice(0, 7));
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :imgSrc="cover" />
      <BreadcrumbLine
        text="Home&nbsp; /&nbsp; Project &nbsp;/&nbsp; Scope"
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
        <SwiperPic :images="ImageArray" />
        <div class="grid grid-cols-12 gap-4">
          <div
            class="md:col-span-9 col-span-full grid grid-cols-12 gap-4 rwd-margin"
          >
            <!-- 子組件 -->
            <div
              v-for="project in projects"
              :key="project.id"
              :class="[
                project.id % 2 !== 0 ? 'md:col-start-1' : 'md:col-start-7',
                '  md:col-span-6  col-span-12 ',
                'md:justify-self-center',
              ]"
            >
              <ProjectShowcase :project="project" />
            </div>
          </div>
          <div class="col-span-3 md:inline-block hidden">
            <CategorySelector class="col-start-10 col-span-3" />
          </div>
          <LoadMore class="md:col-span-8 col-span-12" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
// 12/20
:deep(.icon__one) {
  @include max-media(768) {
    display: flex;
    justify-content: space-between;
  }

  // margin-bottom: 2rem;
}

:deep(.line__text) {
  // margin-bottom: 1.7551%;
}

.rwd-margin {
  @include max-media(768) {
    margin-top: 31.0318%;
  }
}

.rwd-menu {
  display: none;
  position: absolute;
  top: 225px;
  right: 0;
  width: 90%;
  padding: 5%;
  margin-right: -10%;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  box-shadow: 0px 13px 2.799999952316284px 0px #00000040;

  @include max-media(768) {
    display: block;
  }

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
