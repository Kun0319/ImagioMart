import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("globalStore", {
  state: () => ({
    isSearchVisible: false,
    showSearch: false,
    showMeun: false,
  }),
  actions: {
    // 添加新的动作
    toggleSearchBar() {
      this.showSearch = !this.showSearch;
    },
    toggleHamburgerMenu() {
      this.showMeun = !this.showMeun;
    },
  },
});
