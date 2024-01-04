import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("globalStore", {
  state: () => ({
    isSearchVisible: false,
    // 搜尋欄
    showSearch: false,
    // 漢堡選單
    showMeun: false,
    // 語言
    language: "CN",
    // 購物車的狀態
    showShoppingCart: false,
    // 成為設計師的狀態
    hasSubmitted: false,
  }),
  actions: {
    toggleSearchBar() {
      this.showSearch = !this.showSearch;
    },
    toggleHamburgerMenu() {
      this.showMeun = !this.showMeun;
    },
    toggleLanguage() {
      this.language = this.language === "EN" ? "CN" : "EN";
    },
    toggleShoppingCart() {
      this.showShoppingCart = !this.showShoppingCart;
    },
    setSubmissionStatus(status) {
      this.hasSubmitted = status;
    },
  },
});
