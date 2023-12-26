<script setup>
import ProjectShowcase from "./components/ProjectShowcase.vue";
import CategorySelector from "./components/CategorySelector.vue";
import CategorySelectorRWD from "./components/CategorySelectorRWD.vue";
import LoadMore from "./components/LoadMore.vue";
import cover from "~/assets/images/ScopeBg.png";
const isRwdMenuOpen = ref(false);

const toggleRwdMenu = () => {
  isRwdMenuOpen.value = !isRwdMenuOpen.value;
};
// 假project 待API
const projects = [
  {
    id: "1",
    name: "Project A",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/133c/aae5/b5c0d95ffc5aaf1bba7bf39ccc61c2e1?Expires=1704067200&Signature=bDP7PQYQB~KZAX3DkAvHHVGwwGn3lFpEatoaRt8hacUGOQQ69cdyH0rgMYJHMUyJGQVzcxA1rt-AAXfswYxSZNaVhlQ2iil6SrqCYIcx51kNy-CdJFFc0MplvyWs6slIqo3Vn9Jvrt7MBY4WD-LYECtwXGzO9e18PPfbDcisxdre2yOJH-A9ESwyUtg6y5PAxTHfNp9-W78IY3x1B17cvk4wScqPIXxgTMKDbHT3ofaAyK7p~oPV9MIxLaYRMzMba1lNCqkazjAy1I9OrjbRc4YRg-zeu2QdVMzGnqGytp77PGv5dvjVsrymdmMrE8i15eFKXX7-hBIaysJmA-tqNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "2",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1704067200&Signature=X4JQ76l07kYYyqBTqpcuIpd~4n6von01779UYYBt6Vm6lOGdrJqru~s1XMQZ87ilS3-YRwYF6Zjc--A~KyO0uKr3GU46VC8UDmhCYjNCtseBWV51xkIqMt~fzgDWjG7j2-szHnsEThhZgJj2pG8kX2qO8wa73k61wAj3onGwwXuyPle4Ml1Xv6K0fAFbdtsBGMDTPkQYshG6nSe9DV5SAGeY5vcAXxBAAUa7Rt-un~UbqvJGwBNwfVmYXTtntVvOD-ltiIiDqcKR1Pr1XdNev03aBuECrDUdcCePeZC9~yUZXPv8zzAGG3~GIOPZ8R6gMdzhBJyi8yOCaOQ7n9FxIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "3",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ee85/d08d/f553c6b6534b9463f62c166db74f6c81?Expires=1704067200&Signature=p3w1E7LlpmUR8QyxEgO7TvIRUijxx1v6Uhs3xJKE5aAUYy0XAc9C0S332RSrTfiQDheFhWs4m9AeBHCWMgwmnxrFrRQ~~9iGP0qnUeh2J5HwcsmjeWTQNgmVZ4Jq4HZl-XHLGo8sLs6t8xVZR-qF~Tj-TcMIFOkEYlSrXKRKwfEFWr3YsMFa4Aje2PBdFJVIAWAa~KXQamO1CEkuJMFuoK5AvyBdEgDBuSKdFVrUyNBEtnQmWWaxPonf1~qy1BaMDJTkw14CLyxjDDIJ7wMwxcj6kk~6-kGBq~DF51~PyxkTq6fn7ieQM6~WfDxZYdPX4hT0V2nSuJ1QcyTZ6BZASQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "4",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d171/25f7/a79ff4c276ef76dccb32f40c761e3fa4?Expires=1704067200&Signature=BpSDrVybNVTPw3FZ2p3SUaFDFVw9rgG5G1SDny5-AM1W8sg1byUd74SCJQBS42gzZy1JQsPRlOPxjJTnofBn0R9ipEqFRpLy8n8ytCvhYvgoll0QXFvs0nJQH6qlXhqF--cui4iVGVnnfh~qP2eCA~w3RXZGE3~B~yryaDWI68XM6aQ5xSNj8GkjN0~GorvCnDkXff-LwDRNV9CHZDovit1DHBKhF7NvfdfwiWJgQ47GPNQTM-r-xCOESbsjHmoI9AfqoZpAhKpM22NfoAPnc3eeIkQ-mBG821OJFUMLFWvU79zvwy5UQ1ozlwYhB4SXk5gF318EuFH2ktyqLNOJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "5",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e1c/e8e7/bfe5fe2c18e02b697cf526a6f564455a?Expires=1704067200&Signature=K20ZxgMtGIbOHm7X1mtlERGL4Kb2pfG4feVqzYB-e3xNAIObkd-p5pD0AUXzF8qhQ7l5eNsEkC0ifMi3Y7olN4Pu7WvkzCPVuBr3PCb17rsOVMiTwS2u9YMo2f7Eb~4BEHbbxsROEzpRP9x9yptbRxpwztmcYCXMS5i7W45qGiUi02kFMjrDM32rhNDWO~S9bUobgMAaXqHzUYi-1yekeWoxOonkOs3VXLbIqD2~X~ghlaFleXHgFo8DeI~c1Yg7uIfgIADkhJY8zC3lmsTDjz7KwyrDwMkZZsR4LFg9dwk3jofTHem6A3bucCnnygQT27CFQ6pvLA~cvuV1jblzAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "6",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1418/7132/a717ed446cf44e8f3889a4f5a0fbf303?Expires=1704067200&Signature=AceQQLhORZPHg3CJFQjcqJBX2qsdELlFg8iRa0PUozSQiswm8ijGxy2Oc-DCK3T0BoYvYKm-btFIsr8RCv1wkivtfw7dVkFjdTNsjh5jxYM9gu7IyJ1JFJdO1LJhmoyH6B1XKqaGmwUzkyuHyLDL~eKrMuEIs4VV0ELZVlbei4MQnJk53alsSuAxPqSw4NuazcM3gr58tyVvRWMwqk3TzAcqTL9rPfuRQEPWFH5ga6hhOJZngBmbfdNWxHn~6Hk9rIxKHi4Cs6X-TTGAn4eLzdVPBwaj1TH6s4BD8SZTYbRrJedxLsjuCClAwFqR9uHaOAK3xdEVWfXUhSIANz0TIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "7",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/347f/4785/ec22566614e99f57dd7e88f129b9e188?Expires=1704067200&Signature=JV~SYXFjaBPvT~nFURG7E4aUKzX~O6wrxlB6GF3Fv23gQo3lN~Zzf3v~E4AC-J2-N4JnmWaptGHQ3tsobehSMNKQ--rosyhGBMVLXI-m0EFXx5uCLUuovcu-g9p5kB5wpOZ320cOGp2P6d1tXJLJ7jToD5DrrARiKYeejSqAUsp4JXW3Gz92HhWu5wd37aA9MMuI5h4U2F9Xt079bOHDVkdg9fLspKUUo5jZ16X9SivSfWp1l~BGxnRGmTJ2wo8oBOslfGkxrWKE7mGi1YvNFy7bJLDivl69tfTb3vtKMxWhBQhz~KzHYUkPc0DtCDN0L0NRkIyAmYJSeNADeBOjGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "8",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e1c/e8e7/bfe5fe2c18e02b697cf526a6f564455a?Expires=1704067200&Signature=K20ZxgMtGIbOHm7X1mtlERGL4Kb2pfG4feVqzYB-e3xNAIObkd-p5pD0AUXzF8qhQ7l5eNsEkC0ifMi3Y7olN4Pu7WvkzCPVuBr3PCb17rsOVMiTwS2u9YMo2f7Eb~4BEHbbxsROEzpRP9x9yptbRxpwztmcYCXMS5i7W45qGiUi02kFMjrDM32rhNDWO~S9bUobgMAaXqHzUYi-1yekeWoxOonkOs3VXLbIqD2~X~ghlaFleXHgFo8DeI~c1Yg7uIfgIADkhJY8zC3lmsTDjz7KwyrDwMkZZsR4LFg9dwk3jofTHem6A3bucCnnygQT27CFQ6pvLA~cvuV1jblzAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "9",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1418/7132/a717ed446cf44e8f3889a4f5a0fbf303?Expires=1704067200&Signature=AceQQLhORZPHg3CJFQjcqJBX2qsdELlFg8iRa0PUozSQiswm8ijGxy2Oc-DCK3T0BoYvYKm-btFIsr8RCv1wkivtfw7dVkFjdTNsjh5jxYM9gu7IyJ1JFJdO1LJhmoyH6B1XKqaGmwUzkyuHyLDL~eKrMuEIs4VV0ELZVlbei4MQnJk53alsSuAxPqSw4NuazcM3gr58tyVvRWMwqk3TzAcqTL9rPfuRQEPWFH5ga6hhOJZngBmbfdNWxHn~6Hk9rIxKHi4Cs6X-TTGAn4eLzdVPBwaj1TH6s4BD8SZTYbRrJedxLsjuCClAwFqR9uHaOAK3xdEVWfXUhSIANz0TIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "10",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/39c8/2e9e/2032a7c60c5ed08c35a6464f6c7a008f?Expires=1704067200&Signature=Q-4GGt~v7DeVSwyukbVMxwNDA89NBGuAN~PVrxep2mSpsj3p35ALJ42sncsrdnhZmKmygoAkxH9rggRbvJfxelSXOmXXrkyPW4hrSLQCCCQPl0YRuvhgbuzpnI-odmCZqxHLaVxS84wj7cCJCtsYIbzoxuX4eyPLZEQdk56ucbq1FGB4NScDNSecrfk7nkPFm98~sVavQfQ4nPuM5vFqT~0JxuBF1B73dgVjniQB8an-mTsL6F6BUNGtUFM0tWLlx-Ya4fpYQnbNuOALYqhmSO1KRymPOi1lV1IychunczRcmXeEhCr8cgSYd96GBjaMJwpD5pWqLh8HMXmcuUkJOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "11",
    name: "Project A",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/133c/aae5/b5c0d95ffc5aaf1bba7bf39ccc61c2e1?Expires=1704067200&Signature=bDP7PQYQB~KZAX3DkAvHHVGwwGn3lFpEatoaRt8hacUGOQQ69cdyH0rgMYJHMUyJGQVzcxA1rt-AAXfswYxSZNaVhlQ2iil6SrqCYIcx51kNy-CdJFFc0MplvyWs6slIqo3Vn9Jvrt7MBY4WD-LYECtwXGzO9e18PPfbDcisxdre2yOJH-A9ESwyUtg6y5PAxTHfNp9-W78IY3x1B17cvk4wScqPIXxgTMKDbHT3ofaAyK7p~oPV9MIxLaYRMzMba1lNCqkazjAy1I9OrjbRc4YRg-zeu2QdVMzGnqGytp77PGv5dvjVsrymdmMrE8i15eFKXX7-hBIaysJmA-tqNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "12",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8d68/4de7/0402767522bc5f4f81ad080a141cff0d?Expires=1704067200&Signature=X4JQ76l07kYYyqBTqpcuIpd~4n6von01779UYYBt6Vm6lOGdrJqru~s1XMQZ87ilS3-YRwYF6Zjc--A~KyO0uKr3GU46VC8UDmhCYjNCtseBWV51xkIqMt~fzgDWjG7j2-szHnsEThhZgJj2pG8kX2qO8wa73k61wAj3onGwwXuyPle4Ml1Xv6K0fAFbdtsBGMDTPkQYshG6nSe9DV5SAGeY5vcAXxBAAUa7Rt-un~UbqvJGwBNwfVmYXTtntVvOD-ltiIiDqcKR1Pr1XdNev03aBuECrDUdcCePeZC9~yUZXPv8zzAGG3~GIOPZ8R6gMdzhBJyi8yOCaOQ7n9FxIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "13",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ee85/d08d/f553c6b6534b9463f62c166db74f6c81?Expires=1704067200&Signature=p3w1E7LlpmUR8QyxEgO7TvIRUijxx1v6Uhs3xJKE5aAUYy0XAc9C0S332RSrTfiQDheFhWs4m9AeBHCWMgwmnxrFrRQ~~9iGP0qnUeh2J5HwcsmjeWTQNgmVZ4Jq4HZl-XHLGo8sLs6t8xVZR-qF~Tj-TcMIFOkEYlSrXKRKwfEFWr3YsMFa4Aje2PBdFJVIAWAa~KXQamO1CEkuJMFuoK5AvyBdEgDBuSKdFVrUyNBEtnQmWWaxPonf1~qy1BaMDJTkw14CLyxjDDIJ7wMwxcj6kk~6-kGBq~DF51~PyxkTq6fn7ieQM6~WfDxZYdPX4hT0V2nSuJ1QcyTZ6BZASQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "14",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/d171/25f7/a79ff4c276ef76dccb32f40c761e3fa4?Expires=1704067200&Signature=BpSDrVybNVTPw3FZ2p3SUaFDFVw9rgG5G1SDny5-AM1W8sg1byUd74SCJQBS42gzZy1JQsPRlOPxjJTnofBn0R9ipEqFRpLy8n8ytCvhYvgoll0QXFvs0nJQH6qlXhqF--cui4iVGVnnfh~qP2eCA~w3RXZGE3~B~yryaDWI68XM6aQ5xSNj8GkjN0~GorvCnDkXff-LwDRNV9CHZDovit1DHBKhF7NvfdfwiWJgQ47GPNQTM-r-xCOESbsjHmoI9AfqoZpAhKpM22NfoAPnc3eeIkQ-mBG821OJFUMLFWvU79zvwy5UQ1ozlwYhB4SXk5gF318EuFH2ktyqLNOJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "15",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/3e1c/e8e7/bfe5fe2c18e02b697cf526a6f564455a?Expires=1704067200&Signature=K20ZxgMtGIbOHm7X1mtlERGL4Kb2pfG4feVqzYB-e3xNAIObkd-p5pD0AUXzF8qhQ7l5eNsEkC0ifMi3Y7olN4Pu7WvkzCPVuBr3PCb17rsOVMiTwS2u9YMo2f7Eb~4BEHbbxsROEzpRP9x9yptbRxpwztmcYCXMS5i7W45qGiUi02kFMjrDM32rhNDWO~S9bUobgMAaXqHzUYi-1yekeWoxOonkOs3VXLbIqD2~X~ghlaFleXHgFo8DeI~c1Yg7uIfgIADkhJY8zC3lmsTDjz7KwyrDwMkZZsR4LFg9dwk3jofTHem6A3bucCnnygQT27CFQ6pvLA~cvuV1jblzAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: "16",
    name: "Project B",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/1418/7132/a717ed446cf44e8f3889a4f5a0fbf303?Expires=1704067200&Signature=AceQQLhORZPHg3CJFQjcqJBX2qsdELlFg8iRa0PUozSQiswm8ijGxy2Oc-DCK3T0BoYvYKm-btFIsr8RCv1wkivtfw7dVkFjdTNsjh5jxYM9gu7IyJ1JFJdO1LJhmoyH6B1XKqaGmwUzkyuHyLDL~eKrMuEIs4VV0ELZVlbei4MQnJk53alsSuAxPqSw4NuazcM3gr58tyVvRWMwqk3TzAcqTL9rPfuRQEPWFH5ga6hhOJZngBmbfdNWxHn~6Hk9rIxKHi4Cs6X-TTGAn4eLzdVPBwaj1TH6s4BD8SZTYbRrJedxLsjuCClAwFqR9uHaOAK3xdEVWfXUhSIANz0TIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
// 小螢幕前7個
const firstSevenProjects = computed(() => projects.slice(0, 7));
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :imgSrc="cover" />
      <BreadcrumbLine
        text="Home&nbsp; /&nbsp; Project &nbsp;/&nbsp; Scope"
        :showTags="true"
        :showIcon="true"
      >
        <template #icon>
          <img
            src="~/assets/icon/sliders.svg"
            alt=""
            class="md:hidden block relative"
            @click="toggleRwdMenu"
          />
        </template>
        <!-- 類別按鈕 -->
      </BreadcrumbLine>
      <div
        v-show="isRwdMenuOpen"
        class="rwd-menu-overlay"
        @click="toggleRwdMenu"
      ></div>
      <div v-show="isRwdMenuOpen" class="rwd-menu">
        <CategorySelectorRWD />
      </div>
      <div class="inner-wrap">
        <SwiperPic />
        <div class="grid grid-cols-12 gap-4">
          <div
            class="md:col-span-9 col-span-full grid grid-cols-12 gap-4 rwd-margin"
          >
            <!-- 子組件 -->
            <div
              v-for="project in projects"
              :key="project.id"
              :class="[
                project.id % 2 !== 0 ? 'md:col-start-1' : 'md:col-start-7',
                ' md:block hidden col-span-6  ',
                'justify-self-center',
              ]"
            >
              <ProjectShowcase :project="project" />
            </div>
            <div
              v-for="project in firstSevenProjects"
              :key="`mobile-${project.id}`"
              class="md:hidden col-span-12"
            >
              <ProjectShowcase :project="project" />
            </div>
          </div>
          <div class="col-span-3 md:inline-block hidden">
            <CategorySelector class="col-start-10 col-span-3" />
          </div>
          <LoadMore class="md:col-span-8 col-span-12" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
// 12/20
:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
  // margin-bottom: 2rem;
}

:deep(.line__text) {
  margin-bottom: 1.7551%;
}

:deep(.line) {
  margin-top: 4.7357%;
  // margin-bottom: 10.24%;
}

.rwd-margin {
  @include max-media(768) {
    margin-top: 31.0318%;
  }
}

.rwd-menu {
  display: block;
  position: absolute;
  top: 200px;
  right: 0;
  width: 90%;
  padding: 5%;
  margin-right: -10%;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  box-shadow: 0px 13px 2.799999952316284px 0px #00000040;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #d9d9d9b5;
    z-index: 100;
  }
}
</style>
