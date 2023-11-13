<script setup>
const isOpen = ref(false);
const selected = ref("Year");
const options = ref([
  "ALL",
  "2023",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option;
  isOpen.value = false;
};
</script>

<template>
  <div class="line md:mb-0 mb-10">
    <div class="">
      <div class="flex justify-between">
        <div>
          <p class="home">Home/Issue</p>
        </div>
        <div class="dropdown" @click="toggleDropdown">
          <div class="selected justify-end">
            Sort: {{ selected }}
            <span class="arrow">▼</span>
          </div>
          <ul class="options" v-if="isOpen">
            <li
              v-for="option in options"
              :key="option"
              @click="selectOption(option)"
            >
              {{ option }}
              <span v-if="option === selected">✔</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.line {
  // margin-bottom: 10%;
}
.dropdown {
  border: none;

  // position: relative;
}

.selected {
  padding: 5px;
  display: flex;
  // justify-content: space-around;
}

.arrow {
  margin-left: 1rem;
}

.options {
  box-shadow:
    0px 4px 10px rgba(0, 0, 0, 0.03),
    0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 2px 6px rgba(0, 0, 0, 0.12);
  position: absolute;
  // top: 100%;
  width: 7%;
  background-color: white;
  z-index: 10;
  list-style: none;
}

.options li {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

.options li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
