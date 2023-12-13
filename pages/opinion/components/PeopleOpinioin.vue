<script setup>
import pic1 from "@/assets/images/opinion1.webp";
import pic2 from "@/assets/images/opinion2.webp";
import pic3 from "@/assets/images/opinion3.jpg";
import pic4 from "@/assets/images/opinion4.webp";
import pic5 from "@/assets/images/opinion5.jpeg";

const peopleopinion = ref([
  {
    nameEn: "Patrick Norguet",
    nameCn: "派屈克．諾蓋",
    opinionEn:
      "You cannot understand good design if you do not understand people. ",
    opinionEnPeo: "Dieter Rams",
    opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
    imageUrl: pic1,
    // "https://s3-alpha-sig.figma.com/img/9777/1ae9/8ca225f7ab6d641e78fa949a97f25e84?Expires=1702857600&Signature=pDiWTR6DP9MCruTY6d~WR~dKcJhdnGQfdd5s8k~zP9RipGOzGLvtnK6PPfT6O5T2kYRiVhglb4lUNk-AvY2AOSnNDCqyfeVYHhXkJgCZm7XaYU0ZYUeZ1kMZ1WWqIumcHCWxTLqFfD1p7bliME58j56YrKF3yEVCalYs0cT1TEoUEeyZLt17fGcEoXAz1SOfdegHaQYhElZ0dVTTEA5L2I-hzysCiua4Sr5FqmvqXQYDDjhX4Nt~hmsntaWxWOcfqs1~pOBFlrw5s7cHjA5uuBlcBULmQexryEsqHyLbY4x3iIg9RuAEmPCcpPFzG0sufD3AjQ7oenwtM6~7WxlrTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    nameEn: "Patrick Norguet",
    nameCn: "派屈克．諾蓋",
    opinionEn:
      "You cannot understand good design if you do not understand people. ",
    opinionEnPeo: "Dieter Rams",
    opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
    imageUrl: pic2,
    // "https://s3-alpha-sig.figma.com/img/52cc/17b4/7c42a94884c97b6cd85a6a8a10d18a94?Expires=1702857600&Signature=SZaELbXdAk8-b8AbwFDrwF24rihXBQBzYtk6gyHkQeDXn-ZXEqVa-Vqp7C7byKYIBepfIEi-j8gQHO9iA79k9-KqSYwXzxDMBTNX9VAVycaBfqAc3gCp1FHABDdU1e9oTqZ4o9fUoWaZCc~V5ajlk--bcULkHhW5~yL64CApMsLHhwioRI9u2Vr1XFUs5O11ZMBCn-08i-~Jkf7IaTN0i0a3GT~sbpycNpAeCZHMppXUsIQVFigxpR8qvL47okSVUFH5bkrddNX69F2FDD2GWXg-9RTbDMB8nfsW9cJkG5eDlaM7NkZg3ftNc-bp7iH5yMAkxbR1eajx5y85koJKfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    nameEn: "Patrick Norguet",
    nameCn: "派屈克．諾蓋",
    opinionEn:
      "You cannot understand good design if you do not understand people. ",
    opinionEnPeo: "Dieter Rams",
    opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
    imageUrl: pic3,
    // "https://s3-alpha-sig.figma.com/img/7925/cbfe/6546d4a97adb89c599ab10e0dc442252?Expires=1702857600&Signature=lieMstKF4-VBFAp0Mi4vHPNclHR2KMUO0M1pz2cBcvPkUxrSHe~2vtgeyEUzdgQVoqLWQyhVS47XRXi1Ygu2xQt8cKd-d1WhbJDqtPwhBI~gPTSOB30c-DNpZzZld68-uFXKl06HPTVqbhKlgkyLyKWJSlTeGHGANli47Lra204iCcLqCPRph-JeAVOpaD2RmA5X4y~O8~8GtJ6gDtyweqsuZtnsb9hPiRdzDqyZ4txozQuxAMX4h4TPRUJB2TYr93ahcHuswC3aOpMTrYPLbHjUFKKJwqNvsGl~XKoTwVoLLLwPGFdYGmYFsg-dCQ57vyrUBxvA8tAt64OJIhRx0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    nameEn: "Patrick Norguet",
    nameCn: "派屈克．諾蓋",
    opinionEn:
      "You cannot understand good design if you do not understand people. ",
    opinionEnPeo: "Dieter Rams",
    opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
    imageUrl: pic4,
    // "https://s3-alpha-sig.figma.com/img/68d0/2994/e74193bec00974ae150c6082132429b6?Expires=1702857600&Signature=LTzz-SvPnq3ojwKOtfc-oZT4vrUAgm7i02pL-n9Jj0rTbDQiLYxk6kZfcLfFy8W5bSquwtCHN1Plc2B~XCRDZBW6AZ0caT2AFTBPU8M2r3UUgqPgRUZKflJVlADuKfBJEdYSnWfpytoVWJjt3ekA5p3H-OWTqqTtA6cdY2y6ATiNNZPD1SzCTf4kl~7Y1H9Kv9LR2rQeJKDUUgZ8gtHJhLd9xAaHjkhiZvgdNFOBDZgBdUX2sogY7x0b7TGHNuoinf~OWmYPujO8iqtonJluzvp0zIrPldgJLNB5DZEPAPC1-IFCfcoHgFR9DG6R01FeJh-B3YrRUh9EwkB4mYH-EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    nameEn: "Patrick Norguet",
    nameCn: "派屈克．諾蓋",
    opinionEn:
      "You cannot understand good design if you do not understand people. ",
    opinionEnPeo: "Dieter Rams",
    opinionCn: "無法瞭解人，就無法瞭解何謂好的設計",
    imageUrl: pic1,
    // "https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1702857600&Signature=fr0AiEO1QMlnQlHSe5RQtq2-AZOax778tRezRSwQ-jjAhJMiStYFMLtezXwO1cdDvpnsM38uhoQEZ56EUUMq6JbSXoF5HhkfpxH3qcAhAy0Zf~S9HYRnh7jYxMUHmJvmHpCgJjHla7xmDfR70l5NkdbMDRT9JnJb8nWt2tH~jN55lmn~8Zt8HtVtSvrD8mPmjS2b0lnkYaUIOcxBecBNSeSfSzmX72isxz0o6PIO27WcK54kWUkZ6bvQ8SOCabTVI8OnUrHi04zf-N14bRf0sG8hJPA20W9Y9XxOMnZNte0kzB2~umB-efIyT-mPSUvNSBjCL5DtUixFU2wgqf905Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
]);
</script>
<template>
  <div
    v-for="person in peopleopinion"
    :key="person.id"
    class="opinion flex grid grid-cols-12 gap-4"
  >
    <div class="photo__container md:col-span-4 col-span-12">
      <img :src="person.imageUrl" alt="" class="photo" />
      <div class="overlay">
        <p>industrial designer｜工業設計師</p>
      </div>
    </div>

    <div
      class="flex-col md:col-span-6 md:col-start-6 col-span-12 self-center md:text-left text-center"
    >
      <!-- 名字 -->
      <p class="text__nameEn">{{ person.nameEn }}</p>
      <p class="text__nameCn">{{ person.nameCn }}</p>
      <!-- icon -->
      <div class="line-container md:justify-end justify-center">
        <div class="line__opinion md:flex hidden"></div>
        <i class="pi pi-heart mx-3"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <!-- 觀點 想法 -->
      <p class="text__opinionEn text-left">“{{ person.opinionEn }}”</p>

      <p class="text__opinionEnPeo">&nbsp; &nbsp;—{{ person.opinionEnPeo }}</p>
      <p class="text__opinionCn">
        「{{ person.opinionCn }} 」—{{ person.nameCn }}
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
  width: 100%;
  height: 478px;
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
  /* 悬停时的黑色滤镜效果 */
  opacity: 1;
  /* 显示遮罩层和文字 */
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
