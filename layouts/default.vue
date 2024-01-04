<template>
  <div class="wrap">
    <HeaderSearch />
    <Navbar />
    <ReturnTop />
    <ShoppingCart />
    <main class="margin">
      <slot />
    </main>
  </div>
  <Footer />
</template>
<style lang="scss" scoped>
.margin {
  // margin-top: 55px;
}
</style>
