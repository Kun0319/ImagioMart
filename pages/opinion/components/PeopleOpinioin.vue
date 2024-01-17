<script setup>
import pic1 from "@/assets/images/opinion1.webp";
import pic2 from "@/assets/images/opinion2.webp";
import pic3 from "@/assets/images/opinion3.jpg";
import pic4 from "@/assets/images/opinion4.webp";
import pic5 from "@/assets/images/opinion5.jpeg";

// const peopleopinion = ref([
//   {
//     nameEn: data.value.data.list[0].entitle,
//     nameCn: data.value.data.list[0].title,
//     opinionEn: data.value.data.list[0].description,
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: data.value.data.list[0].image.link,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic1,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic2,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic3,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic4,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic1,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic3,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic4,
//   },
//   {
//     nameEn: "Patrick Norguet",
//     nameCn: "派屈克．諾蓋",
//     opinionEn:
//       "You cannot understand good design if you do not understand people. ",
//     opinionEnPeo: "Dieter Rams",
//     opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
//     imageUrl: pic1,
//   },
// ]);
const props = defineProps({
  page: Number,
});
// api獲取資料
const peopleopinion = ref([]);
// const { data, error, refresh } = await useFetch(
//   "https://iw-api.d-blueprint.com/api/opinions?sorting=sort&direction=asc&page=1&per_page=3",
// );

// if (data.value) {
//   peopleopinion.value = data.value.data.list; // 假设 data.value 是您需要的数组
// }

// onMounted(async () => {
//   await refresh();
// });
// console.log(peopleopinion.value.en_title);

watch(
  () => props.page,
  (newPage) => {
    fetchData(newPage);
  },
);

async function fetchData(page) {
  // 用nextTick()重新整理資料沒有回傳問題
  await nextTick();
  const { data, error } = await useFetch(
    `https://iw-api.d-blueprint.com/api/opinions?sorting=sort&direction=asc&page=${page}&per_page=3`,
  );
  console.log(data.value.data.meta.total);
  console.log(data.value.data.meta.per_page);
  if (error.value) {
    console.error("Error fetching data:", error.value);
  } else {
    peopleopinion.value = data.value.data.list;
  }
}
onMounted(async () => {
  await fetchData(props.page);
});
</script>
<template>
  <nuxt-link
    v-for="person in peopleopinion"
    :key="person.id"
    :to="`/opinion/${person.en_title?.replace(/\s+/g, '-')}`"
  >
    <!-- :to="
      person.value?.en_title
        ? `/opinion/${person.value.en_title.replace(/\s+/g, '-')}`
        : '.'
    " -->
    <div class="opinion flex grid grid-cols-12 gap-4">
      <div class="photo__container md:col-span-5 col-span-12">
        <!-- <img :src="person.image.link" alt="" class="photo" /> -->
        <img :src="person?.image?.link" alt="" class="photo" />
        <div class="overlay">
          <p class="text__designer">
            {{ person.subtitle }}
          </p>
          <!-- <p class="text__designer">industrial designer｜工業設計師</p> -->
        </div>
      </div>

      <div class="text">
        <!-- 名字 -->
        <!-- <p class="text__designer md:hidden">industrial designer｜工業設計師</p> -->
        <p class="text__designer md:hidden">{{ person.subtitle }}</p>
        <p class="text__nameEn">{{ person.en_title }}</p>
        <p class="text__nameCn">{{ person.title }}</p>
        <!-- <p class="text__nameEn">{{ person.nameEn }}</p>
        <p class="text__nameCn">{{ person.nameCn }}</p> -->
        <!-- icon -->
        <div class="line-container">
          <div class="line__opinion"></div>
          <div>
            <i class="pi pi-heart mx-3"></i>
            <i class="pi pi-share-alt"></i>
          </div>
        </div>
        <!-- 觀點 想法 -->

        <!-- <p
          class="text__opinionEn text-left"
          v-html="modifyDescription(person.description)"
        ></p> -->
        <p class="text__opinionEn text-left" v-html="person.description"></p>
        <p class="text__opinionCn" v-html="person.en_description"></p>
        <!-- <span class="text__opinionEnPeo"
          >&nbsp; &nbsp;—{{ person.en_title }}</span
        >
        <p class="text__opinionEnPeo md:block hidden">
          &nbsp; &nbsp;—{{ person.opinionEnPeo }}
        </p> -->

        <p class="md:hidden">—{{ person.nameCn }}</p>

        <!-- More -->
        <button class="more">MORE+</button>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.opinion {
  // margin-top: 12.062%;
  margin-bottom: 19.098%;

  @include max-media(768) {
    margin-top: 31.0318%;
  }
}

.photo {
  width: 100%;
  // height: 100%;
  // height: 478px;
  max-width: 345px;
  // max-height: 27.65625vw;
  max-width: 19.94792vw;
  display: block;
  object-fit: cover;

  @include max-media(1024) {
  }

  @include max-media(768) {
    max-height: 269px;
    max-width: 191px;
  }

  &__container {
    display: flex;
    justify-content: center;
  }

  &__container {
    position: relative;
  }

  &:hover {
    -webkit-filter: brightness(0.5);

    @include max-media(768) {
      -webkit-filter: brightness(1);
    }
  }
}

.overlay {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 90%;
  left: 0;
  width: 95%;
  background: rgba(0, 0, 0, 0);
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  text-align: center;
  z-index: 30;

  @include max-media(768) {
    display: none;
  }
}

.photo__container:hover .overlay {
  /* 悬停时的黑色滤镜效果 */
  opacity: 1;
}

.line {
  &-container {
    position: relative;
    display: flex;
    justify-content: flex-end;

    @include max-media(768) {
      justify-content: center;
    }
  }

  &__opinion {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 0px;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);

    @include max-media(1440) {
      width: 85%;
    }

    @include max-media(1200) {
      width: 80%;
    }

    @include max-media(768) {
      display: none;
    }
  }
}

.more {
  background-color: white;
  border: 1px solid black;
  border-radius: 40px;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  width: 5rem;
  font-family: $font-Noto;
  font-size: 0.65rem;
}

.text {
  @apply flex-col md:col-span-6 md:col-start-6 col-span-12 self-end md:text-left text-center;

  &__rwd {
    margin-top: 7.3991%;
    margin-bottom: 12.5786%;

    font-size: 0.625rem;
  }

  &__nameEn {
    font-size: 1rem;
    // margin-bottom: 2%;
    margin-bottom: 0.6865rem;

    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__nameCn {
    font-size: 1rem;
    margin-bottom: 3.754%;

    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__opinionEn {
    font-size: 0.875rem;
    margin-top: 8.7593%;
    font-style: italic;
    // 沒有加上中文跟名稱時
    margin-bottom: 13.0496%;
  }

  &__opinionEnPeo {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    font-style: italic;
  }

  &__opinionCn {
    font-size: 0.875rem;
    margin-top: 4.2903%;
    margin-bottom: 13.0496%;

    @include max-media(768) {
      text-align: left;
    }
  }

  &__designer {
    font-size: 0.875rem;

    @include max-media(768) {
      font-size: 0.625rem;
      margin-bottom: 9.8884%;
    }
  }
}
</style>
