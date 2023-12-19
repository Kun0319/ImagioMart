<script setup></script>
<template>
  <title>About Us</title>
  <NuxtLayout>
    <div class="text">
      <section class="flex flex-col">
        <p class="text__title">About Us</p>
        <p class="text__one">
          傢飾雜誌報導生活空間美學，反映設計時尚，傳遞優質生活觀念，是為關心生活內在質感的品味人士所編輯的刊物。在每一期，傢飾雜誌匯集了國內、國際卓越人士的生活觀點與體驗，內容包含人文經驗、環境建築、室內設計、工業設計、當代藝術等。我們以細膩並且宏觀的編輯方向，去執行每一個報導，以專業的企劃能力去整合業界寶貴的資源。我們認為，凡是閱讀必須發生樂趣，凡是圖檔必須賞心悅目。
        </p>
        <p class="text__two">
          因此，傢飾雜誌呈現的閱賞經驗，就像亞熱帶地域的雪景一般珍貴，並且令人耳目一新。
        </p>
        <p class="text__three">
          IW Magazine reports on aesthetics within daily life, reflecting design
          trends and communicating progressive concepts in living, specifically
          for those readers who care about quality and taste in life. The
          outlooks and experiences of outstanding domestic and international
          individuals are collected for each issue, with contents including
          human experience, environmental architecture, interior design,
          industrial design and modern art. We approach each report through a
          detailed, yet macroscopic, editorial manner in order to integrate
          precious industry resources in a professional manner. We believe that
          delight should be found in every article, and beauty in every picture.
          Thus, the reader experience is similar to that of snow in the tropics
          – fresh yet precious.
        </p>
      </section>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.text {
  @apply flex flex-col items-center justify-center;
  padding-left: 20.2649%;
  padding-right: 20.2649%;
  margin-top: 13.8589%;
  margin-bottom: 21.6588%;
  @include max-media(768) {
    padding-left: 0%;
    padding-right: 0%;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 13.7146%;
    align-self: center;
    text-align: center;
    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__one {
    font-size: 0.875rem;
    margin-bottom: 10.7841%;
    line-height: 33.376px;
    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__two {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10.7841%;
    align-self: center;
    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__three {
    font-size: 0.8125rem;
    text-align: justify;
    line-height: 24.96px;
    font-family: $font-Noto;
    color: $text-color3;
    @include max-media(768) {
      font-size: 0.6875rem;
      text-align: inherit;
      line-height: 21.12px;
    }
  }
}
</style>
