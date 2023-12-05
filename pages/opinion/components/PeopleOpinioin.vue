<script setup>
import pic1 from "@/assets/images/opinion1.svg";
import pic2 from "@/assets/images/opinion2.png";
import pic3 from "@/assets/images/opinion3.png";
import pic4 from "@/assets/images/opinion4.png";
import pic5 from "@/assets/images/opinion5.png";

const peopleopinion = ref([
  {
    nameEn: "Patrick Norguet",
    nameCn: "派屈克．諾蓋",
    opinionEn:
      "You cannot understand good design if you do not understand people. ",
    opinionEnPeo: "Dieter Rams",
    opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
  },
]);
</script>
<template>
  <div class="opinion flex grid grid-cols-12 gap-4">
    <div class="photo__container md:col-span-4 col-span-12">
      <img :src="pic2" alt="" class="photo" />
      <div class="overlay">
        <p>industrial designer｜工業設計師</p>
      </div>
    </div>

    <div
      class="flex-col md:col-span-6 md:col-start-6 col-span-12 self-center md:text-left text-center"
    >
      <div class="text__rwd md:hidden">
        <p>industrial designer｜工業設計師</p>
      </div>
      <!-- 名字 -->
      <p class="text__nameEn">{{ peopleopinion[0].nameEn }}</p>
      <p class="text__nameCn">{{ peopleopinion[0].nameCn }}</p>
      <!-- icon -->
      <div class="line-container md:justify-end justify-center">
        <div class="line__opinion md:flex hidden"></div>
        <i class="pi pi-heart mx-3"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <!-- 觀點 想法 -->
      <p class="text__opinionEn text-left">
        “{{ peopleopinion[0].opinionEn }}”
      </p>

      <p class="text__opinionEnPeo">
        &nbsp; &nbsp;—{{ peopleopinion[0].opinionEnPeo }}
      </p>
      <p class="text__opinionCn">
        「{{ peopleopinion[0].opinionCn }} 」—{{ peopleopinion[0].nameCn }}
      </p>
      <!-- More -->
      <button class="more">MORE+</button>
    </div>
  </div>
  <div class="opinion flex grid grid-cols-12 gap-4">
    <div class="photo__container md:col-span-4 col-span-12">
      <img :src="pic2" alt="" class="photo" />
      <div class="overlay">
        <p>industrial designer｜工業設計師</p>
      </div>
    </div>

    <div
      class="flex-col md:col-span-6 md:col-start-6 col-span-12 self-center md:text-left text-center"
    >
      <div class="text__rwd md:hidden">
        <p>industrial designer｜工業設計師</p>
      </div>
      <!-- 名字 -->
      <p class="text__nameEn">{{ peopleopinion[0].nameEn }}</p>
      <p class="text__nameCn">{{ peopleopinion[0].nameCn }}</p>
      <!-- icon -->
      <div class="line-container md:justify-end justify-center">
        <div class="line__opinion md:flex hidden"></div>
        <i class="pi pi-heart mx-3"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <!-- 觀點 想法 -->
      <p class="text__opinionEn text-left">
        “{{ peopleopinion[0].opinionEn }}”
      </p>

      <p class="text__opinionEnPeo">
        &nbsp; &nbsp;—{{ peopleopinion[0].opinionEnPeo }}
      </p>
      <p class="text__opinionCn">
        「{{ peopleopinion[0].opinionCn }} 」—{{ peopleopinion[0].nameCn }}
      </p>
      <!-- More -->
      <button class="more">MORE+</button>
    </div>
  </div>
  <div class="opinion flex grid grid-cols-12 gap-4">
    <div class="photo__container md:col-span-4 col-span-12">
      <img :src="pic2" alt="" class="photo" />
      <div class="overlay">
        <p>industrial designer｜工業設計師</p>
      </div>
    </div>

    <div
      class="flex-col md:col-span-6 md:col-start-6 col-span-12 self-center md:text-left text-center"
    >
      <div class="text__rwd md:hidden">
        <p>industrial designer｜工業設計師</p>
      </div>
      <!-- 名字 -->
      <p class="text__nameEn">{{ peopleopinion[0].nameEn }}</p>
      <p class="text__nameCn">{{ peopleopinion[0].nameCn }}</p>
      <!-- icon -->
      <div class="line-container md:justify-end justify-center">
        <div class="line__opinion md:flex hidden"></div>
        <i class="pi pi-heart mx-3"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <!-- 觀點 想法 -->
      <p class="text__opinionEn text-left">
        “{{ peopleopinion[0].opinionEn }}”
      </p>

      <p class="text__opinionEnPeo">
        &nbsp; &nbsp;—{{ peopleopinion[0].opinionEnPeo }}
      </p>
      <p class="text__opinionCn">
        「{{ peopleopinion[0].opinionCn }} 」—{{ peopleopinion[0].nameCn }}
      </p>
      <!-- More -->
      <button class="more">MORE+</button>
    </div>
  </div>
  <div class="opinion flex grid grid-cols-12 gap-4">
    <div class="photo__container md:col-span-4 col-span-12">
      <img :src="pic2" alt="" class="photo" />
      <div class="overlay">
        <p>industrial designer｜工業設計師</p>
      </div>
    </div>

    <div
      class="flex-col md:col-span-6 md:col-start-6 col-span-12 self-center md:text-left text-center"
    >
      <div class="text__rwd md:hidden">
        <p>industrial designer｜工業設計師</p>
      </div>
      <!-- 名字 -->
      <p class="text__nameEn">{{ peopleopinion[0].nameEn }}</p>
      <p class="text__nameCn">{{ peopleopinion[0].nameCn }}</p>
      <!-- icon -->
      <div class="line-container md:justify-end justify-center">
        <div class="line__opinion md:flex hidden"></div>
        <i class="pi pi-heart mx-3"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <!-- 觀點 想法 -->
      <p class="text__opinionEn text-left">
        “{{ peopleopinion[0].opinionEn }}”
      </p>

      <p class="text__opinionEnPeo">
        &nbsp; &nbsp;—{{ peopleopinion[0].opinionEnPeo }}
      </p>
      <p class="text__opinionCn">
        「{{ peopleopinion[0].opinionCn }} 」—{{ peopleopinion[0].nameCn }}
      </p>
      <!-- More -->
      <button class="more">MORE+</button>
    </div>
  </div>
  <div class="opinion flex grid grid-cols-12 gap-4">
    <div class="photo__container md:col-span-4 col-span-12">
      <img :src="pic2" alt="" class="photo" />
      <div class="overlay">
        <p>industrial designer｜工業設計師</p>
      </div>
    </div>

    <div
      class="flex-col md:col-span-6 md:col-start-6 col-span-12 self-center md:text-left text-center"
    >
      <div class="text__rwd md:hidden">
        <p>industrial designer｜工業設計師</p>
      </div>
      <!-- 名字 -->
      <p class="text__nameEn">{{ peopleopinion[0].nameEn }}</p>
      <p class="text__nameCn">{{ peopleopinion[0].nameCn }}</p>
      <!-- icon -->
      <div class="line-container md:justify-end justify-center">
        <div class="line__opinion md:flex hidden"></div>
        <i class="pi pi-heart mx-3"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <!-- 觀點 想法 -->
      <p class="text__opinionEn text-left">
        “{{ peopleopinion[0].opinionEn }}”
      </p>

      <p class="text__opinionEnPeo">
        &nbsp; &nbsp;—{{ peopleopinion[0].opinionEnPeo }}
      </p>
      <p class="text__opinionCn">
        「{{ peopleopinion[0].opinionCn }} 」—{{ peopleopinion[0].nameCn }}
      </p>
      <!-- More -->
      <button class="more">MORE+</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.opinion {
  margin-top: 12.062%;
  margin-bottom: 19.098%;
}

