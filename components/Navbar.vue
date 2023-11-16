<script setup>
import { useGlobalStore } from "@/stores/global.js";
const globalStore = useGlobalStore();

const menuLists = ref([
  {
    link: "issue",
    name: "Issue",
    children: [
      { link: "../", name: "IW" },
      { link: "../", name: "DETAIL'" },
    ],
  },
  {
    link: "../",
    name: "Project",
    children: [
      { link: "../", name: "Scope" },
      { link: "../", name: "Space" },
      { link: "../", name: "Art" },
    ],
  },
  {
    link: "../",
    name: "Story",
    children: [
      { link: "../", name: "Furniture" },
      { link: "../", name: "Interior" },
      { link: "../", name: "Product" },
    ],
  },
  {
    link: "../",
    name: "Opinion",
  },
  {
    link: "../",
    name: "Competition",
    children: [
      { link: "../", name: "IW" },
      { link: "../", name: "Other" },
    ],
  },
  {
    link: "../",
    name: "News",
  },
  {
    link: "../",
    name: "About",
  },
]);

const isLanguageVisible = ref(false);
</script>

<template>
  <header class="wrap grid grid-cols-10">
    <nuxt-link to="/" class="col-start-1 col-span-2 w-full h-auto"
      ><img src="@/assets/images/logo.svg" alt="IW家飾" class="block"
    /></nuxt-link>
    <nav class="menu col-start-3 col-span-6">
      <ul class="menu__list">
        <li v-for="(item, index) in menuLists" :key="index">
          <nuxt-link :to="item.link" class="menu__title">
            {{ item.name }}
            <!-- <img src="@/assets/icon/arrow.svg" alt="" v-if="item.children" /> -->
          </nuxt-link>
          <div class="menu__drop" v-if="item.children">
            <div
              class="menu__drop-item"
              v-for="(childItem, childIndex) in item.children"
              :key="childIndex"
            >
              <nuxt-link :to="childItem.link">{{ childItem.name }}</nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div class="right-box col-start-10">
      <div class="feature">
        <div
          class="feature__icon feature__icon__search"
          @click="globalStore.isSearchVisible = !globalStore.isSearchVisible"
        >
          <img
            @click="globalStore.toggleSearchBar"
            src="@/assets/icon/search.svg"
            alt=""
          />
        </div>
        <div class="feature__icon">
          <img src="@/assets/icon/member.svg" alt="" />
        </div>
        <div class="feature__icon">
          <img src="@/assets/icon/bag.svg" alt="" />
        </div>
        <div class="feature__icon">
          <img src="../assets/icon/chinese.svg" alt="" />
        </div>
      </div>
    </div>
    <!-- 手機版按鈕 -->
    <div class="header__mobile col-start-9 col-span-2 gap-5 justify-self-end">
      <div
        class="feature__icon feature__icon__search"
        @click="globalStore.isSearchVisible = !globalStore.isSearchVisible"
      >
        <img
          @click="globalStore.toggleSearchBar"
          src="@/assets/icon/search.svg"
          alt=""
        />
      </div>
      <button
        class="mobile-menu-button"
        @click="globalStore.toggleHamburgerMenu()"
        title="選單按鈕"
      >
        <div class="line" :class="{ cross1: globalStore.showMeun }"></div>
        <div class="line" :class="{ cross2: globalStore.showMeun }"></div>
      </button>
      <!-- 手機版選單 -->
      <div
        class="mobile-menu justify-center"
        :style="{
          transform: globalStore.showMeun
            ? 'translateX(0%)'
            : 'translateX(100%)',
        }"
      >
        <div class="mobile-menu-list flex flex-col gap-8">
          <NuxtLink to="/Issue">Issue</NuxtLink>
          <NuxtLink to="/">Project</NuxtLink>
          <NuxtLink to="/">Story</NuxtLink>
          <NuxtLink to="/">Opinion</NuxtLink>
          <NuxtLink to="/">Competiton</NuxtLink>
          <NuxtLink to="/">News</NuxtLink>
          <NuxtLink to="/">About</NuxtLink>
          <div class="flex items-center justify-between mt-4">
            <img src="@/assets/icon/member.svg" alt="" class="" />
            <img src="@/assets/icon/bag.svg" alt="" class="" />
            <img src="../assets/icon/chinese.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  align-items: center;
  height: 65px;
  background-color: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.03);

  .right-box {
    display: flex;
    justify-self: end;

    @include max-media(1024) {
      display: none;
    }
  }
}

.header {
  &__mobile {
    display: flex;
    align-items: center;
    // margin-left: 1rem;
    img,
    button {
      width: 18px;
    }
    @include min-media(1025) {
      display: none;
    }
  }
}

.menu {
  display: flex;
  justify-content: space-around;
  // justify-content: space-between;
  @include max-media(1024) {
    display: none;
  }

  li {
    position: relative;
    &:hover {
      .menu {
        &__drop {
          top: 100%;
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
  }

  &__list {
    display: flex;
    align-items: center;
    // justify-content: space-between;
  }

  &__title {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    display: block;
    // width: 100%;

    @include min-media(1024) {
      padding-left: 1.1rem;
      padding-right: 1.1rem;
    }
    @include min-media(1280) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @include min-media(1580) {
      padding-left: 3.3rem;
      padding-right: 3.3rem;
    }

    font-size: toRem(87.5);
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
  }

  &__drop {
    position: absolute;
    left: 50%;
    top: 120%;
    transform: translateX(-50%);
    width: 150px;
    background-color: #fff;
    border-top: 2px solid #000;
    box-shadow: 0 4px 12px rgba(#000, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease-in-out;
    font-size: toRem(87.5);

    a {
      display: block;
      text-align: center;
      padding: 6px 12px;
      border-bottom: 1px solid #e8e8e8;
      transition: all 0.5s ease-in-out;

      &:hover {
        color: #fff;
        background-color: #00000050;
      }
    }
  }
}

.feature {
  display: flex;
  align-items: center;

  img {
    display: block;
    width: 100%;
  }

  &__icon {
    width: 18px;
    cursor: pointer;
    margin-left: 20px;

    &__search {
      display: flex;
      justify-self: end;
      width: 18px;
    }
  }
}

.language {
  position: relative;
  margin-left: 20px;

  &__main {
    font-family: $font-DFMingStd5;
    font-size: 1.3125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  &__drop {
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(#000, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease-in-out;

    &.isShow {
      opacity: 1;
      pointer-events: auto;
      top: 100%;
    }
  }

  &__item {
    padding: 4px 12px;
    font-size: 20px;
    text-align: center;
  }
}

// Navbar漢堡選單
.mobile-menu {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px 0px #00000040;
  gap: 2rem;
  width: 50%;
  height: 32rem;
  position: fixed;

  // top需要跟Navbar高度一樣
  top: 65px;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;
  &-list {
    margin-left: 20%;
    margin-right: 20%;
  }

  &-button {
    position: relative;
    width: 24px;
    height: 24px;
    border: none;
    background: none;

    &.dark {
      div {
        background-color: #fff;
      }
    }

    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 2px;
      &:nth-child(1) {
        margin-top: -6px;
      }
    }
  }
}

// 漢堡按鈕
.line {
  height: 2px;
  background-color: black;
  border-radius: 2px;
  transition:
    transform 0.5s ease,
    position 0.3s ease;
}

.line.cross1 {
  transform: rotate(45deg);
  position: relative;
  top: 5px;
  left: -5px;
}

.line.cross2 {
  transform: rotate(-45deg);
  position: relative;
  top: 3px;
  left: -5px;
}
</style>
