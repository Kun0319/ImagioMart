<script setup></script>
<template>
  <title>隱私權政策</title>
  <NuxtLayout>
    <div class="text">
      <section class="flex flex-col">
        <p class="text__title">Privacy Policy</p>
        <p class="text__one">
          在瀏覽或使用本網站服務時，視同使用者已完全接受並瞭解本聲明中所有規範、中華民國相關法規、一切國際網路規定及使用慣例，並不得為任何不法目的使用本網站。
        </p>
        <p class="text__one">
          本網站內所有刊載內容，包括但不限於文字、圖像、影音、軟體及程式等之版權，除特別指明外，網站內的所有內容，均為「精展傳播興業有限公司」所有或已獲得版權持有者授權使用，並受中華民國著作權法保護。未經本網站之同意或授權，任何人不得以任何形式重製、轉載、散布、引用、變更、播送或出版該內容之全部或局部，亦不得為其他任何違反本網站著作權之行為。
          本網站所連結之其他網站，其內容歸原權利人所有。
        </p>
        <p class="text__one">
          使用者在本網站中瀏覽到的所有廣告內容，包括但不限於文字、圖片、動畫、展示樣品或其他資訊，均由各廣告商、及產品服務的供應商所提供。您對於廣告之正確性與可信度應自行斟酌與判斷。本網站僅接受委託予以刊登，不對前述廣告負擔保責任。
        </p>
        <p class="text__two">Cookie</p>
        <p class="text__three">
          為提供最佳服務，本網站可能會在您的裝置設定寫入Cookie，若您不願接受，可透過設定您的裝置以拒絕Cookie寫入，但可能會導致本公司無法提供部分或全部之服務。
        </p>
        <p class="text__four">
          如有任何使用上之疑慮，請洽服務信箱：<br
            class="md:hidden"
          />info@iw-magazine.com
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
    margin-bottom: 5%;
    line-height: 33.376px;
    @include max-media(768) {
      font-size: 0.75rem;
      line-height: 28.608px;
    }
  }

  &__two {
    font-size: 1rem;
    margin-bottom: 5.5093%;
    margin-top: 4.4909%;
    @include max-media(768) {
      font-size: 0.875rem;
      text-align: center;
    }
  }

  &__three {
    font-size: 0.875rem;
    line-height: 33.376px;
    margin-bottom: 5.5093%;
    @include max-media(768) {
      font-size: 0.75rem;
      line-height: 28.608px;
    }
  }
  &__four {
    font-size: 0.875rem;
    @include max-media(768) {
      font-size: 0.75rem;
      line-height: 28.608px;
    }
  }
}
</style>
