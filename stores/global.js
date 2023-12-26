import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("globalStore", {
  state: () => ({
    isSearchVisible: false,
    showSearch: false,
    showMeun: false,
    language: "CN",
    showShoppingCart: false,
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
  },
});