.photo {
  width: 95%;
  height: 450px;
  display: block;

  &__container {
    position: relative;
  }

  &:hover {
    -webkit-filter: brightness(0.5);
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
}

.photo__container:hover .overlay {
  background: rgba(0, 0, 0, 0.5); /* 悬停时的黑色滤镜效果 */
  opacity: 1; /* 显示遮罩层和文字 */
}

.line {
  &-container {
    position: relative;
    display: flex;
  }

  &__opinion {
    position: absolute;
    top: 50%;
    left: 0;
    width: 90%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
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
  &__rwd {
    margin-top: 7.3991%;
    margin-bottom: 12.5786%;

    font-size: 0.625rem;
  }

  &__nameEn {
    font-size: 1rem;
    // margin-bottom: 2%;
    margin-bottom: 0.6865rem;
  }

  &__nameCn {
    font-size: 1rem;
    // margin-bottom: 4%;
    margin-bottom: 1.374rem;
  }

  &__opinionEn {
    font-size: 0.875rem;
    // margin-top: 8.3177%;
    margin-top: 3rem;
    font-style: italic;
  }

  &__opinionEnPeo {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    font-style: italic;
  }

  &__opinionCn {
    font-size: 0.875rem;
    margin-top: 1.5rem;
    margin-bottom: 5.75rem;
  }
}
</style>
