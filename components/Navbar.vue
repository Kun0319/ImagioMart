<script setup>
import { useGlobalStore } from "@/stores/global.js";
const globalStore = useGlobalStore();

const menuLists = ref([
  {
    link: "issue",
    name: "Issue",
    nameZh: "發布",
    hover: ref(false),
    children: [
      { link: "../", name: "IW" },
      { link: "../", name: "DETAIL'" },
    ],
  },
  {
    link: "../",
    name: "Project",
    nameZh: "案例",
    hover: ref(false),
    children: [
      { link: "../", name: "Scope" },
      { link: "../", name: "Space" },
      { link: "../", name: "Art" },
    ],
  },
  {
    link: "../",
    name: "Story",
    nameZh: "故事",
    hover: ref(false),
    children: [
      { link: "../", name: "Furniture" },
      { link: "../", name: "Interior" },
      { link: "../", name: "Product" },
    ],
  },
  {
    link: "../",
    name: "Opinion",
    nameZh: "觀點",
    hover: ref(false),
  },
  {
    link: "../",
    name: "Competition",
    nameZh: "競賽",
    hover: ref(false),
    children: [
      { link: "../", name: "IW" },
      { link: "../", name: "Other" },
    ],
  },
  {
    link: "../",
    name: "News",
    nameZh: "新資訊",
    hover: ref(false),
  },
  {
    link: "../",
    name: "About",
    nameZh: "關於我們",
    hover: ref(false),
  },
]);

const isChinese = ref(false);

function toggleLanguage() {
  isChinese.value = !isChinese.value; // 切換語言
}
function setHover(item, value) {
  item.hover = value;
}

function displayName(item) {
  if (item.hover) {
    return isChinese.value ? item.name : item.nameZh; // 懸停時顯示相反的語言
  } else {
    return isChinese.value ? item.nameZh : item.name; // 非懸停時顯示當前語言
  }
}
</script>

<template>
  <header class="wrap grid grid-cols-10">
    <nuxt-link to="/" class="col-start-1 col-span-2"
      ><img src="@/assets/images/logo.svg" alt="IW家飾" class="logopic block"
    /></nuxt-link>
    <nav class="menu col-start-3 col-span-6">
      <ul class="menu__list">
        <li
          v-for="(item, index) in menuLists"
          :key="index"
          @mouseover="setHover(item, true)"
          @mouseleave="setHover(item, false)"
        >
          <nuxt-link :to="item.link" class="menu__title">
            {{ displayName(item) }}
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
        <div class="feature__icon" @click="toggleLanguage">
          <!-- <img src="../assets/icon/chinese.svg" alt="" /> -->
          <img
            v-if="isChinese"
            src="../assets/icon/english.svg"
            alt="English"
          />
          <img v-else src="../assets/icon/chinese.svg" alt="中文" />
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
  height: 55px;
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

.logopic {
  width: 100px;
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
  @include max-media(1024) {
    display: none;
  }

  li {
    position: relative;
    // font-size: 0.328125rem;
    font-size: 0.75rem;
    font-family: $Yantramanav;

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
  }

  &__title {
    display: block;
    white-space: nowrap;
    letter-spacing: 0.035rem;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;

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
    // font-size: toRem(87.5);
    font-size: 0.65rem;

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
    width: 16px;
    cursor: pointer;
    margin-left: 20px;

    &__search {
      display: flex;
      justify-self: end;
      width: 16px;
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
  top: 55px;
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
