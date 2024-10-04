import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("globalStore", () => {
  // 定義 state，使用 ref
  const isSearchVisible = ref(false);
  const showSearch = ref(false); // 搜尋欄
  const showMeun = ref(false); // 漢堡選單
  const language = ref("CN"); // 語言
  const showShoppingCart = ref(false); // 購物車的狀態
  const hasSubmitted = ref(false); // 成為設計師的狀態

  // 定義 actions
  const toggleSearchBar = () => {
    showSearch.value = !showSearch.value;
  };

  const toggleHamburgerMenu = () => {
    showMeun.value = !showMeun.value;
  };

  const toggleLanguage = () => {
    language.value = language.value === "EN" ? "CN" : "EN";
  };

  const toggleShoppingCart = () => {
    showShoppingCart.value = !showShoppingCart.value;
  };

  const setSubmissionStatus = (status) => {
    hasSubmitted.value = status;
  };

  // 返回 state 和 actions
  return {
    isSearchVisible,
    showSearch,
    showMeun,
    language,
    showShoppingCart,
    hasSubmitted,
    toggleSearchBar,
    toggleHamburgerMenu,
    toggleLanguage,
    toggleShoppingCart,
    setSubmissionStatus,
  };
});
