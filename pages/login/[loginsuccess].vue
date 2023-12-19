<script setup>
const router = useRouter();
// 2秒後跳轉到 /member

setTimeout(() => {
  router.push("/member");
}, 2000);
</script>
<template>
  <NuxtLayout>
    <div class="login flex justify-center">
      <div class="login__success">
        <p class="text-center">您已成功登入。</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.login {
  &__success {
    @apply flex justify-center items-center justify-self-center;
    width: 32.47vw;
    height: 13.89vw;
    min-width: 322px;
    min-height: 139px;
    box-shadow: 0px 4px 11.8px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 28.5535%;
    margin-top: 16.2963%;
  }
}
</style>
