<script setup>
import { useGlobalStore } from "@/stores/global.js";
const globalStore = useGlobalStore();

const menuLists = ref([
  {
    link: "/project",
    name: "Project",
    nameZh: "設計案例",
    hover: ref(false),
    click: ref(false),
    children: [
      { link: "/project", nameEn: "Scope", nameCn: "全球視窗" },
      { link: "../", nameEn: "Space", nameCn: "空間設計" },
      { link: "../", nameEn: "Art", nameCn: "人文藝術" },
    ],
  },
  {
    link: "/story",
    name: "Story",
    nameZh: "品牌故事",
    hover: ref(false),
    click: ref(false),
    children: [
      { link: "/story", nameEn: "Furniture", nameCn: "家具" },
      { link: "/story", nameEn: "Interior", nameCn: "室內" },
      { link: "/story", nameEn: "Product", nameCn: "單品" },
    ],
  },
  {
    link: "/opinion",
    name: "Opinion",
    nameZh: "人物觀點",
    hover: ref(false),
  },

  {
    link: "../news",
    name: "News",
    nameZh: "最新訊息",
    hover: ref(false),
  },
  {
    link: "/iwselect",
    name: "IW Select",
    nameZh: "傢飾選物",
    hover: ref(false),
  },
  {
    link: "/issue",
    name: "IW Issue",
    nameZh: "雜誌期刊",
    hover: ref(false),
    click: ref(false),
    children: [
      { link: "../", nameEn: "IW", nameCn: "IW" },
      { link: "../", nameEn: "DETAIL", nameCn: "DETAIL" },
    ],
  },
  {
    link: "/competition",
    name: "Competition",
    nameZh: "全球競賽",
    hover: ref(false),
    click: ref(false),
    children: [
      { link: "/competition", nameEn: "IW", nameCn: "全球競賽" },
      {
        link: "/competition/iwcompetition",
        nameEn: "GLOBAL",
        nameCn: "IW競賽",
      },
    ],
  },
]);

const isChinese = computed(() => globalStore.language === "CN");
function toggleLanguage() {
  isChinese.value = !isChinese.value;
}
function setHover(item, value) {
  item.hover = value;
}
function setClick(item) {
  item.click = !item.click;
}

function displayName(item) {
  if (isChinese.value) {
    return item.hover ? item.name : item.nameZh;
  } else {
    return item.hover ? item.nameZh : item.name;
  }
}
// mobile menu位置
const mobilemenuStyle = computed(() => {
  return {
    transform: globalStore.showMeun ? "translateX(0%)" : "translateX(100%)",
    top: globalStore.showSearch ? "110px" : "55px",
  };
});
</script>

<template>
  <header
    class="wrap grid grid-cols-10"
    :style="{ top: globalStore.showSearch ? '55px' : '0px' }"
  >
    <nuxt-link to="/" class="col-start-1 col-span-1"
      ><img src="@/assets/images/logo.png" alt="IW家飾" class="logopic block"
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
            <div class="ins">
              <span class="tw">{{ isChinese ? item.name : item.nameZh }}</span>
              <span class="en">{{ isChinese ? item.nameZh : item.name }}</span>
            </div>
          </nuxt-link>
          <div class="menu__drop" v-if="item.children">
            <div
              class="menu__drop-item"
              v-for="(childItem, childIndex) in item.children"
              :key="childIndex"
            >
              <nuxt-link :to="childItem.link">{{
                isChinese ? childItem.nameCn : childItem.nameEn
              }}</nuxt-link>
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
          title="搜尋"
        >
          <img
            @click="globalStore.toggleSearchBar"
            src="@/assets/icon/search.svg"
            alt=""
          />
        </div>
        <div class="feature__icon">
          <nuxt-link to="/login" title="IW會員中心"
            ><img src="@/assets/icon/member.svg" alt=""
          /></nuxt-link>
        </div>
        <div
          class="feature__icon"
          @click="globalStore.toggleShoppingCart"
          title="購物車"
        >
          <img src="@/assets/icon/bag.svg" alt="" />
        </div>
        <div
          class="feature__icon"
          @click="globalStore.toggleLanguage"
          title="切換語言"
        >
          <!-- <img src="../assets/icon/chinese.svg" alt="" /> -->
          <img v-if="isChinese" src="../assets/icon/english.svg" alt="中文" />
          <img v-else src="../assets/icon/chinese.svg" alt="English" />
        </div>
      </div>
    </div>
    <!-- 手機版按鈕 -->
    <div class="header__mobile col-start-9 col-span-2 gap-5 justify-self-end">
      <div @click="globalStore.isSearchVisible = !globalStore.isSearchVisible">
        <img
          @click="globalStore.toggleSearchBar"
          src="@/assets/icon/search.svg"
          alt=""
          class="feature__icon feature__icon__search"
        />
      </div>
      <button
        class="mobile-menu-button"
        @click="globalStore.toggleHamburgerMenu"
        title="選單按鈕"
      >
        <div class="line" :class="{ cross1: globalStore.showMeun }"></div>
        <div class="line" :class="{ cross2: globalStore.showMeun }"></div>
      </button>
      <!-- 手機版選單 -->
      <div class="mobile-menu justify-center" :style="mobilemenuStyle">
        <div class="mobile-menu-list flex flex-col gap-8">
          <ul class="flex flex-col gap-8">
            <li
              v-for="(item, index) in menuLists"
              :key="index"
              @click="setClick(item)"
            >
              <!-- 選單要可以點擊進去 或單純展開子選單？-->
              <!-- link -->
              <nuxt-link :to="item.link" class="mobile-menu-list__span">
                <div class="ins">
                  <span class="en">{{
                    isChinese ? item.nameZh : item.name
                  }}</span>
                </div>
              </nuxt-link>
              <!-- 子選單 -->
              <transition name="menu-expand">
                <ul v-show="item.click && item.children" class="sub-menu">
                  <li
                    class=""
                    v-for="(child, childIndex) in item.children"
                    :key="`child-${childIndex}`"
                  >
                    <nuxt-link :to="child.link">{{
                      isChinese ? child.nameEn : child.nameCn
                    }}</nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
          <div class="sub-menu__icon flex items-center justify-between mt-4">
            <nuxt-link to="/login"
              ><img src="@/assets/icon/member.svg" alt="" class=""
            /></nuxt-link>
            <nuxt-link
              to="/"
              @click="
                globalStore.toggleShoppingCart(),
                  globalStore.toggleHamburgerMenu()
              "
              ><img src="@/assets/icon/bag.svg" alt="" class=""
            /></nuxt-link>
            <nuxt-link to=""
              ><img
                v-if="isChinese"
                src="../assets/icon/chinese.svg"
                alt="中文"
                @click="globalStore.toggleLanguage" />
              <img
                v-else
                src="../assets/icon/english.svg"
                alt="English"
                @click="globalStore.toggleLanguage"
            /></nuxt-link>
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
  z-index: 50;
  align-items: center;
  height: 55px;
  background-color: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.03);
  transition: top 0.5s ease-in-out;

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

    img,
    button {
      width: 16px;
    }

    @include min-media(1025) {
      display: none;
    }
  }
}

.menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  @include max-media(1024) {
    display: none;
  }

  li {
    position: relative;
    // font-size: 0.95rem;
    font-size: 0.875rem;
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
    justify-content: space-around;
    // margin-right: 2.5rem;
  }

  &__title {
    display: flex;
    white-space: nowrap;
    // letter-spacing: 0.035rem;
    line-height: 50px;
    overflow: hidden;

    @include min-media(1024) {
      padding-left: 10px;
      padding-right: 10px;
    }

    @include min-media(1280) {
      padding-left: 20px;
      padding-right: 20px;
    }

    @include min-media(1580) {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  // Hover出現向下選單
  &__drop {
    position: absolute;
    left: 50%;
    top: 120%;
    transform: translateX(-50%);
    width: 100px;
    background-color: #fff;
    border-top: 2px solid #000;
    box-shadow: 0 4px 12px rgba(#000, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease-in-out;
    font-size: 0.75rem;

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

// icon樣式
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

// .language {
//   position: relative;
//   margin-left: 20px;

//   &__main {
//     font-family: $font-DFMingStd5;
//     font-size: 1.3125rem;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     cursor: pointer;
//   }

//   &__drop {
//     position: absolute;
//     top: 110%;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 80px;
//     background-color: #fff;
//     box-shadow: 0 10px 10px rgba(#000, 0.1);
//     opacity: 0;
//     pointer-events: none;
//     transition: all 0.5s ease-in-out;

//     &.isShow {
//       opacity: 1;
//       pointer-events: auto;
//       top: 100%;
//     }
//   }

//   &__item {
//     padding: 4px 12px;
//     font-size: 20px;
//     text-align: center;
//   }
// }

// Navbar漢堡選單
.mobile-menu {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px 0px #00000040;
  gap: 2rem;
  width: 50%;
  height: auto;
  position: fixed;
  font-family: $Yantramanav;
  padding-bottom: 3rem;
  padding-top: 3rem;

  // top需要跟Navbar高度一樣
  top: 55px;
  right: 0;
  transform: translateX(100%);
  transition:
    transform 0.5s ease-in-out,
    top 0.5s ease-in-out;

  &-list {
    margin-left: 20%;
    margin-right: 20%;

    &__span {
      cursor: pointer;
    }
  }

  // 切換黑暗模式？
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
      width: 20px;
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

  &.cross1 {
    transform: rotate(45deg);
    position: relative;
    top: 5px;
    left: -5px;
  }

  &.cross2 {
    transform: rotate(-45deg);
    position: relative;
    top: 3px;
    left: -5px;
  }
}

// navbar語言切換

.menu a:hover .en {
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}

.menu a:hover .tw {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

.menu a.current::before {
  width: 100%;
}

.menu .ins {
  position: relative;
  // display: block;
  text-align: center;
  // width: 60px;
}

.menu .en,
.menu .tw {
  display: block;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.menu .tw {
  position: absolute;
  left: 50%;
  top: 0;
  width: 100px;
  text-align: center;
  transform: translateY(100%);
  margin-left: -50px;
}

// 子選單
.sub-menu {
  // overflow: hidden;
  cursor: pointer;

  a {
    color: $text-color2;
    padding-left: 20px;
    font-size: 0.75rem;
  }

  &__icon {
    cursor: pointer;
  }
}
</style>
