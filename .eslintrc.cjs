module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended", // 推荐配置，捕获更多问题
    "plugin:prettier/recommended", // Prettier 用于格式化
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module", // 统一使用模块语法
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off", // 关闭多单词组件名限制
  },
  globals: {
    ref: "readonly",
    reactive: "readonly",
    computed: "readonly",
    defineComponent: "readonly",
    useRoute: "readonly", // 例子，添加 Nuxt 3 全局方法
    useRouter: "readonly",
  },
};
